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
    <div
      className={classNames(
        className ? className : "",
        "mb-12 md:mb-16 w-full"
      )}
    >
      <div className="w-full flex md:block items-center mb-6 md:mb-0">
        <SpreadCaps className="md:hidden text-appleGray shrink-0 mr-6">
          {title}
        </SpreadCaps>
        <HorizontalLine className="md:mb-5" />
      </div>
      <div className="flex w-full">
        <SpreadCaps className="hidden md:block text-appleGray shrink-0 w-1/4">
          {title}
        </SpreadCaps>
        <div className="flex flex-col gap-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default CVSection;
