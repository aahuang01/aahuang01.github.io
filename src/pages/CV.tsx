import React from "react";
import CVSection from "../components/CVSection";
import CVEducationItem from "../components/CVEducationItem";
import CVItem from "../components/CVItem";
import CVProject from "../components/CVProject";
import Header from "../components/Header";

export interface Props {}

const CV: React.FC<Props> = () => {
  return (
    <div className="w-[86%] lg:w-[calc(100vw-300px)] max-w-[1200px] mx-auto pt-10 pb-5">
      <Header className="mb-7">Aaron Huang</Header>
      <CVSection title="EDUCATION">
        <CVEducationItem
          title="University of Michigan"
          subtitle="School of Information"
          description="Masters of Science in Human Computer Interaction and User Experience"
          time="2023 - 2024"
        />
        <CVEducationItem
          title="University of Michigan"
          subtitle="School of Information"
          description="Bachelors of Science in Information with focus in User Experience Design and 
          minor in Entrepreneurship "
          time="2019 - 2023"
        />
      </CVSection>
      <CVSection title="EXPERIENCE">
        <CVItem
          title="University of Michigan"
          role="Graduate Student Instructor"
          time="2023 - 2024"
        >
          <CVProject
            title="Automotive UX"
            description="Guided master’s students with individual projects and comprehension of automotive design topics and current automotive trends while maintaining professional relationships with General Motors."
          />
        </CVItem>
        <CVItem title="Edenspiekermann" role="Design Intern" time="Summer 2023">
          <CVProject
            title="Bloomberg - Apple Vision Pro"
            description="Performed competitive benchmarking, hosted brainstorming sessions to ideate Bloomberg value 	propositions within Apple Vision Pro space, providing full idea analyses to the client."
          />
          <CVProject
            title="Vanguard Renewables - Website QA"
            description="Authored, verified, and tested newly audited website through DatoCMS, ticketing 150+ design and 	code inconsistencies in Asana, delivering 5 main page staging links to client."
          />
        </CVItem>
        <CVItem
          title="Highland Township Public Library"
          role="Product Designer"
          time="2022 - 2023"
        >
          <CVProject description="Redesigned Highland Library’s early 2000’s site, conducting surveys, performing heuristic & competitive analysis, analyzing user interviews, discovering 5 unique pain points, designing 200+ assets across mobile & desktop, delivering recommendation, gaining board approval." />
        </CVItem>
        <CVItem
          title="Bank of America"
          role="Experience Design Intern"
          time="Summer 2022"
        >
          <CVProject
            title="AI/Erica Team – Design System Management (DSM)"
            description="Created completely new 2.0 design system in Invision, combing, cleaning, and uploading 300+ 	existing design system symbols for use by 100+ AI/Erica team designers & 20M+ users. Owned creation of Erica DSM 2.0 documentation site, reorganizing site-wide information architecture, hierarchically organizing symbol explanations, increasing overall intuitiveness. Consolidated all learned Erica DSM 2.0 experiences to present to
100+ AI/Erica teammates, teaching and aiding in migration to
newest design system."
          />
        </CVItem>
        <CVItem
          title="University of Michigan"
          role="Instructor’s Assistant"
          time="2021 - 2022"
        >
          <CVProject
            title="Intro to HCI"
            description="Aided with teaching HCI concepts weekly, improving course knowledge, teachability, and leadership ability for class of 150+ students, grading 50+ midterm/final assignments."
          />
        </CVItem>
        <CVItem
          title="Bant’ Sports"
          role="UX/UI Design Intern"
          time="Summer 2021"
        >
          <CVProject description="Envisioned, iterated, and implemented ‘Menus’ area of Olympia Design System, providing ease of wireframing and prototyping for 50+ coworkers. Audited & streamlined ‘Pool Creation’ process with user testing conclusions, creating high-fidelity prototypes, resulting in approval from cofounders and IOS implementation." />
        </CVItem>
      </CVSection>
      <CVSection title="LEADERSHIP">
        <CVItem
          title="UMich Asian InterVarsity"
          role="Vision Team Executive Board"
          time="2022 - 2023"
        >
          <CVProject description="Determined and executed chapter-wide vision, meeting with executive board to discuss event logistics, plan year’s content, invest intentionally in 20+ leaders to minimize burnout, and created unique opportunities for AIV during outreach, confirming 500+ new connections" />
        </CVItem>
      </CVSection>
      <CVSection title="SKILLS">
        <CVItem title="UX Design">
          <CVProject description="User Research & Testing, Design Presentation, Prototyping, Wireframing, Mockups, Mobile Design, Design Systems, Information Architecture, Interaction Design,  User Flows, Automotive Interfaces, HCI" />
        </CVItem>
        <CVItem title="Tools & Platforms">
          <CVProject description="Figma, Sketch, Agile Methodology, DatoCMS, Keynote, Asana, Google Suite, Craftmanager, Microsoft Office, Confluence, Jira, Invision" />
        </CVItem>
      </CVSection>
    </div>
  );
};

export default CV;
