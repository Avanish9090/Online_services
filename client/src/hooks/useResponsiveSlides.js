// hooks/useResponsiveSlides.js
import { useEffect, useState } from "react";

export default function useResponsiveSlides() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    function updateSlides() {
      const width = window.innerWidth;

      if (width <= 480) {
        setSlidesToShow(1);
      } else if (width <= 600) {
        setSlidesToShow(2);
      } else if (width <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    }

    updateSlides(); 

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return slidesToShow;
}


