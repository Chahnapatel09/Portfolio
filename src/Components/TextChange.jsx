import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = ["Hi, I'm Chahna", "Hi, I'm Chahna", "Hi, I'm Chahna"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => prev & texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  // Splitting "Hi, I'm Chahna" dynamically
  const splitText = currentText.split(" ");
  const firstPart = splitText.slice(0, 2).join(" "); // "Hi, I'm"
  const lastPart = splitText.slice(2).join(" "); // "Chahna"

  return (
    <div className="transition ease duration-300 text-xl md:text-3xl font-bold">
      <span className="text-white">{firstPart}</span>
      {lastPart && <span className="text-[#915EFF]"> {lastPart}</span>}
    </div>
  );
};

export default TextChange;
