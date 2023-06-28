import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type IPrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: ReactNode;
};

const PrimaryButton: FC<IPrimaryButtonProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      className="transition-color inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white duration-500 ease-linear hover:bg-primary-hover hover:opacity-80 hover:duration-150"
    >
      {children}
      {icon}
    </button>
  );
};

export default PrimaryButton;
