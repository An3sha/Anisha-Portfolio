// TwinklingStars.tsx
import React, { useEffect } from "react";
import "./Styles/TwinklingStars.css";

const TwinklingStars: React.FC = () => {
  useEffect(() => {
    const generateTwinkleStar = () => {
      const twinkleStarTemplate = document.getElementById("twinkle-star");
      if (!twinkleStarTemplate) return;

      const twinkleStar = twinkleStarTemplate.cloneNode(true) as HTMLElement;
      twinkleStar.style.position = "absolute";
      twinkleStar.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      twinkleStar.style.top = Math.floor(Math.random() * (window.innerHeight / 3)) + "px";
      twinkleStar.style.width = window.innerWidth < 768 ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) + "px" : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";
      twinkleStar.style.height = twinkleStar.style.width;
      twinkleStar.classList.add("twinkle");
      const galaxy = document.getElementById("galaxy");
      if (galaxy) {
        galaxy.appendChild(twinkleStar);
      }

      console.log("Twinkle star added at:", twinkleStar.style.left, twinkleStar.style.top); // Debug line

      setTimeout(() => {
        twinkleStar.remove();
      }, 1500);
    };

    const interval = setInterval(generateTwinkleStar, 750);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <div id="galaxy"></div>
      <svg 
        id="twinkle-star" 
        className="template" 
        width="10" 
        height="10" 
        viewBox="0 0 10 10" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'none' }} // Hide the template SVG
      >
        <circle cx="5" cy="5" r="2" fill="white"/>
      </svg>
    </div>
  );
};

export default TwinklingStars;
