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
      <div className="md:w-3/4">
        <div className="xl:flex gap-1.5">
          <div className="text-16 md:text-24 text-almostBlack font-medium flex w-full md:w-auto justify-between items-center md:block tracking-tighter">
            {title}
            <Paragraph className="!text-appleGray text-right shrink-0 md:hidden">
              {time ? time : " "}
            </Paragraph>
          </div>
          <div className="text-16 md:text-24 text-appleGray font-medium ml-5 md:ml-0 tracking-tighter">
            {role}
          </div>
        </div>
        {children}
      </div>
      <Paragraph className="!text-appleGray text-right shrink-0 hidden md:block">
        {time ? time : " "}
      </Paragraph>
    </div>
  );
};

export default CVItem;
