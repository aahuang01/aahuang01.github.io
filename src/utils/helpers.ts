import { Page } from "./constants";

export function classNames(...args: string[]) {
  return args.filter(Boolean).join(" ");
}

export function urlToPage(url: string) {
  switch (url) {
    case "/":
    case "/edenspiekermann":
    case "/bofa":
    case "/highland":
    case "/bant":
      return Page.WORK;
    case "/about":
      return Page.ABOUT;
    case "/cv":
      return Page.CV;
    default:
      return Page.UNKNOWN;
  }
}
