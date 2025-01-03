import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.substring(1); // Remueve el '#' del hash
      scroller.scrollTo(target, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
