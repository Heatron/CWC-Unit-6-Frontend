// TextGenerateEffect.tsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  cursorBlinkRate?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = "",
  duration = 0.05,
  cursorBlinkRate = 0.5,
}) => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === words.length) {
        clearInterval(intervalId);
      } else {
        setText(words.substring(0, currentIndex + 1));
        currentIndex++;
      }
    }, duration * 1000);

    return () => clearInterval(intervalId);
  }, [words, duration]);

  useEffect(() => {
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkRate * 1000);

    return () => clearInterval(cursorIntervalId);
  }, [cursorBlinkRate]);

  return (
    <span className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration / 2, ease: "linear" }} // Fade-in animation for typewriting effect
      >
        {text}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: cursorBlinkRate / 2, yoyo: Infinity }} // Blinking animation for cursor
        style={{ color: "#8be6d8" }} // Icy blue color for cursor
      >
        {showCursor && (
          <span
            className="inline-block h-4 w-0.5 bg-white"
            style={{ marginLeft: "2px", verticalAlign: "text-bottom" }}
          ></span>
        )}
      </motion.span>
    </span>
  );
};
