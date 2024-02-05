import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { urlToPage } from "../utils/helpers";
import Footer from "../components/Footer";

export interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(urlToPage(location.pathname));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentPage(urlToPage(location.pathname));
  });

  return (
    <div className="min-h-screen flex flex-col">
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
