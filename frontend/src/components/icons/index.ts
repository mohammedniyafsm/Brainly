export interface IconProps {
    size : "sm" | "md" | "lg",
    onClick ? : ()=> void;
    onClose ? : ()=> void ;
}

export const iconsizeVariant = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-6",
}

export const defaultStyle = "cursor-pointer";