import React from "react";
import TextSection from "../components/TextSection";
import PumpkinsPortrait from "../assets/images/PumpkinsPortrait.png";
import PasswordProtection from "../components/PasswordProtection";

export interface Props {}

const Edenspiekermann: React.FC<Props> = () => {
  return (
    <PasswordProtection>
      Edenspiekermann page
      <div className="w-full flex flex-col px-[7%] lg:px-[150px] py-20 gap-16"></div>
    </PasswordProtection>
  );
};

export default Edenspiekermann;
