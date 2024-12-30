
import { Github, ExternalLink } from 'lucide-react';
import './Styles/Project.css';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
}: ProjectCardProps) {
  return (
    <div className="project-card">
 
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="project-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}