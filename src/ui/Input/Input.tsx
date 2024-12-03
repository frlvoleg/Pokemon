import { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  classDiv?: string;
  classInput?: string;
};

const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <div className={`${props.classDiv}`}>
      <input className={`${props.classInput}`} {...props} />
    </div>
  );
};
export default Input;
