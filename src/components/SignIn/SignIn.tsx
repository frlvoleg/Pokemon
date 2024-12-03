import { Typography } from "../../ui/Typography/Typography";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { FC } from "react";
import logo from "../../imgs/logo.png";

type SignInProps = {
  signIn: boolean;
  setSignIn: (value: boolean) => void;
};

const chooseSignIn =
  "text-[#365FAC] after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#365FAC] after:mt-[1.2rem]";

const inputBorder =
  "placeholder:text-[1.4rem] size-full border focus:border-[#365FAC] focus:outline-none";

const SignIn: FC<SignInProps> = ({ signIn, setSignIn }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[35.2rem] flex justify-between gap-[2.4rem] flex-col ">
        <div className="content-center pb-[3.2rem]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-between gap-[3.2rem]">
            <Typography>
              <button
                onClick={() => setSignIn(true)}
                className={!signIn ? chooseSignIn : ""}
              >
                Sign up
              </button>
            </Typography>
            <Typography>
              <button
                onClick={() => setSignIn(false)}
                className={signIn ? chooseSignIn : ""}
              >
                Sign in
              </button>
            </Typography>
          </div>
        </div>

        <div className="flex justify-between gap-[0.8rem] flex-col">
          <Typography>
            <span className="text-red-600">*</span> Login
          </Typography>
          <Input
            classDiv="w-full h-[3.2rem]"
            classInput={inputBorder}
            placeholder="Input login"
            type="text"
          />
        </div>
        <div className="flex justify-between gap-[0.8rem] flex-col">
          <Typography>
            <span className="text-red-600">*</span> Password
          </Typography>
          <Input
            classDiv="w-full h-[3.2rem]"
            classInput={inputBorder}
            placeholder="Input password"
            type="password"
          />
        </div>

        {!signIn && (
          <div className="flex justify-between gap-[0.8rem] flex-col">
            <Typography>
              <span className="text-red-600">*</span> Password confirmation
            </Typography>
            <Input
              classDiv="w-full h-[3.2rem]"
              classInput={inputBorder}
              placeholder="Input password again"
              type="password"
            />
          </div>
        )}

        <Button
          classDiv="w-[35.2rem] h-[3.2rem]"
          classBtn="bg-[#365FAC] text-white size-full"
        >
          <Typography>{signIn ? "Sign in" : "Sign up"}</Typography>{" "}
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
