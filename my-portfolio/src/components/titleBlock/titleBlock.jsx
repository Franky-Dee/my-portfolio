import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./titleBlock.css";

function TitleBlock({ font, onMouseEnter, onMouseLeave }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 0.95, 1],
      transition: { duration: 0.4, ease: "easeOut" },
    });
  }, [font]);

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
