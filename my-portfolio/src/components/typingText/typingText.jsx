import React, { useState, useEffect } from 'react';
import './typingText.css'

const TypingText = ({ font, text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span 
        className="typing-text"
        style={{ fontFamily: font }}
        >
        {displayedText}
    </span>
  );
};

export default TypingText;
