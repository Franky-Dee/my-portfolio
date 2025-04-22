import { useState, useEffect } from "react";
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

  useEffect(() => {
    const changeFont = () => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setFont(randomFont);
    };

    window.addEventListener("click", changeFont);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("click", changeFont);
    };
  }, []);

  return (
    <div className="name">
      <h1
        style={{ fontFamily: font }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        FrankyDee
      </h1>
    </div>
  );
}

export default TitleBlock;
