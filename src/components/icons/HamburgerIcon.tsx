import { classNames } from "../../utils/helpers";

interface Props {
  open: boolean;
  className?: string;
}

const HamburgerIcon: React.FC<Props> = ({ open, className }) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        "flex flex-col gap-[5.5px]"
      )}
    >
      <div className={classNames("line1", open ? "open" : "")}>
        <div className="inner w-[25px] h-[2.9px] bg-almostBlack rounded-full" />
      </div>
      <div className={classNames("line2", open ? "open" : "")}>
        <div className="inner w-[25px] h-[2.9px] bg-almostBlack rounded-full" />
      </div>
      <div className={classNames("line3", open ? "open" : "")}>
        <div className="inner w-[25px] h-[2.9px] bg-almostBlack rounded-full" />
      </div>
    </div>
  );
};

export default HamburgerIcon;
