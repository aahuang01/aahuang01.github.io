import { classNames } from "../utils/helpers";

interface Props {
  children: any;
  className?: string;
}

const Paragraph: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "text-16 lg:text-16 font-medium text-almostBlack" // todo adjust text size at breakpoints when confirmed
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
