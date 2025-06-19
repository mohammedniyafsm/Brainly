import { Button } from "./Button"
import { Input } from "./CreateContentModal"


export const Signup=()=>{
    return(
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-92 h-[375px]  bg-white-100 rounded-md shadow-2xl">
            <div className="px-36 py-6">
                <h1 className="text-2xl font-medium">Signup</h1>
            </div>
            <div className="px-6">
                <Input Title="email"/>
                <Input Title="username "/>
                <Input Title="password "/>
                <div className="px-22 py-2">
                <Button text="Signup" size="lg" variant="primary"/>
                </div>
            </div>
        </div>
    </div>
    )
}