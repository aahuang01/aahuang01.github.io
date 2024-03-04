import React from "react";
import SpreadCaps from "./SpreadCaps";
import HorizontalLine from "./HorizontalLine";

const Footer: React.FC = () => {
  return (
    <div className="w-full px-[7%] lg:px-[150px] z-50">
      <HorizontalLine className="hidden md:block bg-contrastGray" />
      <div className="flex w-full justify-between items-center my-10">
        <div className="flex gap-x-16">
          <SpreadCaps className="text-contrastGray">
            <a href="mailto:ahuanga@umich.edu" target="_blank" rel="noreferrer">
              MAIL
            </a>
          </SpreadCaps>
          <SpreadCaps className="text-contrastGray">
            <a
              href="https://www.linkedin.com/in/aahuang01/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </SpreadCaps>
        </div>
        <SpreadCaps className="hidden md:block text-contrastGray">
          AARON HUANG © 2024
        </SpreadCaps>
        <SpreadCaps className="md:hidden text-contrastGray">
          AH. 2024
        </SpreadCaps>
      </div>
    </div>
  );
};

export default Footer;
