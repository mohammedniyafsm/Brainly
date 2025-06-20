import { TwiiterIcon } from "../icons/Twiiter";
import { YoutubeIcon } from "../icons/Youtube";

export const SidebarItem = () => {
  return (
    <div className="text-sm text-gray-800 font-medium px-2 py-4">
      {/* Sidebar Items */}
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
        <TwiiterIcon size="lg" />
        <span>Tweets</span>
      </div>
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
        <YoutubeIcon size="lg" />
        <span>Youtube</span>
      </div>
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
        <TwiiterIcon size="lg" />
        <span>Documents</span>
      </div>
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
        <YoutubeIcon size="lg" />
        <span>Links</span>
      </div>
    </div>
  );
};
