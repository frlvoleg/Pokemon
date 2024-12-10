import { FC } from "react";

type SignInProps = {
  signIn: boolean;
  setSignIn: (value: boolean) => void;
};

const Switcher: FC<SignInProps> = ({ signIn, setSignIn }) => {
  const chooseSignIn =
    "text-[#365FAC] after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#365FAC] after:mt-[1.2rem]";

  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between gap-[3.2rem] text-[1.4rem] font-[400]">
        <div>
          <button
            onClick={() => setSignIn(true)}
            className={!signIn ? chooseSignIn : ""}
          >
            Sign up
          </button>
        </div>
        <div>
          <button
            onClick={() => setSignIn(false)}
            className={signIn ? chooseSignIn : ""}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Switcher;
