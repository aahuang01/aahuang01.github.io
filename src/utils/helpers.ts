import { Page } from "./constants";

export function classNames(...args: string[]) {
  return args.filter(Boolean).join(" ");
}

export function urlToPage(url: string) {
  switch (url) {
    case "/":
      return Page.WORK;
    case "/about":
      return Page.ABOUT;
    case "/cv":
      return Page.CV;
    default:
      return Page.UNKNOWN;
  }
}
