import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import "./index.css"; // Ensure this CSS file is imported

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

      setTimeout(() => {
        twinkleStar.remove();
      }, 1500);
    };

    const interval = setInterval(generateTwinkleStar, 750);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div id="root">
      <Header />
      <Box className="content">{children}</Box>
      <div id="galaxy"></div>
    </div>
  );
};

export default Layout;
