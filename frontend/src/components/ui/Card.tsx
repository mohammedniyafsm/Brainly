import toast from "react-hot-toast";
import { useDeleteContent } from "../hooks/User";
import { DeleteIcon } from "../icons/Delete";
import { ShareIcon } from "../icons/Share";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useAuth } from "../../context/store";
import { TwiiterIcon } from "../icons/Twiiter";
import { YoutubeIcon } from "../icons/Youtube";

interface CardProps {
  title: string;
  link: string;
  type: string;
  id: string;
}

export const Card = ({ title, link, type, id }: CardProps) => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: deleteItem } = useDeleteContent();

  const getTweetId = (url: string): string | null => {
    const match = url.match(/status\/(\d+)/);
    return match ? match[1] : null;
  };

  const deleteSubmit = (id: string, token: string) => {
    deleteItem(
      { id, token },
      {
        onSuccess: () => {
          toast.success("Deleted Successfully");
          queryClient.invalidateQueries({ queryKey: ["content"] });
        },
        onError: (error) => {
          const axiosError = error as AxiosError<{ message?: string }>;
          toast.error(axiosError.response?.data.message || "Deletion Failed");
        },
      }
    );
  };

  const renderContent = () => {
    const contentType = type.toLowerCase();

    if (contentType === "youtube") {
      return (
        <iframe
          className="w-full rounded-md h-[180px]"
          src={link}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      );
    }

    if (contentType === "twitter") {
      const tweetId = getTweetId(link);
      return tweetId ? (
        <div className="w-full overflow-hidden">
          <TwitterTweetEmbed tweetId={tweetId} options={{ theme: "light", align: "center" }} />
        </div>
      ) : (
        <p className="text-red-500">Invalid Twitter URL</p>
      );
    }

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {link}
      </a>
    );
  };

  return (
    <div className="bg-white rounded-2xl max-w-80 p-6 m shadow-sm border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-lg">
          <div className="pr-4">
           {type === "Youtube" ? <YoutubeIcon size="md" /> : <TwiiterIcon size="md"/>}
          </div>
          <h1 className="font-medium font-inter text-md">{title}</h1>
        </div>
        <div className="flex text-gray-500 cursor-pointer">
          <div className="pr-4">
            {/* <ShareIcon size="md" /> */}
          </div>
          <DeleteIcon onClick={() => deleteSubmit(id, token)} size="md" />
        </div>
      </div>
      <div className="pt-6">{renderContent()}</div>
    </div>
  );
};
