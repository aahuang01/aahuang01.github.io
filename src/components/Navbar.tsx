import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Page } from "../utils/constants";
import { classNames } from "../utils/helpers";
import { Link } from "react-router-dom";
import HamburgerIcon from "./icons/HamburgerIcon";
import SpreadCaps from "./SpreadCaps";

export interface Props {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<Props> = ({ currentPage, setPage }) => {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const workRef = useRef<HTMLAnchorElement | null>(null);
  const aboutRef = useRef<HTMLAnchorElement | null>(null);
  const cvRef = useRef<HTMLAnchorElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      underlineRef.current &&
      workRef.current &&
      aboutRef.current &&
      cvRef.current
    ) {
      if (currentPage === Page.WORK) {
        setUnderlineWidth(workRef.current.clientWidth - 3);
        setUnderlineOffset(0);
      } else if (currentPage === Page.ABOUT) {
        setUnderlineWidth(aboutRef.current.clientWidth - 3);
        setUnderlineOffset(workRef.current.clientWidth + 64);
      } else if (currentPage === Page.CV) {
        setUnderlineWidth(cvRef.current.clientWidth - 3);
        setUnderlineOffset(
          workRef.current.clientWidth + 64 + aboutRef.current.clientWidth + 64
        );
      }
    }
  }, [currentPage]);

  return (
    <div className="flex w-full justify-between items-center px-[7%] lg:px-[150px] py-10">
      <Link to="/">
        <div className="flex-shrink" onClick={() => setPage(Page.WORK)}>
          <Logo />
        </div>
      </Link>

      {/* Hamburger menu at < md */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <HamburgerIcon
          className="fill-almostBlack w-7 z-20"
          open={hamburgerOpen}
        />
      </div>
      <div
        className={classNames(
          hamburgerOpen
            ? "md:hidden absolute top-0 left-0 h-screen w-screen bg-background z-10 flex flex-col justify-center items-center gap-16"
            : "hidden"
        )}
      >
        <Link
          to="/"
          onClick={() => {
            setHamburgerOpen(false);
          }}
        >
          <SpreadCaps className="text-contrastGray cursor-pointer text-24">
            WORK
            <div
              className={classNames(
                currentPage === Page.WORK ? "opacity-100" : "opacity-0",
                "h-[2px] w-full bg-contrastGray transition-opacity"
              )}
            />
          </SpreadCaps>
        </Link>
        <Link
          to="about"
          onClick={() => {
            setHamburgerOpen(false);
          }}
        >
          <SpreadCaps className="text-contrastGray cursor-pointer text-24">
            ABOUT
            <div
              className={classNames(
                currentPage === Page.ABOUT ? "opacity-100" : "opacity-0",
                "h-[2px] w-full bg-contrastGray transition-opacity"
              )}
            />
          </SpreadCaps>
        </Link>
        <Link
          to="cv"
          onClick={() => {
            setHamburgerOpen(false);
          }}
        >
          <SpreadCaps className="text-contrastGray cursor-pointer text-24">
            CV
            <div
              className={classNames(
                currentPage === Page.CV ? "opacity-100" : "opacity-0",
                "h-[2px] w-full bg-contrastGray transition-opacity"
              )}
            />
          </SpreadCaps>
        </Link>
      </div>

      {/* Exapanded links at > md */}
      <div className="hidden md:grid grid-cols-[auto_auto_auto] grid-rows-2 md:gap-x-16 h-min">
        <Link ref={workRef} to="/">
          <SpreadCaps className="text-contrastGray cursor-pointer">
            WORK
          </SpreadCaps>
        </Link>
        <Link ref={aboutRef} to="about">
          <SpreadCaps className="text-contrastGray cursor-pointer">
            ABOUT
          </SpreadCaps>
        </Link>
        <Link ref={cvRef} to="cv">
          <SpreadCaps className="text-contrastGray cursor-pointer">
            CV
          </SpreadCaps>
        </Link>
        <div
          className={classNames(
            "linkUnderline h-px bg-contrastGray col-span-3 transition-[width,margin-left] "
          )}
          style={{ width: underlineWidth, marginLeft: underlineOffset }}
          ref={underlineRef}
        />
      </div>
    </div>
  );
};

export default Navbar;
