import Button from "../../ui/Button/Button";
import { FC, useState } from "react";
import logo from "../../assets/img/logo.png";
import Switcher from "../Switcher/Switcher";
import MyInput from "../MyInput/MyInput";

const SignIn: FC = () => {
  const isSignIn = JSON.parse(localStorage.getItem("signIn") ?? "false");
  const [signIn, setSignIn] = useState<boolean>(isSignIn);
  localStorage.setItem("signIn", JSON.stringify(signIn));

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[35.2rem] flex justify-between gap-[2.4rem] flex-col shadow-[0_0_16px_0_rgba(58,58,58,0.1)]">
        <div className="content-center pb-[3.2rem]">
          <img src={logo} alt="Logo" />
        </div>

        <Switcher signIn={!signIn} setSignIn={setSignIn} />

        <MyInput placeholder="Input login" type="text">
          Login
        </MyInput>

        <MyInput placeholder="Input password" type="password">
          Password
        </MyInput>

        {signIn && (
          <MyInput placeholder="Input password again" type="password">
            Password confirmation
          </MyInput>
        )}

        <Button
          classDiv="w-[35.2rem] h-[3.2rem]"
          classBtn="bg-[#365FAC] text-white size-full text-[1.4rem] font-[400]"
        >
          {signIn ? "Sign in" : "Sign up"}
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
