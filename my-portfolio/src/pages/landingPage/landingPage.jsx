import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import MovingWordBorder from '@components/movingWordBorder/movingWordBorder.jsx'
import TitleBlock from '@components/titleBlock/titleBlock.jsx'
import TypingText from '@components/typingText/typingText.jsx'
import ClickHint from '@components/clickHint/clickHint.jsx'
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

function LandingPage({ setCursorVariant, aboutRef }) {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const [font, setFont] = useState(fonts[0]);

  const handleScroll = (e) => {
        e.stopPropagation();
        if (aboutRef && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
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
      <ClickHint />
      <div className="center-content">
        <TitleBlock 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          font={font}
          className="title-block"
        />
        <TypingText font={font} />
      </div>
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
