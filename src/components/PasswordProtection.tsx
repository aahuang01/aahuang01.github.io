import { useContext, useEffect, useState } from "react";
import { classNames } from "../utils/helpers";
import Header from "./Header";
import totoro from "./../assets/images/Totoro.png";
import { AuthenticatedContext } from "../App";

interface Props {
  children: any;
  className?: string;
}

const PasswordProtection: React.FC<Props> = ({ children, className }) => {
  const [password, setPassword] = useState("");
  const [badAttempt, setBadAttempt] = useState(false);

  const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);

  return (
    <div className="last:[&>.FooterFiller]:block">
      {authenticated ? (
        children
      ) : (
        <div
          className={classNames(
            className ? className : "",
            "w-full flex flex-col items-center px-[7%] lg:px-[150px] py-5 md:py-16"
          )}
        >
          <div className="flex flex-col items-center md:flex-row gap-16 lg:gap-28">
            <div className="w-1/3 min-w-[230px] max-w-[320px] h-auto">
              <img
                src={totoro}
                alt="An illustration of Totoro, holding a UMich mug."
              />
            </div>
            <div className="flex flex-col gap-8 md:gap-16">
              <Header>
                Uh oh, Totoro ate the content of this project page.
              </Header>
              <Header>Type in the password to view this project.</Header>
              <form
                onSubmit={(event: any) => {
                  event.preventDefault();
                  if (password === process.env.REACT_APP_PROJECT_PASSWORD) {
                    setAuthenticated(true);
                  } else {
                    setBadAttempt(true);
                  }
                }}
                className="flex w-full gap-2"
              >
                <input
                  className="border-2 border-appleGray rounded-[5px] px-4 py-2 text-24 font-medium text-contrastGray focus:outline-none w-full"
                  value={password}
                  onChange={(e) => {
                    setBadAttempt(false);
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
                <button
                  disabled={badAttempt}
                  className="bg-almostBlack text-background text-20 font-medium rounded-[5px] py-4 px-6 disabled:bg-appleGray"
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
