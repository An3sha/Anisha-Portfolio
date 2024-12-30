import "./index.css";
import Header from "./Header";
import { Box, Grid, Typography } from "@mui/material";
import Anisha from "../assests/Anisha.jpeg";
import { useEffect, useRef } from "react";
import FadeInSection from "./FadeInSection";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import FractalTree from "./FractalTree";

export default function About() {
  const emojiRef = useRef<HTMLSpanElement | null>(null);

  //   const SpotifyIcon = (props) => (
  //   <SvgIcon {...props} viewBox="0 0 496 512">
  //     <path fill="#21750a" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
  //   </SvgIcon>
  // );

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
            <Box
              display="flex"
              flexDirection="column"
              gap="40px"
              alignItems="left"
            >
              {/* <Typography fontSize="40px">🐝 🍄 🐙 🪼 🌱</Typography> */}

              <Typography color="darkgrey">
                Hey there! I’m a passionate Software Engineer,
                who’s all about turning ideas into sleek, interactive web
                experiences. While I’m currently leveling up my
                backend game with GO (because who doesn’t love a good
                challenge?), my heart belongs to frontend technologies like
                React.js, TypeScript, and Material-UI, where I get to play with
                code and bring digital magic to life. When I’m not immersed in
                code, you’ll find me binge-watching anime or sketching out new
                design ideas. 
                Let’s create something epic together! 🎨 💻 🚀
              </Typography>
              <Typography color="darkgrey">
                Here are some technologies I have been working with:{" "}
                <img
                  src="https://cultofthepartyparrot.com/parrots/hd/laptop_parrot.gif"
                  width="30"
                  height="30"
                />
              </Typography>
              <FadeInSection>
                <Grid
                  container
                  justifyContent="center"
                  spacing={4}
                  className="tech-grid"
                >
                  <Grid item>
                    <Box className="tech-column">
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          React.js
                        </Box>
                      </Typography>
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          Typescript
                        </Box>
                      </Typography>
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          Javascript
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item>
                    <Box className="tech-column">
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          RESTful APIs
                        </Box>
                      </Typography>
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          Redux
                        </Box>
                      </Typography>
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          Next.js
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box className="tech-column">
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          C/C++
                        </Box>
                      </Typography>
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          Python
                        </Box>
                      </Typography>
                      <Typography color="darkgrey" className="tech-item">
                        <Box display="flex" alignItems="center">
                          <ArrowRightIcon />
                          SQL
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </FadeInSection>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
