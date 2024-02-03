import { classNames } from "../utils/helpers";

interface Props {
  children: any;
  className?: string;
}

const Header: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "text-32 lg:text-40 font-medium"
      )}
    >
      {children}
    </div>
  );
};

export default Header;
