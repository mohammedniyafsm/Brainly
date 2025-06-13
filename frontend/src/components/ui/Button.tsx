import type { ReactElement } from "react"

 interface ButtonProps {
    variant : "primary" | "secodary",
    text: string,
    startIcon?:ReactElement,
    EndIcon?:ReactElement,
    onclick?:()=>void,
}

const variantstyle

export const Button =(props:ButtonProps)=>{
    return <button></button>
}