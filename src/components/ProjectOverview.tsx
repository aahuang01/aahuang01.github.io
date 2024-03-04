import React from "react";
import Paragraph from "./Paragraph";
import HorizontalLine from "./HorizontalLine";

export interface Props {
  description: string;
  sections: { title: string; values: string[] }[];
}

const ProjectOverview: React.FC<Props> = ({ description, sections }) => {
  return (
    <div className="w-full flex flex-col items-center px-[7%] lg:px-[250px] my-5 md:my-16">
      <Paragraph className="text-contrastGray mb-9">{description}</Paragraph>
      <HorizontalLine />
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 mt-6">
        {sections.map((section, sectionKey) => {
          return (
            <div key={sectionKey}>
              <div className="text-16 md:text-20 text-almostBlack font-medium mb-4">
                {section.title}
              </div>
              {section.values.map((value, valueKey) => {
                return (
                  <div
                    className="text-14 md:text-16 text-contrastGray"
                    key={valueKey}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectOverview;
