import React from "react";
import "./index.css";
import "./Styles/Experience.css";
import Header from "./Header";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import FadeInSection from "./FadeInSection";
import Stepper from "./Stepper";

const companies = [
  {
    name: "Ernest",
    location: "New York, United States (Remote)",
    role: "Frontend Developer",
    date: "Feb 2024 - Present",
    workContent: [
      "◦ Design System Development: Contributed to the development and maintenance of a comprehensive design system, ensuring consistent and high-quality user interface design across all products.",
      "◦ Performance Optimization: Implemented React-Query to optimize network calls, significantly enhancing the modularity and performance of applications.",
      "◦ Feature Development: Added features such as a customized accordion and file uploader, enabling foremen to view, add, filter, and search data effectively.",
      "◦ Status Management: Developed a custom status selector for the design system to streamline status updates.",
      "◦ Custom Components: Built a custom, high-performance data grid component to efficiently handle extensive updates.",
      "◦ PDF Generation: Generated PDFs for invoices and summaries, improving document management.",
    ],
  },
  {
    name: "Quicket Solutions",
    location: "Gurugram, Haryana",
    role: "Frontend Developer",
    date: " Jan 2023 - July 2023",
    workContent: [
      "◦ Stickney Platform Development: Led the development of a sticker creation and management application for US counties, focusing on crafting modular and scalable components.",
      "◦ UI/UX Design: Designed the UI/UX of the Stickney Platform to ensure a seamless and engaging user experience.",
      "◦ UI Migration: Migrated the application’s user interface from web2py to React, utilizing Redux Toolkit for efficient state management.",
      "◦ OneApp Product Frontend: Translated PSD designs into responsive and visually appealing components. Developed key features including a search bar, user profile section, events UI, and tag-based filtering.",
    ],
  },
  {
    name: "MITACS Globalink Research Internship",
    location: "Toronto, Canada ",
    role: "University of Windsor ",
    date: "June 2022 - Aug 2022",
    workContent: [
      "◦ Driver Monitoring System Development: Collaborated on the development of a Driver Monitoring System aimed at reducing accidents and enhancing driver safety by monitoring and adapting to various driving conditions, achieving a 15% reduction in reaction time for potential hazards.",
      "◦ Sensor Integration: Utilized multiple physiological sensors, including ECG, EOG, EEG, GSR, and Pulse Oximeter, to accurately assess the psychological and behavioral states of drivers improving detection accuracy by 20%.",
      "◦ Data Analysis: Analyzed sensor data from over 100 hours of driving sessions to determine patterns and correlations between physiological signals and driving behaviors, contributing to the system’s ability to predict and respond to unsafe driving conditions with 85% accuracy.",
      "◦ Collaboration and Guidance: Worked under the guidance of Prof. Balakumar Balasingam, gaining valuable insights and mentorship in the field of driver safety and physiological monitoring.",
    ],
  },
  {
    name: "Microsoft",
    location: "Hyderabad, Telangana (Remote) ",
    role: "Software Engineer Intern ",
    date: " April 2022 - May 2022",
    workContent: [
      "◦ User Interface Development: Crafted user interfaces using React.js, enhancing the codebase through component refactoring and seamless integration of data with cloud APIs.",
      "◦ Architectural Design: Spearheaded the design and implementation of architecture blueprints and flow diagrams for a widely utilized global application, contributing to its streamlined and efficient operation.",
      "◦ Collaboration and Innovation: Worked closely with cross-functional teams to deliver high-quality software solutions, demonstrating strong problem-solving skills and a commitment to continuous improvement.",
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
        <Box className="content">
          <Card className="card-glass">
            <CardContent>
              <Box marginBottom="40px">
                <Grid
                  container
                  justifyContent="space-between"
                  color="rgb(237, 216, 119)"
                >
                  <Typography className="company-name">
                    {name}
                  </Typography>
                  <Typography className="company-location">
                    {location}
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  marginTop="15px"
                  color="rgb(237, 216, 119)"
                >
                  <Typography className="role-date">
                    {role}
                  </Typography>
                  <Typography className="role-date">
                    {date}
                  </Typography>
                </Grid>

                <Grid
                  container
                  direction="column"
                  marginTop="50px"
                  gap="25px"
                  color="rgb(205, 205, 205)"
                >
                  {workContent.map((content, index) => (
                    <FadeInSection key={`step-${activeStep}-content-${index}`}>
                      <Typography className="work-content">{content}</Typography>
                    </FadeInSection>
                  ))}
                </Grid>
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