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
    "lg" : "py-6 px-8",
}

const defaultStyle = "rounded-md flex items-center m-4 font-normal"

const variantStyles = {
    "primary" : "bg-purple-600 text-white ",
    "secondary" : "bg-purple-300 text-purple-600",
}

export const Button =(props:ButtonProps)=>{
    return <button className={`${variantStyles[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon }</div>:null}
        {props.text}{props.EndIcon ? <div className="pl-2">{props.EndIcon }</div>:null}
        </button>
}
