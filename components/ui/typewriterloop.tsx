import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  " Amplify Online Presence",
  " Skyrocket Success",
  " Elevate Your Reach",
  " Optimise Web Reach",
  " Fortify Web Presence"
];

const TypewriterLoop: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState<string>("");
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (!deleteMode) {
        if (currentIndex < phrases[currentPhraseIndex].length) {
          setCurrentPhrase(prevPhrase => prevPhrase + phrases[currentPhraseIndex][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(typeInterval); // Stop typing
          setTimeout(() => {
            setDeleteMode(true); // Start deletion after 1 second delay
            setTimeout(() => {
              setCursorVisible(false); // Hide cursor after deletion starts
            }, 100); // Adjust if needed
          }, 1000); // Delay before deletion starts
        }
      }
    }, 85); // Typing speed

    const deleteInterval = setInterval(() => {
      if (deleteMode && currentIndex > 0) {
        setCurrentPhrase(prevPhrase => prevPhrase.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
      } else if (deleteMode) {
        clearInterval(deleteInterval); // Stop deletion
        setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length); // Move to the next phrase
        setCurrentIndex(0);
        setDeleteMode(false); // Reset delete mode
        setCursorVisible(true); // Show cursor
      }
    }, 35); // Deletion speed

    return () => {
      clearInterval(typeInterval);
      clearInterval(deleteInterval);
    };
  }, [currentPhraseIndex, currentIndex, deleteMode]);

  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        key={currentPhraseIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade-in duration
        className="md:text-7xl text-3xl lg:text-6xl font-bold text-center z-10 mt-0"
      >
        {currentPhrase}
        {cursorVisible && <span className="animate-blink">|</span>}
      </motion.div>
    </div>
  );
};

export default TypewriterLoop;
