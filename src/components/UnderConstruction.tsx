import React from "react";
import Kobe from "../assets/images/Kobe.gif";
import Header from "./Header";
import { Link } from "react-router-dom";

export interface Props {}

const UnderConstruction: React.FC<Props> = () => {
  return (
    <div className="w-[86%] lg:w-[calc(100vw-300px)] max-w-[1200px] mx-auto pt-10 pb-20 md:pb-32">
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-16 items-stretch">
        <div className="flex-1 flex flex-col gap-10 md:gap-20 h-full justify-between">
          <div>
            <Header>Oops, this page is still under construction!</Header>
            <Link to="/work">
              <div className="bg-almostBlack rounded-[5px] w-full text-center text-background text-16 md:text-24 font-medium py-3 px-5 mt-8">
                Back to work
              </div>
            </Link>
          </div>
          <div className="hidden md:flex text-contrastGray italic text-20 md:text-32 flex-col gap-8">
            <div className="font-medium">Job’s not finished.</div>
            <div className="font-medium">Job finished?</div>
            <div className="font-medium">No, I don’t think so.</div>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={Kobe}
            alt="A gif of Kobe saying that the job's not finished."
          />
          <div className="md:hidden pt-8 text-contrastGray italic text-20 md:text-32 flex flex-col gap-8">
            <div className="font-medium">Job’s not finished.</div>
            <div className="font-medium">Job finished?</div>
            <div className="font-medium">No, I don’t think so.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
