


export const Signup=()=>{
    return(
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <div className="h-[390px] w-[350px] shadow-sm rounded-xl bg-white py-6">
            <div className="grid auto-rows-min grid-rows-[auto_auto] px-6 items-start gap-2">
                <div className="font-semibold font-inter leading-none ">Signup</div>
                <div className="text-sm text-[#737373]  ">Enter your credentials to access your account.</div>
            </div>
            <div className="px-6">
                <form action="">
                    <div className="grid w-full items-center gap-4 pt-6">
                        <div className="grid w-full items-center gap-1 ">
                            <label htmlFor="" className="flex items-center text-sm font-medium">Username</label>
                            <input type="text" 
                              placeholder="Enter your Username"
                              className="rounded-md px-2 h-10 border border-gray-200 shadow-sm focus:border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                              />
                        </div>
                        <div className="grid w-full items-center gap-1 ">
                            <label htmlFor="" className="flex items-center text-sm font-medium">Email</label>
                            <input type="text" 
                              placeholder="Enter your email"
                              className="rounded-md px-2 h-10 border border-gray-200 shadow-sm focus:border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                              />
                        </div>
                        <div className="grid w-full items-center gap-1 ">
                            <label htmlFor="" className="flex items-center text-sm font-medium">Password</label>
                            <input type="text" 
                              placeholder="Enter your password"
                              className="rounded-md px-2 h-10 border border-gray-200 shadow-sm focus:border-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none"
                              />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex justify-between px-6 py-4 items-center">
                <div className="">
                    <button className="flex justify-center rounded-xl shadow-sm bg-white border border-gray-200 hover:bg-gray-100 px-4 py-1 cursor-pointer">Register</button>
                </div>
                <div className="">
                    <button className="flex justify-center rounded-xl shadow-sm bg-black text-white border border-gray-200 hover:bg-gray-900 px-4 py-1.5 cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    </div>
    )
}