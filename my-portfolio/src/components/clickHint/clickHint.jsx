import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './clickHint.css';

function ClickHint() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Hide after 8 seconds (3 seconds visible)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="click-hint"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          try click
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ClickHint;
