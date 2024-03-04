import React from "react";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import { classNames } from "../utils/helpers";

export interface Props {
  logoImg: any;
  title: string;
  subtitle: string;
  coverImg: any;
  bgColor: string;
}

const ProjectHeader: React.FC<Props> = ({
  logoImg,
  title,
  subtitle,
  coverImg,
  bgColor,
}) => {
  return (
    <div className="w-full flex flex-col items-center px-[7%] lg:px-[150px] my-5 md:my-16">
      <div
        className={classNames(
          "absolute w-screen z-0",
          // If the header or padding is ever changed, the calculated numbers below will need to be also
          "top-[calc(-20px-144px)] h-[calc(100%+20px+144px)] md:top-[calc(-64px-144px)] md:h-[calc(100%+64px+144px)]",
          bgColor
        )}
      />
      <img src={logoImg} alt="Project logo" className="h-10" />
      <Header className="mt-9">{title}</Header>
      <Subheader className="mt-20 text-center">{subtitle}</Subheader>
      <img
        src={coverImg}
        alt="Cover containing examples of work"
        className="mt-20 w-[680px] min-w-[680px] overflow-clip"
      />
    </div>
  );
};

export default ProjectHeader;
