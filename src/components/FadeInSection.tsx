// FadeInSection.tsx
import React, { useEffect, ReactNode } from 'react';
import './Styles/FadeInSection.css'; // Ensure this CSS file exists and is imported

interface FadeInSectionProps {
  children: ReactNode;
  delay?: string; // Optional delay prop
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = '0s' }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
