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

  const workRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const cvRef = useRef<HTMLDivElement | null>(null);
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
        <div
          className="flex-shrink"
          onClick={() => setPage(Page.WORK)}
          ref={workRef}
        >
          <Logo />
        </div>
      </Link>

      {/* Hamburger menu at < md */}
      <div className="md:hidden cursor-pointer">
        <HamburgerIcon className="fill-almostBlack w-7" />
      </div>

      {/* Exapanded links at > md */}
      <div className="hidden md:grid grid-cols-[auto_auto_auto] grid-rows-2 md:gap-x-16 h-min">
        <Link to="/">
          <SpreadCaps className="text-contrastGray cursor-pointer">
            <div onClick={() => setPage(Page.WORK)} ref={workRef}>
              WORK
            </div>
          </SpreadCaps>
        </Link>
        <Link to="about">
          <SpreadCaps className="text-contrastGray cursor-pointer">
            <div onClick={() => setPage(Page.ABOUT)} ref={aboutRef}>
              ABOUT
            </div>
          </SpreadCaps>
        </Link>
        <Link to="cv">
          <SpreadCaps className="text-contrastGray cursor-pointer">
            <div onClick={() => setPage(Page.CV)} ref={cvRef}>
              CV
            </div>
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
