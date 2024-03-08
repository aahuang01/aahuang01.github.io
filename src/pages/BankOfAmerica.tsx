import React from "react";
import PasswordProtection from "../components/PasswordProtection";
import ProjectHeader from "../components/ProjectHeader";
import ProjectOverview from "../components/ProjectOverview";
import ProjectItem from "../components/ProjectItem";
import {
  SectionColor,
  SectionContentImage,
  SectionContentListItem,
  SectionContentParagraph,
  SectionContentSpacing,
  SectionContentTitle,
} from "../utils/constants";

import Logo from "../assets/images/BankOfAmerica/Logo.png";
import Cover from "../assets/images/BankOfAmerica/Cover.png";
import DSMSketchFile from "../assets/images/BankOfAmerica/ProjectPage/DSMSketchFile.png";
import DSMDocumentation from "../assets/images/BankOfAmerica/ProjectPage/DSMDocumentation.png";
import InternGroup from "../assets/images/BankOfAmerica/ProjectPage/InternGroup.png";

export interface Props {}

const BankOfAmerica: React.FC<Props> = () => {
  const accentColor = "text-bofaAccent";

  return (
    <PasswordProtection className="overflow-clip">
      <ProjectHeader
        logoImg={Logo}
        title="Bank of America"
        subtitle="Preparing, refining, and transferring Bank of America’s AI/Erica design system from Sketch library to InVision’s Design System Manager."
        coverImg={Cover}
        bgColor="bg-bofa"
      />

      <ProjectOverview
        description="I had the pleasure of working with Bank of America’s Digital Experience Design team over the course of Summer 2022 in the AI/Erica virtual financial assistant space. During this time, my assignment was to migrate the existing Sketch library design system over to the newer InVision Design System Manager (DSM). Through this process, I had to take each individual component, break it apart into its elements, refine it, and reupload it into the new DSM."
        sections={[
          { title: "Timeline", values: ["May - Aug 2022"] },
          {
            title: "Project Team",
            values: [
              "Aaron Huang (Design Partner)",
              "Mohona Sengupta (Mentor)",
            ],
          },
          {
            title: "Tools",
            values: ["Sketch", "InVision (DSM)", "Keynote"],
            inlineWhenSmall: true,
          },
          {
            title: "Disciplines",
            values: [
              "Design Systems",
              "Information Architecture",
              "Systems Documentation",
            ],
            inlineWhenSmall: true,
          },
        ]}
      />

      <ProjectItem
        label="THE PROBLEM"
        content={[
          new SectionContentTitle({ text: "Background" }),
          new SectionContentParagraph({
            text: "Currently, components that seem like they can be found in multiple Sketch library sections can only be found in a specific subsection, confusing designers who try to look for them in other areas of the library.",
          }),
          new SectionContentParagraph({
            text: "The inconsistent naming conventions of components and the lack of documentation on the context of their usage also exacerbates the confusion surrounding them.",
          }),
        ]}
        bgColor={SectionColor.GRAY}
        accentColor={accentColor}
      />

      <ProjectItem
        label="THE SOLUTION"
        content={[
          new SectionContentTitle({ text: "Nomenclature" }),
          new SectionContentParagraph({
            text: "After cleaning up the existing elements in the Sketch library, the first thing that I did was rename the components to make them more intuitive to find, both in the new InVision DSM, and in the documentation.",
          }),
          new SectionContentParagraph({
            text: "Previously, where components could have been named by the elements that make it up, its use case in designs, or even by what color it was, the new nomenclature allows for components to be easily located by naming it before the slash using its official component category, and after the slash using its more specific use case.",
          }),
          new SectionContentSpacing(),
          new SectionContentImage({
            image: <img src={DSMSketchFile} alt="DSM Sketch File" />,
          }),
          new SectionContentSpacing(),
          new SectionContentTitle({ text: "Information Architecture" }),
          new SectionContentParagraph({
            text: "By changing the previously confusing and inconsistent naming convention to a standardized nomenclature, this completely changed the information architecture surrounding components as designers no longer had to wonder if certain components were hidden in secondary or tertiary levels of the library as all components were located in their respective categories at the primary level.",
          }),
          new SectionContentParagraph({
            text: "Because of the change in information architecture, this meant that I had to understand the use cases of all of the components, as updating and transferring the documentation required familiarity with the official component categories. ",
          }),
          new SectionContentSpacing(),
          new SectionContentImage({
            image: <img src={DSMDocumentation} alt="DSM Documentation" />,
          }),
        ]}
        accentColor={accentColor}
      />

      <ProjectItem
        label="THE RESULT"
        content={[
          new SectionContentTitle({ text: "Conclusion" }),
          new SectionContentParagraph({
            text: "After finishing the transfer of the Sketch library components and documentation over to the InVision DSM, I helped lead an information session, for designers working on the AI/Erica space, teaching them how to use the new system and where all the content would be located. I then presented this work at the end of my internship for the digital experience team at Bank of America.",
          }),
          new SectionContentParagraph({
            text: (
              <span>
                As a disclaimer, none of the work displayed is completely
                accurate to the products that I created, as{" "}
                <b>
                  financial NDAs are especially stringent on what I can display
                  on my portfolio.
                </b>{" "}
                These designs were all recreated in Figma and are my best
                interpretations of what the DSM component library and
                documentation looked like when I reintroduced them to the
                AI/Erica team at the end of my internship.
              </span>
            ),
          }),
        ]}
        bgColor={SectionColor.GRAY}
        accentColor={accentColor}
      />

      <ProjectItem
        label="REFLECTION"
        content={[
          new SectionContentTitle({ text: "Takeaways" }),
          new SectionContentListItem({
            number: 1,
            title: "Understand your audience.",
            text: "Before designing anything, make sure to first understand and define who the intended user is, what their goals are, and their top frustrations that are keeping them from achieving their goals.",
          }),
          new SectionContentListItem({
            number: 2,
            title: "Seek constant feedback.",
            text: "The best designs are always ones that are both functional and aesthetic for their users. In order to better validate your designs, have potential users take a look through them every once in a while to see whether or not they are actually functional.",
          }),
          new SectionContentListItem({
            number: 3,
            title: "Be proactive and provide alternative solutions.",
            text: "When you finish tasks early, it’s important to go back and review your deliverables. I was consistently asking for new work, so learning how to provide alternative solutions to the same issue allowed me to productively utilize more of my downtime.",
          }),
        ]}
        accentColor={accentColor}
      />

      <ProjectItem
        content={[
          new SectionContentTitle({ text: "Internship Experience" }),
          new SectionContentParagraph({
            text: "My internship was filled with learning, new people, and fun. My first time in the Bay Area was such an awesome experience and my first time being a part of a corporate in-house design program. I learned and grew a lot as a designer over the course of these 10 weeks.",
          }),
          new SectionContentSpacing(),
          new SectionContentImage({
            image: (
              <img
                src={InternGroup}
                alt="A selfie with the other design interns."
              />
            ),
          }),
        ]}
        bgColor={SectionColor.GRAY}
        accentColor={accentColor}
      />
    </PasswordProtection>
  );
};

export default BankOfAmerica;
