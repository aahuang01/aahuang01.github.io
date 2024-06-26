import React from "react";
import TextSection from "../components/TextSection";

/***************** IMAGES *****************/
import PumpkinsPortrait from "../assets/images/PumpkinsPortrait.png";
/***************** IMAGES *****************/

export interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-stretch w-[86%] lg:w-[calc(100vw-300px)] max-w-[1200px] mx-auto gap-16">
      <div className="w-full flex-1 max-h-full max-w-full h-auto w-auto overflow-hidden flex justify-center items-start">
        <img
          src={PumpkinsPortrait}
          alt="Aaron, sitting with 2 carved pumpkins on a wooden bench."
        />
      </div>
      <div className="flex-1">
        <TextSection
          header="WHO AM I"
          text="I am currently a master's student at the University of Michigan School of Information studying Human Computer Interaction and User Experience. I also received my bachelor's degree in User Experience Design with a minor in Entrepreneurship from the University of Michigan. While my main focus is in the field of UX and product design, I’m also passionate about utilizing my leadership skills in UX adjacent roles, like product and project management."
        />
        <TextSection
          header="MY STORY"
          text="After my freshman year of college, I realized that I did not want to become a doctor. Instead, I channeled all my energy into finding something that converged at the center of my interests: creativity, people, empathy, and technology. That’s when my discovery and love of UI/UX design was born."
        />
        <TextSection
          header="FUN"
          text="If I’m not designing, you can find me studying with friends, trying out new food, or playing grass net volleyball!"
        />
      </div>
    </div>
  );
};

export default About;
