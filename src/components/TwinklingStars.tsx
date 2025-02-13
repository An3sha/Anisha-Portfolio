// TwinklingStars.tsx
import  { useEffect } from "react";
import "./Styles/TwinklingStars.css";

const TwinklingStars = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      star.setAttribute("class", "template twinkle");
      star.setAttribute("r", (Math.random() * 0.8 + 0.2).toString());
      star.setAttribute("cx", (Math.random() * 100).toString() + "%");
      star.setAttribute("cy", (Math.random() * 100).toString() + "%");
      return star;
    };

    const galaxy = document.getElementById("galaxy");
    if (galaxy) {
      for (let i = 0; i < 150; i++) {
        galaxy.appendChild(createStar());
      }

      return () => {
        galaxy.innerHTML = '';
      };
    }
  }, []);

  return (
    <svg id="galaxy" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1"/>
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default TwinklingStars;
