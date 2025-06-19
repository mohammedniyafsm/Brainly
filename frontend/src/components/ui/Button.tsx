import type { ReactElement } from "react"

 interface ButtonProps {
    variant : "primary" | "secondary",
    size: "sm" | "md" | "lg",
    text: string,
    startIcon?:ReactElement,
    EndIcon?:ReactElement,
    onclick?:()=>void,
}

const sizeStyle = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-2 px-10",
}

const defaultStyle = "rounded-md flex items-center m-2 cursor-pointer font-normal"

const variantStyles = {
    "primary" : "bg-purple-600 text-white ",
    "secondary" : "bg-purple-300 text-purple-600",
}

export const Button =({variant,size,startIcon,EndIcon,text,onclick} : ButtonProps)=>{
    return <button className={`${variantStyles[variant]} ${sizeStyle[size]} ${defaultStyle}`} onClick={onclick}>
        {startIcon ? <div className="pr-2">{startIcon }</div>:null}
        {text}{EndIcon ? <div className="pl-2">{EndIcon }</div>:null}
        </button>
}
