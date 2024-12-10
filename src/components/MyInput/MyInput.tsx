import { FC, ReactNode, useState } from "react";
import Input from "../../ui/Input/Input";
import { Typography } from "../../ui/Typography/Typography";

type MyInputProps = {
  children: ReactNode;
  placeholder: string;
  type: string;
};

const MyInput: FC<MyInputProps> = ({ children, ...props }) => {
  const inputValue = JSON.parse(sessionStorage.getItem("inputValue") ?? "");
  const [value, setValue] = useState(inputValue);
  sessionStorage.setItem("inputValue", JSON.stringify(value) ?? "");

  const inputBorder =
    "placeholder:text-[1.4rem] size-full border focus:border-[#365FAC] focus:outline-none";

  return (
    <div className="flex justify-between gap-[0.8rem] flex-col">
      <Typography>
        <span className="text-red-600">*</span> {children}
      </Typography>
      <Input
        classDiv="w-full h-[3.2rem]"
        classInput={inputBorder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default MyInput;
