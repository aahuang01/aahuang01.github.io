import { classNames } from "../utils/helpers";
import Paragraph from "./Paragraph";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  time: string;
  className?: string;
}

const CVEducationItem: React.FC<Props> = ({
  title,
  subtitle,
  description,
  time,
  className,
}) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "flex justify-between gap-10"
      )}
    >
      <div className="grow min-w-3/4">
        <div className="text-16 md:text-24 text-almostBlack font-medium md:mb-0.5 tracking-tighter">
          {title}
        </div>
        <div className="text-16 md:text-24 text-appleGray font-medium mb-2 md:mb-2.5 tracking-tighter">
          {subtitle}
        </div>
        <Paragraph>{description}</Paragraph>
      </div>
      <Paragraph className="!text-appleGray text-right shrink-0">
        {time}
      </Paragraph>
    </div>
  );
};

export default CVEducationItem;
