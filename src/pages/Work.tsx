import React from "react";
import Header from "../components/Header";
import BoldText from "../components/BoldText";
import Subheader from "../components/Subheader";
import ProjectItem from "../components/ProjectItem";
import SectionSeparator from "../components/SectionSeparator";

import Edenspiekermann from "../assets/images/Edenspiekermann.png";
import BankOfAmerica from "../assets/images/BankOfAmerica.png";
import HighlandLibrary from "../assets/images/HighlandLibrary.png";
import BantSports from "../assets/images/BantSports.png";

export interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div className="w-full px-[7%] lg:px-[150px]">
      <div className="my-[20vh]">
        <Header className="pb-16">Hi, I'm Aaron.</Header>
        <Subheader className="font-light">
          Product designer at the University of Michigan, previously designing
          for <BoldText>Edenspiekermann</BoldText> and{" "}
          <BoldText>Bank of America</BoldText>.
        </Subheader>
      </div>
      <SectionSeparator className="mb-9" text="WORK" />
      <div className="flex flex-col gap-20 md:gap-16 mb-24 md:mb-20">
        <ProjectItem
          image={Edenspiekermann}
          label="01 | PRODUCT IDEATION"
          title="Edenspiekermann"
          subtitle="Apple Vision Pro"
        />
        <ProjectItem
          image={BankOfAmerica}
          label="02 | DESIGNS SYSTEMS"
          title="Bank of America"
          subtitle="AI/Erica"
        />
        <ProjectItem
          image={HighlandLibrary}
          label="03 | PRODUCT DESIGN"
          title="Highland Library"
          subtitle="Website Redesign"
        />
        <ProjectItem
          image={BantSports}
          label="04 | DESIGNS SYSTEMS"
          title="Bant' Sports"
          subtitle="Pool Creation Flow"
        />
      </div>
    </div>
  );
};

export default Work;
