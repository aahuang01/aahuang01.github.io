import { classNames } from "../utils/helpers";

interface Props {
  className?: string;
}

const HorizontalLine: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "w-full h-px bg-appleGray"
      )}
    />
  );
};

export default HorizontalLine;
