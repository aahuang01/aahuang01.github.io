import React, { useContext, useEffect } from "react";
import PasswordProtection from "../components/PasswordProtection";
import { AuthenticatedContext, BackgroundColorContext } from "../App";
import Logo from "../assets/images/Edenspiekermann/Logo.png";
import Cover from "../assets/images/Edenspiekermann/Cover.png";
import Header from "../components/Header";
import Subheader from "../components/Subheader";

export interface Props {}

const Edenspiekermann: React.FC<Props> = () => {
  const { setBGColor } = useContext(BackgroundColorContext);
  const { authenticated } = useContext(AuthenticatedContext);

  useEffect(() => {
    if (authenticated) {
      setBGColor("bg-edenspiekermann");
    }

    return () => {
      setBGColor("");
    };
  }, [authenticated, setBGColor]);

  return (
    <PasswordProtection className="overflow-clip">
      <img src={Logo} alt="Edenspiekermann logo" className="h-10" />
      <Header className="mt-9">Edenspiekermann</Header>
      <Subheader className="mt-20">
        Helping Bloomberg News explore the Apple Vision Pro space.
      </Subheader>
      <img
        src={Cover}
        alt="Cover containing examples of work"
        className="mt-20 w-[680px] min-w-[680px] overflow-clip"
      />

      <div className="w-full flex flex-col px-[7%] lg:px-[150px] py-20 gap-16"></div>
    </PasswordProtection>
  );
};

export default Edenspiekermann;
