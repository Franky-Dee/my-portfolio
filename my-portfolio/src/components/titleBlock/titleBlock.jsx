import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./titleBlock.css";

const fonts = [
  "'DM Serif Text', serif",
  "'Imperial Script', cursive",
  "'Fascinate Inline', system-ui",
  "'Silkscreen', sans-serif",
  "'Creepster', system-ui",
  "'Notable', sans-serif",
  "'Libre Barcode 128 Text', system-ui",
  "'Danfo', serif",
];

function TitleBlock({ onMouseEnter, onMouseLeave }) {
  const [font, setFont] = useState(fonts[0]);
  const controls = useAnimation();

  useEffect(() => {
    const changeFont = () => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setFont(randomFont);

      controls.start({
        scale: [1, 1.2, 0.95, 1],
        transition: { duration: 0.4, ease: "easeOut" },
      });
    };

    window.addEventListener("click", changeFont);

    return () => {
      window.removeEventListener("click", changeFont);
    };
  }, [controls]);

  return (
    <div className="name">
      <motion.h1
        style={{ fontFamily: font }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        animate={controls}
      >
        FrankyDee
      </motion.h1>
    </div>
  );
}

export default TitleBlock;
