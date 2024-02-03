import { classNames } from "../utils/helpers";

interface Props {
  children: any;
  className?: string;
}

const Secondary: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "text-32 lg:text-36 font-medium text-appleGray"
      )}
    >
      {children}
    </div>
  );
};

export default Secondary;
