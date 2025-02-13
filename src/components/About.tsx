import "./index.css";
import Header from "./Header";
import { Box, Grid, Typography } from "@mui/material";
import Anisha from "../assests/Anisha.jpeg";
import { useEffect, useRef } from "react";
import FadeInSection from "./FadeInSection";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TwinklingStars from "./TwinklingStars";

const techColumns = [
  ['React.js', 'TypeScript', 'JavaScript'],
  ['RESTful APIs', 'Redux', 'Next.js'],
  ['C/C++', 'Python', 'SQL']
];

export default function About() {
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
        <TwinklingStars />
        <Box className="content">
          <Box 
            className="aboutBox"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: '32px', md: '60px' },
              alignItems: { xs: 'center', md: 'flex-start' },
              width: '100%',
              maxWidth: '1200px',
              padding: { xs: '20px 16px', md: '40px 24px' }
            }}
          >
            <Box 
              className="profile-container"
              sx={{
                position: 'relative',
                width: { xs: '280px', sm: '320px', md: '350px' },
 
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img 
                src={Anisha} 
                alt="Anisha" 
                className="profilePic"
              />
              {/* <Box 
                sx={{ 
                  width: '100%',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                
              </Box> */}
            </Box>
            
            <Box 
              className="about-content"
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: { xs: '100%', md: 'calc(100% - 410px)' }
              }}
            >
              <Typography 
                variant="body1" 
                className="about-text"
                color="darkgrey"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  lineHeight: '1.6',
                  marginBottom: { xs: '20px', md: '24px' }
                }}
              >
                Hey there! I'm a Software Engineer with a strong passion for
                building intuitive and high-performance web applications. My
                expertise lies in frontend technologies like React.js,
                TypeScript, and Material-UI, where I focus on crafting seamless
                user experiences. Lately, I've been expanding my skill set into
                backend development with Go. Beyond coding,
                you'll find me binge-watching anime or sketching out new design
                ideas. Always eager to learn and collaborate! 🎨 💻 🚀
              </Typography>

              <Box 
                className="technologies-section"
                sx={{
                  marginTop: { xs: '24px', md: '32px' }
                }}
              >
                <Typography 
                  variant="h6" 
                  color="darkgrey"
                  className="tech-header"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Here are some technologies I have been working with
                  <img
                    src="https://cultofthepartyparrot.com/parrots/hd/laptop_parrot.gif"
                    width="30"
                    height="30"
                    alt="laptop parrot"
                  />
                </Typography>

                <FadeInSection>
                  <Grid 
                    container 
                    className="tech-grid"
                  >
                    {techColumns.map((column, columnIndex) => (
                      <Grid item key={columnIndex} className="tech-column">
                        {column.map(tech => (
                          <Typography 
                            key={tech} 
                            className="tech-item"
                          >
                            <ArrowRightIcon className="tech-arrow" />
                            {tech}
                          </Typography>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </FadeInSection>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
