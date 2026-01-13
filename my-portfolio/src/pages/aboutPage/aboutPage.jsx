import '@pages/aboutPage/aboutPage.css'
import { motion } from 'framer-motion';

function AboutPage({ setCursorVariant }) {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

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
        </div>
    </div>
  )
}

export default AboutPage
