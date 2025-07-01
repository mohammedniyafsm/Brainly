import { useState } from "react";
import { useShareLink } from "../hooks/User";
import { CloseIcon } from "../icons/Close";
import { CopyIcon } from "../icons/Copy";
import { Button } from "./Button";
import { useAuth } from "../../context/store";
import toast from "react-hot-toast";

interface ShareBrainProps {
  open: boolean;
  onClose: () => void;
}

export const ShareBrain: React.FC<ShareBrainProps> = ({ open, onClose }) => {
  if (!open) return null;

  const { token } = useAuth();
  const { mutate: share, isPending } = useShareLink();

  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const ShareBrainSubmit = () => {
    if (!token) return;

    share(
      { share: true, token },
      {
        onSuccess: (response) => {
          const fullLink = `http://localhost:5173/share/${response.hash}`;
          toast.success("Sharable Link Created")
          setShareUrl(fullLink);
        },
      }
    );
  };

  const handleCopy = async () => {
    if (shareUrl) {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Copied the  Link")
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-300/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white-100 rounded-lg shadow-sm h-64 w-[410px] px-6 py-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between">
          <div className="font-bold font-inter text-md text-gray-900">
            Share Your Second Brain
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <CloseIcon size="md" />
          </div>
        </div>

        {/* Description */}
        <div className="pt-1">
          <p className="text-sm py-4 text-gray-500 font-inter leading-5.5">
            Share your entire collection of notes, documents, <br />
            tweets, and videos with others. They’ll be able to <br />
            import your content into their own SecondBrain.
          </p>
        </div>

        {/* Button */}
        <div className="px-1 items-center">
          <Button
            onclick={ShareBrainSubmit}
            disabled={isPending}
            text={isPending ? "Sharing..." : "Share Brain"}
            startIcon={<CopyIcon size="md" />}
            variant="primary"
            size="xl"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-center py-4 gap-1">
          <h1 className="text-xs font-inter text-gray-500">3 items will be shared</h1>

          {/* Show Link after sharing */}
          {shareUrl && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-blue-600 underline break-all max-w-[250px]">
                {shareUrl}
              </span>
              <button onClick={handleCopy} className="text-xs text-gray-600">
                {copied ? "Copied!" : <CopyIcon size="sm" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
