"use client"

import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className="ml-5 mb-5 fixed bottom-10  px-3 z-30 rounded-full bg-blue-500 h-12 w-12 text-white"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;