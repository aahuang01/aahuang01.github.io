import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { classNames, urlToPage } from "../utils/helpers";
import Footer from "../components/Footer";
import { BackgroundColorContext } from "../App";

export interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(urlToPage(location.pathname));
  const { bgColor } = useContext(BackgroundColorContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentPage(urlToPage(location.pathname));
  });

  return (
    <div
      className={classNames(
        "min-h-screen flex flex-col transition-colors duration-100",
        bgColor
      )}
    >
      <header>
        <Navbar
          setPage={(page) => setCurrentPage(page)}
          currentPage={currentPage}
        />
      </header>
      <div className="flex-grow">{children}</div>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
