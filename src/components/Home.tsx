import "./index.css";
import Header from "./Header";
import { Box, Typography } from "@mui/material";
import Anisha from "../assests/Anisha.jpg";
import { useEffect, useRef } from "react";

export default function Home() {
  const emojiRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (emojiRef.current) {
        emojiRef.current.classList.add("shake-stop");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="root">
      <div className="root">
        <Header />
        <Box className="content">
          <Box className="aboutBox">
            <img src={Anisha} alt="Anisha" className="profilePic" />
            <Box display="flex" flexDirection="column" gap="40px" alignItems="center">
              <Typography color="white" fontSize="30px">
                hi! i am anisha{" "}
                <span ref={emojiRef} className="shake">
                  👋
                </span>
              </Typography>
              <Typography color='darkgrey'>
                
Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi Français ქართული Deutsch Ελληνικά ‫עברית हिन्दी Magyar Indonesia Italiano Latviski Lietuviškai македонски Melayu Norsk Polski Português Româna Pyccкий Српски Slovenčina Slovenščina Español Svenska ไทย Türkçe Українська Tiếng Việt
Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
