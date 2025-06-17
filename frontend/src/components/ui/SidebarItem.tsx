import { TwiiterIcon } from "../icons/Twiiter"
import { YoutubeIcon } from "../icons/Youtube"


export const SidebarItem=()=>{
    return(
        <div className="">
            <div className="px-4 py-6 text-gray-700">
                <div className="flex gap-2 p-4 ">
                <TwiiterIcon size="lg"/>
                <h1>Tweets</h1>
                </div>
                <div className="flex gap-2 p-4">
                <YoutubeIcon size="lg"/>
                <h1>Youtube</h1>
                </div>
                <div className="flex gap-2 p-4">
                <TwiiterIcon size="lg"/>
                <h1>Documents</h1>
                </div>
                <div className="flex gap-2 p-4">
                <YoutubeIcon size="lg"/>
                <h1>Links</h1>
                </div>
            </div>
        </div>
    )
}