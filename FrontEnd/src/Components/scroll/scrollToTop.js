import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { classNames } from "../../utils/classNames";
import topo from "../../Assets/icones/topo-pag.svg";
import { IconImage } from "./styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <IconImage
        src={topo}
        alt="topo"
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
        )}
        onClick={scrollToTop}
      />
    </div>
  );
};
export default ScrollToTop;
