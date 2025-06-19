import { TwiiterIcon } from "../icons/Twiiter"
import { YoutubeIcon } from "../icons/Youtube"


export const SidebarItem=()=>{
    return(
        <div className="">
            <div className="px-4 py-2 text-gray-700">
                <div className="flex gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <TwiiterIcon size="lg"/>
                <h1>Tweets</h1>
                </div>
                <div className="flex gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <YoutubeIcon size="lg"/>
                <h1>Youtube</h1>
                </div>
                <div className="flex gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <TwiiterIcon size="lg"/>
                <h1>Documents</h1>
                </div>
                <div className="flex gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <YoutubeIcon size="lg"/>
                <h1>Links</h1>
                </div>
            </div>
        </div>
    )
}