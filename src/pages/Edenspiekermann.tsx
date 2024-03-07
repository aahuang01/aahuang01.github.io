import React from "react";
import PasswordProtection from "../components/PasswordProtection";
import ProjectHeader from "../components/ProjectHeader";
import ProjectOverview from "../components/ProjectOverview";
import ProjectItem from "../components/ProjectItem";
import {
  Alignment,
  ImageSize,
  SectionColor,
  SectionContent,
  SectionContentImage,
  SectionContentListItem,
  SectionContentParagraph,
  SectionContentSpacing,
  SectionContentTitle,
} from "../utils/constants";

import Logo from "../assets/images/Edenspiekermann/Logo.png";
import Cover from "../assets/images/Edenspiekermann/Cover.png";
import AppleVisionProGif from "../assets/images/Edenspiekermann/ProjectPage/AppleVisionPro.gif";
import BenchmarkingExamples from "../assets/images/Edenspiekermann/ProjectPage/BenchmarkingExamples.png";
import BenchmarkingExamplesSmall from "../assets/images/Edenspiekermann/ProjectPage/BenchmarkingExamplesSmall.png";
import Brainstorming from "../assets/images/Edenspiekermann/ProjectPage/Brainstorming.png";
import AffinityMapping from "../assets/images/Edenspiekermann/ProjectPage/AffinityMapping.png";
import Flowchart from "../assets/images/Edenspiekermann/ProjectPage/Flowchart.png";
import ContentCockpit from "../assets/images/Edenspiekermann/ProjectPage/ContentCockpit.png";
import PopOutVisuals from "../assets/images/Edenspiekermann/ProjectPage/PopOutVisuals.png";
import VisualInteractability from "../assets/images/Edenspiekermann/ProjectPage/VisualInteractability.png";
import Team from "../assets/images/Edenspiekermann/ProjectPage/Team.png";
import BloombergProfessionalServices from "../assets/images/Edenspiekermann/ProjectPage/BloombergProfessionalServices.png";
import BloombergDataAnalytics from "../assets/images/Edenspiekermann/ProjectPage/BloombergDataAnalytics.png";
import BloombergNews from "../assets/images/Edenspiekermann/ProjectPage/BloombergNews.png";
import BloombergLawAndGovernment from "../assets/images/Edenspiekermann/ProjectPage/BloombergLawAndGovernment.png";
import { classNames } from "../utils/helpers";

export interface Props {}

const Edenspiekermann: React.FC<Props> = () => {
  const accentColor = "text-edenspiekermannAccent";
  const lightAccentColor = "text-edenspiekermannAccentLight";

  const cardStyle =
    "flex flex-col items-start rounded-[7px] bg-white h-[300px] w-[160px] md:h-full md:w-full md:max-w-[232px] p-2.5 lg:p-4 shadow-[0_2px_2px_0_rgba(0,0,0,0.25)]";
  const bloombergCards = (
    <div className="mx-[28px] sm:mx-[7%] flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 leading-snug text-14 md:text-16 lg:text-20 gap-x-4 gap-y-8 justify-items-center w-[336px] md:w-auto lg:w-full">
        <div className={cardStyle}>
          <div className="absolute top-0 left-0 w-full h-full z-20 rounded-[7px] bg-[#EDEDED] opacity-75" />
          <div className="absolute top-0 left-0 w-full h-full z-10 rounded-[7px] border border-appleGray" />
          <img
            src={BloombergProfessionalServices}
            alt="A stylized code editor"
            className="h-[84px] lg:h-[94px] self-center lg:mb-4"
          />
          <div className="text-center">Professional Services</div>
          <div className="flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Bloomberg Terminal</span>
          </div>
        </div>
        <div className={cardStyle}>
          <div className="absolute top-0 left-0 w-full h-full z-20 rounded-[7px] bg-[#EDEDED] opacity-75" />
          <div className="absolute top-0 left-0 w-full h-full z-10 rounded-[7px] border border-appleGray" />
          <img
            src={BloombergDataAnalytics}
            alt="Graphs and data points"
            className="h-[84px] lg:h-[94px] self-center lg:mb-4"
          />
          <div className="text-center">Data Analytics</div>
          <div className="flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Portfolio Management & Analytics</span>
          </div>
          <div className="flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Real Time & Data Trading</span>
          </div>
        </div>
        <div className={classNames(cardStyle, "md:col-start-2 md:row-start-1")}>
          <div className="absolute top-0 left-0 w-full h-full z-10 rounded-[7px] border border-appleGray border-4" />
          <img
            src={BloombergNews}
            alt="Digital news"
            className="h-[84px] lg:h-[94px] self-center lg:mb-4"
          />
          <div className="text-center">Bloomberg News</div>
          <div className="px-[12px] flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>News (Articles, Businessweek)</span>
          </div>
          <div className="px-[12px] flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Audio (Radio, Podcast)</span>
          </div>
          <div className="px-[12px] flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Video (TV+, Originals)</span>
          </div>
          <div className="px-[12px] flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Live Events</span>
          </div>
          <div className="px-[12px] flex gap-1">
            <span className="text-edenspiekermannAccent">→</span>
            <span>Others</span>
          </div>
        </div>
        <div className={cardStyle}>
          <div className="absolute top-0 left-0 w-full h-full z-20 rounded-[7px] bg-[#EDEDED] opacity-75" />
          <div className="absolute top-0 left-0 w-full h-full z-10 rounded-[7px] border border-appleGray" />

          <img
            src={BloombergLawAndGovernment}
            alt="Items of law"
            className="h-[84px] lg:h-[94px] self-center lg:mb-4"
          />
          <div className="text-center">Bloomberg Law & Government</div>
        </div>
        <div className="col-span-2 bg-[#C3CACD] px-7 py-6 rounded-lg max-w-[464px] mt-[18px] lg:mt-[40px] text-16 lg:text-20 md:col-start-2 md:col-span-1 md:w-[464px]">
          <svg
            width="47"
            height="58"
            viewBox="0 0 47 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[80%] left-[18%] md:left-[45%] lg:bottom-[90%]"
          >
            <path
              d="M20.7112 2.03363C21.7126 -0.492055 25.2874 -0.492054 26.2888 2.03363L46.5538 53.1443C47.3347 55.1136 45.8836 57.25 43.765 57.25H3.23497C1.11645 57.25 -0.334667 55.1136 0.446174 53.1443L20.7112 2.03363Z"
              fill="#C3CACD"
            />
          </svg>
          We are focusing on Bloomberg News as it is the <b>most accessible</b>,
          which means it has the <b>broadest audience</b>, and the{" "}
          <b>most brand recognition</b> and
          <b>exposure.</b>
        </div>
      </div>
    </div>
  );

  const contentCockpit = <div className="bg-white "></div>;

  return (
    <PasswordProtection className="overflow-clip">
      <ProjectHeader
        logoImg={Logo}
        title="Edenspiekermann"
        subtitle="Helping Bloomberg News explore the Apple Vision Pro space."
        coverImg={Cover}
        bgColor="bg-edenspiekermann"
      />
      <ProjectOverview
        description="Over the summer of 2023, I was thrilled to have the chance to work with Edenspiekermann’s US branch, an independent design consultancy based in Los Angeles. I had the privilege of working alongside one of their biggest clients, Bloomberg, to benchmark ways in which news media outlets currently utilize the AR/VR/XR space to provide value for their users. This allowed us to generate ways in which Bloomberg News could utilize the up and coming Apple Vision Pro space to provide unique value for their users."
        sections={[
          { title: "Timeline", values: ["May - Aug 2023"] },
          {
            title: "Project Team",
            values: [
              "Aaron Huang (Research & Design)",
              "Jens Rauenbusch (Mentor)",
            ],
          },
          {
            title: "Tools",
            values: ["Figma", "Keynote"],
          },
          {
            title: "Disciplines",
            values: ["Competitive Analysis", "User Research"],
          },
        ]}
      />

      <ProjectItem
        label="OVERVIEW"
        content={[
          new SectionContentTitle({ text: "Background" }),
          new SectionContentParagraph({
            text: "With the entrance of the Apple Vision Pro into the AR/VR space, our client, Bloomberg, wants to be known as a news media pioneer at the forefront of the newest Apple frontier.",
          }),
        ]}
        bgColor={SectionColor.GRAY}
        accentColor={accentColor}
      />

      <ProjectItem
        label="BACKGROUND RESEARCH"
        content={[
          new SectionContentTitle({ text: "Apple Vision Pro" }),
          new SectionContentParagraph({
            text: "The Apple Vision Pro is Apple’s new AR/VR headset that blends digital content with the physical world. Although the concept is not new, the Vision Pro differs from other headsets as it utilizes eye-tracking, hand gestures, and voice commands to navigate and make selections rather than handheld controls or joysticks.",
          }),
          new SectionContentImage({
            image: (
              <img
                src={AppleVisionProGif}
                alt="A gif of an Apple Vision Pro at work."
              />
            ),
          }),
          new SectionContentSpacing(),
          new SectionContentTitle({ text: "Bloomberg" }),
          new SectionContentParagraph({
            text: "These are the most important sections of Bloomberg’s business model:",
          }),
          new SectionContent({
            content: bloombergCards,
          }),
        ]}
        accentColor={accentColor}
      />

      <ProjectItem
        content={[
          new SectionContentTitle({ text: "Competitive Benchmarking" }),
          new SectionContentParagraph({
            text: "We analyzed examples of existing AR/VR technology in industries directly related to Bloomberg, like news media and finance, as well as industries that were tangentially related, like fashion or sports.",
          }),
          new SectionContentSpacing(),
          new SectionContentImage({
            image: (
              <img
                src={BenchmarkingExamples}
                alt="Examples of competitive benchmarking for the AR/VR space."
              />
            ),
            smallImage: (
              <img
                src={BenchmarkingExamplesSmall}
                alt="Examples of competitive benchmarking for the AR/VR space."
              />
            ),
            size: ImageSize.WIDE,
          }),
        ]}
        bgColor={SectionColor.GRAY}
        accentColor={accentColor}
      />

      <ProjectItem
        label="OVERVIEW"
        content={[
          new SectionContentTitle({ text: "Problem Statement" }),
          new SectionContentParagraph({
            text: (
              <span className="font-medium">
                How might we create value for users, that{" "}
                <span className="text-edenspiekermannAccentLight">
                  utilizes the spatial aspect
                </span>{" "}
                of the Vision Pro, while still conveying the{" "}
                <span className="text-edenspiekermannAccentLight">
                  brand feel and familiarity
                </span>{" "}
                of the Bloomberg ecosystem?
              </span>
            ),
          }),
        ]}
        bgColor={SectionColor.BLACK}
        accentColor={lightAccentColor}
      />

      <ProjectItem
        label="IDEATION"
        content={[
          new SectionContentTitle({ text: "Brainstorming" }),
          new SectionContentImage({
            image: (
              <img
                src={Brainstorming}
                alt="The brainstorming session that Aaron led."
              />
            ),
            size: ImageSize.SMALL,
          }),
          new SectionContentSpacing(),
          new SectionContentTitle({
            text: "Affinity Mapping",
            alignment: Alignment.RIGHT,
          }),
          new SectionContentImage({
            image: (
              <img
                src={AffinityMapping}
                alt="The resulting sticky notes from an affinity mapping session."
              />
            ),
            size: ImageSize.SMALL,
            alignment: Alignment.RIGHT,
          }),
          new SectionContentSpacing(),
          new SectionContentTitle({ text: "Compiling" }),
          new SectionContentParagraph({
            text: "Our approach to coming up with good thought starters was to use a large quantity of ideas, and narrow the ideas to the ones that were the most interesting or could find the most value for Bloomberg. That way, after they were refined, the resulting thought starters were both applicable and inspiring.",
          }),
          new SectionContentSpacing(),
          new SectionContentImage({
            image: (
              <img
                src={Flowchart}
                alt="A flowchart describing the compilation process."
              />
            ),
            size: ImageSize.WIDE,
          }),
        ]}
        accentColor={accentColor}
      />

      <ProjectItem
        label="FINAL DELIVERABLE"
        content={[
          new SectionContentTitle({ text: "Thought Starters" }),
          new SectionContentParagraph({
            text: "Our final ideas were curated from the brainstorming and revision process detailed above and sketched out into these thought starters. Our hope with these ideas is not that Bloomberg picks some of them and implements them, although that wouldn’t be a bad outcome, but rather that they use these as inspiration to help guide their own ideation of potential features/products for Bloomberg to incorporate into the Apple Vision Pro experience.",
          }),
          new SectionContentSpacing(),
          new SectionContentImage({
            image: <img src={ContentCockpit} alt="Content cockpit" />,
          }),
          new SectionContentImage({
            image: <img src={PopOutVisuals} alt="Pop-out visuals" />,
          }),
          new SectionContentImage({
            image: (
              <img src={VisualInteractability} alt="Visual interact-ability" />
            ),
          }),
        ]}
        accentColor={accentColor}
        bgColor={SectionColor.GRAY}
      />

      <ProjectItem
        label="REFLECTION"
        content={[
          new SectionContentTitle({ text: "Takeaways" }),
          new SectionContentListItem({
            number: 1,
            title: "Ideate in diversity.",
            text: "Make sure that brainstorming sessions or ideation happen with many different experiences and roles present. This allows for a wider breadth of ideas and for others to continuously build off of existing suggestions.",
          }),
          new SectionContentListItem({
            number: 2,
            title: "High quality presentations",
            text: "help to communicate ideas more effectively. Make sure that you refine your presentations just as well as how you might visually improve your designs.",
          }),
        ]}
        accentColor={accentColor}
        bgColor={SectionColor.BLACK}
      />

      <ProjectItem
        content={[
          new SectionContentTitle({ text: "Internship Experience" }),
          new SectionContentParagraph({
            text: "While I was working this internship fully remote, the week that I spent in Los Angeles working alongside my mentor, Jens, was such an engaging and fun experience. I learned so much about visual design, research, and the business side of design during my time at Edenspiekermann and I was so blessed to have to opportunity to work alongside such wonderful people!",
          }),
          new SectionContentImage({
            image: <img src={Team} alt="The Edenspiekermann design team." />,
          }),
        ]}
        accentColor={accentColor}
      />
    </PasswordProtection>
  );
};

export default Edenspiekermann;
