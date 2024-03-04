import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../pages/Layout";

export interface Props {}

const AnimationLayout: React.FC<Props> = () => {
  const { pathname } = useLocation();

  const pageVariants = {
    exit: {
      opacity: 0,
    },
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.3,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </Layout>
  );
};

export default AnimationLayout;
