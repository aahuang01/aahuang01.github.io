import { classNames } from "../utils/helpers";

interface Props {
  children: any;
  className?: string;
}

const SpreadCaps: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "text-14 lg:text-16 tracking-[0.15em] font-medium"
      )}
    >
      {children}
    </div>
  );
};

export default SpreadCaps;
