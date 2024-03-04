export enum Page {
  WORK,
  ABOUT,
  CV,
  UNKNOWN,
}

export enum Alignment {
  LEFT,
  RIGHT,
  CENTER,
}

export enum ImageSize {
  SMALL,
  REGULAR,
  WIDE,
}

export enum SectionColor {
  NONE,
  GRAY,
  BLACK,
}

export class SectionContentTitle {
  text: string;
  alignment: Alignment;

  public constructor({
    text,
    alignment,
  }: {
    text: string;
    alignment?: Alignment;
  }) {
    this.text = text;
    this.alignment = alignment !== undefined ? alignment : Alignment.LEFT;
  }
}

export class SectionContentParagraph {
  text: any;

  public constructor({ text }: { text: any }) {
    this.text = text;
  }
}

export class SectionContentImage {
  image: any;
  size: ImageSize;
  alignment: Alignment;

  public constructor({
    image,
    size,
    alignment,
  }: {
    image: any;
    size?: ImageSize;
    alignment?: Alignment;
  }) {
    this.image = image;
    this.size = size !== undefined ? size : ImageSize.REGULAR;
    this.alignment = alignment !== undefined ? alignment : Alignment.LEFT;
  }
}

export class SectionContentListItem {
  number: number;
  title: string;
  text: string;

  public constructor({
    number,
    title,
    text,
  }: {
    number: number;
    title: string;
    text: string;
  }) {
    this.text = text;
    this.title = title;
    this.number = number;
  }
}

export class SectionContentSpacing {}

export enum ContentType {
  TITLE,
  TEXT,
  IMAGE,
}

export const DEFAULT_ICON_CLASSNAME = "fill-almostBlack h-4 w-4";
