"use client"

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const VanishText = () => {
  return (
    <div className=" px-4 py-24 text-center md:py-36">
      <h3 className="text-3xl font-medium text-zenseGrey sm:text-4xl md:text-5xl lg:text-6xl">
        Das sagen unsere Kunden:
        <AnimatedText
          phrases={[
            "Lobeshymnen 🏆🏆🏆",
            "Statements 🔝🗯🆒 ",
            "Dankeschöns",
            "Sterne ⭐️⭐️⭐️",
            "Thumb-Up's 👍🏼👍🏼👍🏼",
          ]}
        />
      </h3>
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 5;
const STAGGER = 0.025;

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4 text">
      <AnimatePresence mode="popLayout">
        {phrases[active].split(" ").map((word, wordIndex) => {
          if (wordIndex === 0) {
            countRef.current = 0;
          }

          return (
            <motion.div key={word} className="whitespace-nowrap text-zenseSignal2">
              {word.split("").map((letter, letterIndex) => {
                const content = (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      delay: countRef.current * STAGGER,
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                    }}
                    className="inline-block"
                    key={letterIndex}
                  >
                    {letter}
                  </motion.span>
                );

                countRef.current++;
                return content;
              })}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

