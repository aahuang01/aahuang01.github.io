import { classNames } from "../utils/helpers";
import SpreadCaps from "./SpreadCaps";
import {
  Alignment,
  ImageSize,
  SectionColor,
  SectionContentImage,
  SectionContentParagraph,
  SectionContentTitle,
  SectionContentListItem,
  SectionContentSpacing,
} from "../utils/constants";

interface Props {
  label?: string;
  content: (
    | SectionContentTitle
    | SectionContentParagraph
    | SectionContentImage
    | SectionContentListItem
    | SectionContentSpacing
  )[];
  bgColor?: SectionColor;
  accentColor: string;
  className?: string;
}

const ProjectItem: React.FC<Props> = ({
  label,
  content,
  bgColor = SectionColor.NONE,
  accentColor,
  className,
}) => {
  const bgColorEnumToTailwind = (color: SectionColor) => {
    switch (color) {
      case SectionColor.NONE:
      default:
        return "";
      case SectionColor.GRAY:
        return "bg-sectionBGGray";
      case SectionColor.BLACK:
        return "bg-sectionBGBlack";
    }
  };

  const imgSizeEnumToTailwind = (size: ImageSize) => {
    switch (size) {
      case ImageSize.REGULAR:
      default:
        return "px-[7%] lg:px-[150px] *:w-full";
      case ImageSize.SMALL:
        return "px-[7%] lg:px-[250px] md:*:w-[70%]";
      case ImageSize.WIDE:
        return "px-0 *:w-full";
    }
  };

  const alignmentEnumToTailwind = (alignment: Alignment) => {
    switch (alignment) {
      case Alignment.LEFT:
      default:
        return "text-left";
      case Alignment.CENTER:
        return "text-center flex flex-row justify-center";
      case Alignment.RIGHT:
        return "text-right flex flex-row justify-end";
    }
  };

  return (
    <div
      className={classNames(
        "ProjectItem py-20",
        bgColorEnumToTailwind(bgColor),
        className ? className : ""
      )}
    >
      <div>
        {label && (
          <SpreadCaps
            className={classNames(
              "!font-bold !text-16 !md:text-20 mb-4 px-[7%] lg:px-[250px]",
              accentColor
            )}
          >
            {label}
          </SpreadCaps>
        )}
        {content.map((item, key) => {
          if (item instanceof SectionContentTitle) {
            return (
              <div
                className={classNames(
                  "text-24 lg:text-40 font-semibold mb-4 px-[7%] lg:px-[250px]",
                  alignmentEnumToTailwind(item.alignment),
                  bgColor === SectionColor.BLACK
                    ? "text-background"
                    : "text-almostBlack"
                )}
                key={key}
              >
                {item.text}
              </div>
            );
          } else if (item instanceof SectionContentParagraph) {
            return (
              <div
                className={classNames(
                  "mb-8 px-[7%] lg:px-[250px] text-16 md:text-20",
                  bgColor === SectionColor.BLACK
                    ? "text-background"
                    : "text-almostBlack"
                )}
                key={key}
              >
                {item.text}
              </div>
            );
          } else if (item instanceof SectionContentImage) {
            return (
              <div
                className={classNames(
                  imgSizeEnumToTailwind(item.size),
                  alignmentEnumToTailwind(item.alignment),
                  "mb-10 mt-5"
                )}
                key={key}
              >
                {item.image}
              </div>
            );
          } else if (item instanceof SectionContentListItem) {
            return (
              <div className="my-6 px-[7%] lg:px-[250px] flex gap-6" key={key}>
                <div
                  className={classNames(
                    "font-semibold text-16 md:text-20 w-5 lg:w-20 shrink-0",
                    bgColor === SectionColor.BLACK
                      ? "text-[#D9D9D9]"
                      : "text-appleGray"
                  )}
                >
                  {String(item.number).padStart(2, "0")}
                </div>
                <div
                  className={classNames(
                    "text-16 md:text-20",
                    bgColor === SectionColor.BLACK
                      ? "text-background"
                      : "text-almostBlack"
                  )}
                >
                  <b>{item.title}</b> {item.text}
                </div>
              </div>
            );
          } else if (item instanceof SectionContentSpacing) {
            return <div className="h-5" key={key} />;
          } else {
            return <></>;
          }
        })}
      </div>
      <div
        className={classNames(
          "FooterFiller hidden absolute top-[100%] h-[105px] w-full z-0",
          bgColorEnumToTailwind(bgColor)
        )}
      />
    </div>
  );
};

export default ProjectItem;
