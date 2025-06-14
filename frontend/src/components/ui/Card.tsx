import { DeleteIcon } from "../icons/Delete"
import { ShareIcon } from "../icons/Share"

interface CardProps {
    title: string,
    link : string,
}

export const Card =(props:CardProps)=>{
    return(
        <div className="flex gap-10">
        <div className="bg-white-100 rounded-lg max-w-80 p-6 shadow-md ">
            <div className="flex justify-between items-center ">
                <div className="flex items-center text-lg ">
                   <div className="pr-4"><ShareIcon size="md"/></div> 
                    <h1>Project Idea</h1>
                </div>
                <div className="flex text-gray-500 ">
                    <div className="pr-4"> <ShareIcon size="md"/></div>
                    <div className=""><DeleteIcon size="md"/> </div>    
                </div>
            </div>
            <div className="pt-8 ">
                <iframe className="w-full rounded-md" src="https://www.youtube.com/embed/iGvNCo62Wb4?si=arf-SkbPQfbXvjH8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
        <div className="bg-white-100 rounded-lg max-w-80 p-6 shadow-md ">
            <div className="flex justify-between items-center ">
                <div className="flex items-center text-lg ">
                   <div className="pr-4"><ShareIcon size="md"/></div> 
                    <h1>Productivity Tips</h1>
                </div>
                <div className="flex text-gray-500 ">
                    <div className="pr-4"> <ShareIcon size="md"/></div>
                    <div className=""><DeleteIcon size="md"/> </div>    
                </div>
            </div>
            <div className="pt-8 ">
                <blockquote className="twitter-tweet -full rounded-md"><p lang="en" dir="ltr">At dawn from the gateway to Mars, the launch of Starship’s second flight test <a href="https://t.co/ffKnsVKwG4">pic.twitter.com/ffKnsVKwG4</a></p>&mdash; SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw">December 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
        </div>
    )

}