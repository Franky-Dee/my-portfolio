import React, { useState, useEffect } from 'react';
import './typingText.css';

const TypingText = ({ 
    font, 
    phrases = [
                "Deciding if frontend is really easy or really difficult", 
                "aka DankyFranky", 
                "Learning Rust", 
                "JK", 
                "Monotone color schemes > googling hash values", 
                "'Knock Knock'  ... 'Who's there?' ... (10 minutes pass) .........           'Java'", 
                "'Well well well ... how the turn tables ............. '", 
                " - Michael Scott ", 
                "!false ... (it's funny cause it's true)", 
              ], 
    speed = 100, 
    pause = 1500 
    }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[textIndex % phrases.length];

    let typeSpeed = speed;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, phrases, speed, pause]);

  return (
    <span className="typing-text" style={{ fontFamily: font }}>
      {displayedText}<span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingText;
