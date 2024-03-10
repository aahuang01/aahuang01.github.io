import React from "react";
import Paragraph from "./Paragraph";
import HorizontalLine from "./HorizontalLine";
import { classNames } from "../utils/helpers";

export interface Props {
  description: string;
  sections: { title: string; values: string[]; inlineWhenSmall?: boolean }[];
}

const ProjectOverview: React.FC<Props> = ({ description, sections }) => {
  return (
    <div className="flex flex-col items-center w-[86%] lg:w-[calc(100vw-500px)] max-w-[1200px] mx-auto mb-10 mt-8 md:mb-16 md:mt-8">
      <Paragraph className="text-contrastGray mb-9 md:text-16">
        {description}
      </Paragraph>
      <HorizontalLine />
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-10 mt-6">
        {sections.map((section, sectionKey) => {
          return (
            <div key={sectionKey}>
              <div className="text-16 md:text-20 text-almostBlack font-medium mb-2.5 md:mb-4">
                {section.title}
              </div>
              {section.values.map((value, valueKey) => {
                return (
                  <>
                    <div
                      className={classNames(
                        "text-14 md:text-16 text-contrastGray",
                        section.inlineWhenSmall ? "inline md:block" : ""
                      )}
                      key={valueKey}
                    >
                      {value}
                    </div>
                    {section.inlineWhenSmall && (
                      <span className="text-14 text-contrastGray md:hidden last:hidden">
                        ,{" "}
                      </span>
                    )}
                  </>
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
