import { classNames } from "../utils/helpers";
import HorizontalLine from "./HorizontalLine";
import SpreadCaps from "./SpreadCaps";

interface Props {
  text: string;
  className?: string;
}

const SectionSeparator: React.FC<Props> = ({ text, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "flex w-full gap-6 items-center"
      )}
    >
      <SpreadCaps className="text-appleGray shrink-0">{text}</SpreadCaps>
      <HorizontalLine />
    </div>
  );
};

export default SectionSeparator;
