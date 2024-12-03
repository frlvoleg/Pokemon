import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  classDiv: string;
  classBtn: string;
};

const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <div className={`${props.classDiv}`}>
      <button className={`${props.classBtn} h-full`} {...props}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
