import { classNames } from "../utils/helpers";

interface Props {
  children: any;
  className?: string;
}

const BoldText: React.FC<Props> = ({ children, className }) => {
  return (
    <span className={classNames(className ? className : "", "font-medium")}>
      {children}
    </span>
  );
};

export default BoldText;
