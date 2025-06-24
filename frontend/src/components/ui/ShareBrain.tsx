import { CloseIcon } from "../icons/Close";
import { CopyIcon } from "../icons/Copy";
import { Button } from "./Button";


interface ShareBrainProps {
  open: boolean;
  onClose: () => void;
}

export const ShareBrain: React.FC<ShareBrainProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-300/50 z-50" onClick={ onClose }>
        <div className="bg-white-100 rounded-lg shadow-sm  h-64 w-[410px] px-6 py-6 " onClick={(e)=>{e.stopPropagation()}}>
            <div className="flex justify-between">
              <div className="font-bold font-inter text-md text-gray-900">Share Your Second Brain</div>
              <div className="" onClick={onClose} ><CloseIcon  size="md"/></div>
            </div>
            <div className="pt-1">
                <p className="text-sm py-4 text-gray-500 font-inter leading-5.5">Share Your Entire Collection of Notes,documents, <br />
                   Tweets, and videos with Others.They'll be able to <br />
                   import Your content into their own SecondBrain.</p>
            </div>
            <div className="px-1 items-center ">
                <Button text="Share Brain" startIcon={<CopyIcon size="md"/>} variant="primary" size="xl" />
            </div>
            <div className="flex items-center justify-center py-4">
                <h1 className="text-xs  font-inter text-gray-500 ">3 items will be Shared</h1>
            </div>
        </div>
        
      
    </div>
  );
};
