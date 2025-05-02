import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import MovingWordBorder from '@components/movingWordBorder/movingWordBorder.jsx'
import TitleBlock from '@components/titleBlock/titleBlock.jsx'
import TypingText from '@components/typingText/typingText.jsx'
import '@pages/landingPage/landingPage.css';

const fonts = [
  "'DM Serif Text', serif",
  "'Imperial Script', cursive",
  "'Fascinate Inline', system-ui",
  "'Creepster', system-ui",
  "'Notable', sans-serif",
  "'Libre Barcode 128 Text', system-ui",
  "'Danfo', serif",
  "'Jersey 15', sans-serif",
];

function LandingPage({ setCursorVariant }) {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const [font, setFont] = useState(fonts[0]);

  const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight + 10,
            left: 0,
            behavior: "smooth",
        });
  }

  useEffect(() => {
    const changeFont = () => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setFont(randomFont);
    };

    window.addEventListener("click", changeFont);
    return () => window.removeEventListener("click", changeFont);
  }, []);

  return (
    <div className="main-container">
      <MovingWordBorder />
      <TitleBlock 
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        font={font}
        className="title-block"
      />
      <TypingText font={font} />
      <motion.div 
        className="bottom-left-arrow"
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
    <button onClick={handleScroll} className="down-button">
            <img src="../../../public/images/down-icon.svg" className="down-image"/>
        </button>
      </motion.div>
    </div>
  );
}

export default LandingPage;
