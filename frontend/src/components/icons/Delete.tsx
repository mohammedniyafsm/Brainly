import { iconsizeVariant, type IconProps } from ".";

interface ExtendedIconProps extends IconProps {
  onClick?: () => void;
}

export const DeleteIcon = (props: ExtendedIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      onClick={props.onClick}
      className={`${iconsizeVariant[props.size]} cursor-pointer`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
