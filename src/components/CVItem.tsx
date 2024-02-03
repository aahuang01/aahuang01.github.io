import { classNames } from "../utils/helpers";
import Paragraph from "./Paragraph";

interface Props {
  title: string;
  role?: string;
  time?: string;
  children: any;
  className?: string;
}

const CVItem: React.FC<Props> = ({
  title,
  role,
  time,
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "flex justify-between gap-10"
      )}
    >
      <div className="w-3/4">
        <div className="flex gap-1.5">
          <div className="text-24 text-almostBlack font-medium">{title}</div>
          <div className="text-24 text-appleGray font-medium">{role}</div>
        </div>
        {children}
      </div>
      <Paragraph className="!text-appleGray text-right shrink-0">
        {time ? time : " "}
      </Paragraph>
    </div>
  );
};

export default CVItem;
