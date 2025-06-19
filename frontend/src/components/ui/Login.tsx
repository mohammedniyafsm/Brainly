import { Button } from "./Button"
import { Input } from "./CreateContentModal"


export const Login=()=>{
    return(
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-92 h-80  bg-white-100 rounded-md shadow-2xl">
            <div className="px-40 py-6">
                <h1 className="text-2xl font-medium">Login</h1>
            </div>
            <div className="px-6">
                <Input Title="username "/>
                <Input Title="password "/>
                <div className="px-24 py-4">
                <Button text="Login" size="lg" variant="primary"/>
                </div>
            </div>
        </div>
    </div>
    )
}