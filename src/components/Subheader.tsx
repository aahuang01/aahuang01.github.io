import { classNames } from "../utils/helpers";

interface Props {
  children: any;
  className?: string;
}

const Subheader: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(className ? className : "", "text-24 lg:text-32")}
    >
      {children}
    </div>
  );
};

export default Subheader;
