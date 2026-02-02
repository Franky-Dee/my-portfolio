import '@pages/aboutPage/aboutPage.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import AsciiFlash from '@components/asciiFlash/asciiFlash.jsx';

function AboutPage({ setCursorVariant }) {
  const [flashTrigger, setFlashTrigger] = useState(0);
  const [projectsClicks, setProjectsClicks] = useState(0);
  const [flashMode, setFlashMode] = useState('first');
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleProjectsClick = () => {
    setProjectsClicks((prev) => {
      const next = prev + 1;
      setFlashMode(next >= 2 ? 'twice' : 'first');
      return next;
    });
    setFlashTrigger(prev => prev + 1);
  };

  const aboutText = "ABOUT";
  const meText = "ME";

  const letterVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className='about-container'>
        <div className="title-container">
            <h1 className="title-wrapper">
              {aboutText.split('').map((letter, index) => (
                <motion.span
                  key={`about-${index}`}
                  className="title animated-letter"
                  custom={index}
                  variants={letterVariants}
                  animate="animate"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <h1 className="title-wrapper">
              {meText.split('').map((letter, index) => (
                <motion.span
                  key={`me-${index}`}
                  className="title secondary animated-letter"
                  custom={index + aboutText.length}
                  variants={letterVariants}
                  animate="animate"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
        </div>
        <div className="description-container">
            <div className="description-wrapper">
              <p 
                className="description"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Full-stack developer with a passion for backend systems and deployment automation.
                Proficient in Python, JavaScript, and their ecosystems. Experienced in Linux environments,
                performance optimization, and building scalable solutions. Always exploring new technologies
                and experimenting with creative frontend projects.
              </p>
              <motion.button
                className="projects-button"
                onClick={handleProjectsClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {projectsClicks === 0 ? 'PROJECTS' : 'Try Again?'}
              </motion.button>
            </div>
        </div>
        <AsciiFlash trigger={flashTrigger} mode={flashMode} />
    </div>
  )
}

export default AboutPage
