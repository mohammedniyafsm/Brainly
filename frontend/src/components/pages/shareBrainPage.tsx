import { useParams } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { YoutubeIcon } from "../icons/Youtube";
import { TwiiterIcon } from "../icons/Twiiter";
import { useSharedContent } from "../hooks/User"; // adjust path

export const SharedPage = () => {
  const { hash } = useParams<{ hash: string }>();
  const { data, isLoading, isError, error } = useSharedContent(hash || "");

  const getTweetId = (url: string) => {
    const match = url.match(/status\/(\d+)/);
    return match ? match[1] : null;
  };

  const renderContent = (item: any) => {
    const contentType = item.type?.toLowerCase();

    if (contentType === "youtube") {
      return (
        <iframe
          className="w-full rounded-md h-[180px]"
          src={item.link}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (contentType === "twitter") {
      const tweetId = getTweetId(item.link);
      return tweetId ? (
        <TwitterTweetEmbed tweetId={tweetId} options={{ theme: "light" }} />
      ) : (
        <p className="text-red-500">Invalid Twitter Link</p>
      );
    }

    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {item.link}
      </a>
    );
  };

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">{(error as Error).message}</p>;

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">
        Shared Brain of{" "}
        <span className="text-indigo-600">{data.userId?.username}</span>
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {data.content.map((item: any) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl max-w-80 p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.type === "Youtube" ? <YoutubeIcon size="md" /> : <TwiiterIcon size="md" />}
              <h2 className="font-medium text-md">{item.title}</h2>
            </div>
            <div>{renderContent(item)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
