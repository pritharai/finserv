
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollOnLink = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollOnLink;
