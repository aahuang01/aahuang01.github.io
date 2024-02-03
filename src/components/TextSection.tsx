import { classNames } from "../utils/helpers";
import Paragraph from "./Paragraph";
import SectionSeparator from "./SectionSeparator";

interface Props {
  header: string;
  text: string;
  className?: string;
}

const TextSection: React.FC<Props> = ({ header, text, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "flex flex-col gap-3.5 mb-7"
      )}
    >
      <SectionSeparator text={header} />
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export default TextSection;
