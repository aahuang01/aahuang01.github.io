import React from "react";
import Header from "../components/Header";
import BoldText from "../components/BoldText";
import Subheader from "../components/Subheader";
import ProjectCover from "../components/ProjectCover";
import SectionSeparator from "../components/SectionSeparator";

/***************** IMAGES *****************/
import Edenspiekermann from "../assets/images/Edenspiekermann/ProjectCover.png";
import BankOfAmerica from "../assets/images/BankOfAmerica/ProjectCover.png";
import HighlandLibrary from "../assets/images/HighlandLibrary/ProjectCover.png";
import BantSports from "../assets/images/BantSports/ProjectCover.png";
/***************** IMAGES *****************/

export interface Props {}

const Work: React.FC<Props> = () => {
  return (
    <div className="w-[86%] lg:w-[calc(100vw-300px)] max-w-[1200px] mx-auto">
      <div className="my-[20vh]">
        <Header className="pb-16">Hi, I'm Aaron.</Header>
        <Subheader className="font-light">
          Product designer at the University of Michigan, previously designing
          for{" "}
          <a
            href="https://www.edenspiekermann.com/us/"
            target="_blank"
            rel="noreferrer"
          >
            <BoldText>Edenspiekermann</BoldText>
          </a>{" "}
          and{" "}
          <a
            href="https://www.bankofamerica.com/"
            target="_blank"
            rel="noreferrer"
          >
            <BoldText>Bank of America</BoldText>
          </a>
          .
        </Subheader>
      </div>
      <SectionSeparator className="mb-9" text="WORK" />
      <div className="flex flex-col gap-20 md:gap-16 mb-24 md:mb-20">
        <ProjectCover
          image={Edenspiekermann}
          label="01 | PRODUCT IDEATION"
          title="Edenspiekermann"
          subtitle="Apple Vision Pro"
          link="/edenspiekermann"
        />
        <ProjectCover
          image={BankOfAmerica}
          label="02 | DESIGNS SYSTEMS"
          title="Bank of America"
          subtitle="AI/Erica"
          link="/bofa"
        />
        <ProjectCover
          image={HighlandLibrary}
          label="03 | PRODUCT DESIGN"
          title="Highland Library"
          subtitle="Website Redesign"
          link="/highland"
        />
        <ProjectCover
          image={BantSports}
          label="04 | DESIGNS SYSTEMS"
          title="Bant' Sports"
          subtitle="Pool Creation Flow"
          link="/bant"
        />
      </div>
    </div>
  );
};

export default Work;
