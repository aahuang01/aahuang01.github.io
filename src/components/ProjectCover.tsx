import { Link } from "react-router-dom";
import { classNames } from "../utils/helpers";
import Header from "./Header";
import Secondary from "./Secondary";
import SpreadCaps from "./SpreadCaps";

interface Props {
  image: any;
  label: string;
  title: string;
  subtitle: string;
  link: string;
  className?: string;
}

const ProjectCover: React.FC<Props> = ({
  image,
  label,
  title,
  subtitle,
  link,
  className,
}) => {
  return (
    <Link to={link}>
      <div
        className={classNames(
          className ? className : "",
          "flex w-full gap-5 flex-col md:flex-row"
        )}
      >
        <div className="shadow-projectCover hover:shadow-projectCoverHover transition-shadow rounded-[3px]">
          <img src={image} alt={`${title}`} />
        </div>
        <div className="md:min-w-[250px] lg:min-w-[315px] flex flex-col">
          <SpreadCaps className="mb-1.5 text-appleGray">{label}</SpreadCaps>
          <Header className="mb-1">{title}</Header>
          <Secondary>{subtitle}</Secondary>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCover;
