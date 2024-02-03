import { classNames } from "../utils/helpers";
import HorizontalLine from "./HorizontalLine";
import SpreadCaps from "./SpreadCaps";

interface Props {
  title: string;
  children: any;
  className?: string;
}

const CVSection: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div className={classNames(className ? className : "", "mb-16 w-full")}>
      <HorizontalLine className="mb-5" />
      <div className="flex w-full">
        <SpreadCaps className="text-appleGray shrink-0 w-1/4">
          {title}
        </SpreadCaps>
        <div className="flex flex-col gap-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default CVSection;
