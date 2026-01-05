import React from "react";
import "./index.css";
import "./Styles/Experience.css";
import Header from "./Header";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import FadeInSection from "./FadeInSection";
import Stepper from "./Stepper";
import TwinklingStars from "./TwinklingStars";

const companies = [
  {
    name: "Cleandirty.ai",
    location: "Bangalore, Karnataka",
    role: "Software Developer",
    date: "January 2025 - Present",
    workContent: [
      "◦ Frontend Architecture: Designed and developed the entire frontend from scratch using ReactJS, Next.js, and TypeScript. Delivered responsive, accessible UIs for a seamless story writing, reading, and multimedia experience.",
      "◦ AI & Core Feature Development:  Integrated DALL·E for image generation and Text-to-Speech APIs for audio narration. Engineered core features such as a custom story editor, sticky notes, embedded media, and smooth UI animations with Framer Motion.", 
      "◦ Backend Engineering & Refactoring: Contributed to backend services built with Next.js (API routes). Rewrote the legacy story-reading platform (originally implemented by interns) into clean, modular, and maintainable code, reducing bugs and improving scalability.",
      "◦ Performance, Authentication & Payments: Optimized rendering and media load times by 20%, leading to a 30% increase in user engagement. Implemented secure authentication with Supertokens and integrated Cashfree SDK for in-app payments.", 
    ],
  },
  {
    name: "Ernest",
    location: "New York, United States (Remote)",
    role: "Software Developer",
    date: "June 2023 - January 2025",
    workContent: [
      "◦ Design System Development: Built a scalable design system to standardize UI components, ensuring consistency across applications.",
      "◦ Performance Optimization: Integrated React Query (state management), reducing API call times by 40%, enhancing performance and responsiveness.",
      "◦ Feature Development: Implemented key features like a customized accordion and file uploader, streamlining user workflows.",
      "◦ RESTful API Design: Designed RESTful APIs with Go, improving backend reliability by 25%.",
      "◦ PDF Generation: Generated custom PDFs for invoices and summaries, improving document management.",
      "◦ Custom Components: Engineered a high-performance data grid component, efficiently managing extensive updates. ",
    ],
  },
  {
    name: "Quicket Solutions",
    location: "Gurugram, Haryana",
    role: "Software Developer Intern",
    date: " Jan 2023 - June 2023",
    workContent: [
     "◦ Stickney Platform Development: Led development of a sticker creation platform, improving task completion by 15%.",
     "◦ UI/UX Design: Delivered UI/UX redesigns, increasing user satisfaction by 20%.",
     "◦ UI Migration: Migrated UI from web2py to React, leveraging Redux Toolkit for 40% better state management.",
     "◦ OneApp Product Frontend: Designed and implemented a responsive OneApp dashboard, integrating key features like search and tag-based filtering.",
    ],
  },
  {
    name: "MITACS Globalink Research Internship",
    location: "Toronto, Canada ",
    role: "University of Windsor ",
    date: "June 2022 - Aug 2022",
    workContent: [
      "◦ Driver Monitoring System Development: Collaborated on the development of a Driver Monitoring System that aimed reducing accident risks by 15% with sensor integration.",
      "◦ Sensor Integration: Utilized multiple physiological sensors, including ECG, EOG, EEG, GSR, and Pulse Oximeter, to accurately assess the psychological and behavioral states of drivers improving detection accuracy by 20%.",
      "◦ Data Analysis: Analyzed sensor data from 100+ driving hours, improving hazard detection accuracy to 85%.",     
      "◦ Collaboration and Guidance: Worked under the guidance of Prof. Balakumar Balasingam, gaining expertise in autonomous systems and behavioral analysis."
    ],
  },
  {
    name: "Microsoft",
    location: "Hyderabad, Telangana (Remote) ",
    role: "Software Engineer Intern ",
    date: " April 2022 - May 2022",
    workContent: [
     "◦ User Interface Development: Built dynamic React.js interfaces, improving usability and scalability for a global application.",
     "◦ Architectural Design: Created architecture blueprints, enhancing operational efficiency across teams.",
     "◦ Collaboration and Innovation: Collaborated with cross-functional teams to deliver high-quality software solutions."
    ],
  },
];

const Experience: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
     prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>  prevActiveStep - 1);
  };

  const { name, location, role, date, workContent } = companies[activeStep];

  return (
    <div id="root">
      <div className="root">
        <Header />  
        <TwinklingStars />
        <Box className="content" sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Card className="card-glass">
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box className="content-wrapper">
                <Box className="company-info">
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="flex-start"
                    className="company-info-grid"
                    color="rgb(237, 216, 119)"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography className="company-name">
                        {name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className="company-location">
                        {location}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="flex-start"
                    className="company-info-grid"
                    marginTop={1}
                    color="rgb(237, 216, 119)"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography className="role-date">
                        {role}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className="role-date">
                        {date}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box className="work-content-container">
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    color="rgb(205, 205, 205)"
                  >
                    {workContent.map((content, index) => (
                      <Grid item key={`step-${activeStep}-content-${index}`}>
                        <FadeInSection>
                          <Typography className="work-content">{content}</Typography>
                        </FadeInSection>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <Stepper
                activeStep={activeStep}
                handleNext={handleNext}
                handleBack={handleBack}
                companies={companies}
              />
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default Experience;
