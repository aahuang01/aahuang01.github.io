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
        "text-14 lg:text-16 text-almostBlack"
      )}
    >
      {children}
    </div>
  );
};

export default Paragraph;
