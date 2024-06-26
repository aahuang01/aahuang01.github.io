import { useContext, useState } from "react";
import { classNames } from "../utils/helpers";
import { AuthenticatedContext } from "../App";
import Totoro from "./Totoro";
import ShowIcon from "./icons/ShowIcon";
import HideIcon from "./icons/HideIcon";

const hash = require("hash.js");

interface Props {
  children: any;
  className?: string;
}

const PasswordProtection: React.FC<Props> = ({ children, className }) => {
  const [password, setPassword] = useState("");
  const [badAttempt, setBadAttempt] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);

  return (
    <div className="last:[&>.FooterFiller]:block">
      {authenticated ? (
        children
      ) : (
        <div
          className={classNames(
            className ? className : "",
            "flex flex-col items-center w-[86%] lg:w-[calc(100vw-300px)] max-w-[1200px] mx-auto py-5 md:py-16"
          )}
        >
          <div className="flex flex-col items-center md:flex-row gap-16 lg:gap-28">
            <div className="w-1/3 min-w-[230px] max-w-[320px] h-auto">
              <Totoro />
            </div>
            <div className="flex flex-col-reverse md:flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="text-24 lg:text-32 font-medium">
                  Uh oh, Totoro ate the content of this project page.
                </div>
                <div className="text-24 lg:text-32 font-medium">
                  Type in the password to view this project.
                </div>
              </div>
              <form
                onSubmit={(event: any) => {
                  event.preventDefault();
                  if (
                    hash.sha256().update(password).digest("hex") ===
                    process.env.REACT_APP_PROJECT_PASSWORD_HASH
                  ) {
                    setAuthenticated(true);
                  } else {
                    setBadAttempt(true);
                  }
                }}
                className="flex w-full gap-2"
              >
                <div className="relative w-full">
                  <input
                    className="border-2 border-appleGray rounded-[5px] px-4 py-2 text-16 md:text-20 font-medium text-contrastGray focus:outline-none w-full pr-12"
                    value={password}
                    onChange={(e) => {
                      setBadAttempt(false);
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <div
                    className="group absolute top-3 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <HideIcon className="fill-appleGray hover:fill-contrastGray transition h-6 w-6" />
                    ) : (
                      <ShowIcon className="fill-appleGray hover:fill-contrastGray transition h-6 w-6" />
                    )}
                    <div className="group-hover:opacity-100 opacity-0 transition absolute top-[100%] -left-12 px-2 py-0.5 rounded bg-contrastGray whitespace-nowrap text-center text-16 text-background z-50 select-none pointer-events-none">
                      {showPassword ? "Hide" : "Show"} Password
                    </div>
                  </div>
                </div>
                <button
                  disabled={badAttempt}
                  className="bg-almostBlack text-background text-16 md:text-20 font-medium rounded-[5px] py-2 px-4 disabled:bg-appleGray"
                >
                  Submit
                </button>
                <div
                  className={classNames(
                    "absolute bottom-[100%] right-0 text-[#E64044] font-semibold",
                    badAttempt ? "block" : "hidden"
                  )}
                >
                  Incorrect password
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordProtection;
