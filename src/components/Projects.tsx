import { Box } from "@mui/material";
import Header from "./Header";
import FadeInSection from "./FadeInSection";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SkillMatch AI",
    description:
      "An AI-powered candidate search platform with multi-filter support, featuring a RAG-based chatbot for intelligent candidate Q&A and Anthropic-powered profile summarization and ranking.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "Langbase", "Anthropic"],
    githubUrl: "https://github.com/An3sha/SkillMatch-AI", // add your link
    liveUrl: "",   // add your link
  },
  {
    title: "AI Support Chat Widget",
    description:
      "An embeddable AI-powered chat widget deployable via a single script tag, featuring a flexible config system for custom themes and branding, plus voice capabilities including microphone input and text-to-speech.",
    technologies: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/An3sha/sarvamai", // add your link
    liveUrl: "https://sarvamai.vercel.app/",   // add your link
  },
   {
    title: "Function Chain Calculator App",
    description:
     "A React-based web application that allows users to create and visualize a chain of mathematical functions, where the output of one function serves as the input for the next.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/An3sha/Function-chain-calculator-app",
    liveUrl: "https://function-chain-calculator-app.vercel.app/",
  },
  {
    title: "EduFun Arcade",
    description:
      "A React-based web application featuring a collection of interactive educational games designed to make learning fun for children.",
    technologies: ["React", "TypeScript", "Framer Motion", "Lucide Icons","TailwindCSS", "Vite"],
    githubUrl: "https://github.com/An3sha/EduFun-Arcade",
    liveUrl: "https://edu-fun-arcade.vercel.app/",
  },
  {
    title: "GitHub Resume Builder",
    description:
     "A modern, interactive web application that generates beautiful resumes from GitHub profiles. Built with React, TypeScript, and Chart.js.",
    technologies: ["React", "TypeScript", "Chart.js","Axios", "date-fns", "Framer Motion", "Lucide Icons", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/An3sha/Modern-Github-Resume",
    liveUrl: "https://modern-github-resume.vercel.app/"

  },
  {
    title: "ChronoBloom",
    description:
      "A web app that helps users manage time using the Pomodoro Technique, which alternates focused work sessions with short breaks. It aims to boost productivity and maintain focus by structuring tasks effectively. ",
       technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/An3sha/ChronoBloom",
    liveUrl: "https://chrono-bloom.vercel.app/",
  },
  {
    title: "CMS Story",
    description:
      "A modern, responsive Content Management System for managing stories and episodes with a review workflow.",
       technologies: ["Next.js", "TypeScript", "TailwindCSS", "React Context API", "shadcn/ui", "Lucide Icons"],
    githubUrl: "https://github.com/An3sha/cms-story",
    // liveUrl: "chrono-bloom.vercel.app",
  },
  {
    title: "Metrix Tiles",
    description:
      "This project involves creating a grid component for KPI cards with toggleable view and edit modes. Users can add new cards via "+" icons, which start in edit mode. The layout adapts to screen width, ensuring a maximum of three cards per row and a centered container.",
       technologies: ["React", "TypeScript", "CSS", "Highcharts"],
    githubUrl: "https://github.com/An3sha/Metrix-Tiles",
    liveUrl: "https://metrictile.netlify.app/",
  },
   {
    title: "Lyrical",
    description:
      "This app allows users to explore trending songs, view album covers, and read lyrics. It fetches song data from popular APIs like iTunes and Spotify and displays it in a responsive card layout with smooth animations.",
       technologies: ["React", "TypeScript", "Material-UI", "iTunes API", " Spotify API"],
    githubUrl: "https://github.com/An3sha/lyrical",
    // liveUrl: "chrono-bloom.vercel.app",
  },
    {
    title: "Cab ride price prediction",
    description:
      "Analysed the price and surge multiplier for the rides. Achieved an accuracy of 97 percent using Random Forests with AdaBoost.",
       technologies: ["Random forests", "Linear Regression", "Support Vector Machines", "Python"],
    githubUrl: "https://github.com/An3sha/Cab-Ride-Price-Prediction",
    // liveUrl: "metrictile.netlify.app/",
  },
     {
    title: "My Anime List (not updated)",
    description:
      "Hey! I'm making this for all the anime lovers. It includes anime series and movies of all genres that I have watched till now",
       technologies: ["Github"],
    githubUrl: "https://github.com/An3sha/Anime-List",
    liveUrl: "https://an3sha.github.io/Anime-List/",
  },
];

export default function Projects() {
  return (
    <div id="root">
      <div className="root">
        <Header />
        <Box className="content">
          <FadeInSection>
            <div className="projects-container">
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </FadeInSection>
        </Box>
      </div>
    </div>
  );
}
