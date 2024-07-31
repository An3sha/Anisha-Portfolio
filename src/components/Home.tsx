import "./index.css";
import Header from "./Header";
import { Box, Typography } from "@mui/material";
import FractalTree from "./FractalTree";
import FadeInSection from "./FadeInSection";
// import TwinklingStars from "./TwinklingStars";

export default function Home() {
  return (
    <div id="root">
      <div className="root">
        <Header />
        <Box className="content">
          {/* <TwinklingStars /> */}
          <FractalTree />
          <Box className="aboutBox">
            <Box
              display="flex"
              flexDirection="column"
              gap="40px"
              alignItems="center"
              marginTop="10px"
            >
              <Typography color="bisque" fontSize="30px">
                hi, i am anisha{" "}
                <img
                  src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  width="30px"
                />
                
              </Typography>
              <FadeInSection>
                <Typography color="darkgrey" textAlign="center">
                  Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi
                  Français ქართული Deutsch Ελληνικά ‫עברית हिन्दी Magyar
                  Indonesia Italiano Latviski Lietuviškai македонски Melayu
                  Norsk Polski Português Româna Pyccкий Српски Slovenčina
                  Slovenščina Español Svenska ไทย Türkçe Українська Tiếng Việt
                  Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit..." "There is no
                  one who loves pain itself, who seeks after it and wants to
                  have it, simply because it is pain..." What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </FadeInSection>
              {/* <Typography fontSize="40px">🐝 🍄 🐙 🪼</Typography> */}
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
