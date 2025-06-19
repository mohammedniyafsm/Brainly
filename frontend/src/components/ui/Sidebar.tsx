import { DeleteIcon } from "../icons/Delete"
import { SidebarItem } from "./SidebarItem"


export const Sidebar=()=>{
    return (

    <>
    <div className="h-screen w-72 bg-white-100 border-r-gray-400 fixed left-0 top-0 shadow-lg">
        <div className="flex items-center p-6 gap-2 cursor-pointer">
            <DeleteIcon size="lg"/>
            <h1 className="text-2xl font-medium">Second Brain</h1>
        </div>
        <div className="">
        <SidebarItem/>
        </div>
    </div>
    </>
    )
    
}