import { motion } from 'framer-motion';
import '@pages/aboutPage/aboutPage.css';

function AboutPage({ setCursorVariant }) {
  const bounceVariants = {
    initial: { y: 0 },
    animate: (index) => ({
      y: [0, -40, 0],  // Bouncing effect (up and down)
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.8,
        ease: 'easeInOut',
        delay: index * 0.1,  // Delay each letter based on its index
      },
    }),
  };

  const renderTitle = (title) => {
    return title.split('').map((letter, index) => (
      <motion.span
        key={index}
        variants={bounceVariants}
        initial="initial"
        animate="animate"
        custom={index}  // Pass the index to create the delay effect
        style={{ 
          display: 'inline-block',
          background: 'black',
          color: 'white',
        }}
      >
        {letter}
      </motion.span>
    ));
  };

  const handleMouseEnter = () => {
    setCursorVariant("text")
  }

    
  const handleMouseLeave = () => {
    setCursorVariant("default")
  }


  return (
    <div className="about-container">
      <div className="title-container">
        <h1 className="title">{renderTitle('About')}</h1>
        <h1 className="title">{renderTitle('Me')}</h1>
      </div>
      <div 
        className="description-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="description">
          Franco Du Plessis — Software developer with a strong focus on backend systems, deployment automation,
          and full-stack development. Proficient in building modular, scalable applications with Odoo (Python, XML, JavaScript, SCSS),
          and experienced in Linux environments and performance debugging via the terminal. I enjoy working across
          the stack, exploring new tools, and building efficient, maintainable solutions.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
