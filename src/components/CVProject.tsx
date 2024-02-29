import { classNames } from "../utils/helpers";
import Paragraph from "./Paragraph";

interface Props {
  title?: string;
  description: string;
  className?: string;
}

const CVProject: React.FC<Props> = ({ title, description, className }) => {
  return (
    <div className={classNames(className ? className : "")}>
      {title && (
        <div className="text-14 md:text-16 font-medium text-appleGray">
          {title}
        </div>
      )}

      <Paragraph className="my-4">{description}</Paragraph>
    </div>
  );
};

export default CVProject;
