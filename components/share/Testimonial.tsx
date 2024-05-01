"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import IlluTestimonial from"@/public/assets/images/illustration.png";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-neutral-200"
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: Function;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <>
    

    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 ${
        isActive ? "z-10 bg-zenseSignal2" : "z-0 bg-white"
      }
      `}
      style={{
        borderWidth: BORDER_SIZE,
        clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
      }}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${
          isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
        }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
       
      <span
        className="absolute block origin-top-right rotate-45 bg-black object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white",
        }}
      />
      <h3
        className={`text-base sm:text-xl ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
          isActive ? "text-zenserCyan" : "text-neutral-700"
        }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
    </>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "My favorite solution to get good design is 8zense.com.in the market. Fernandas's work and crations are awesome. ",
    by: "Brigitte Bardot, Schauspielerin",
    imgSrc: "/assets/images/avatar-sm-bardot.png",
  },
  {
    tempId: 1,
    testimonial:
      "I'm confident my regardness of good design is 8zense.com",
    by: "Jean-Paul Belmondo 'Bebel',  Schauspieler",
    imgSrc: "/assets/images/avatar-sm-belmondo.png",
  },
  {
    tempId: 2,
    testimonial:
      "I know it's cliche, but we were lost before we found 8zense. Can't thank you guys enough!",
    by: "Zinedin Zidane, Football-Player and Coach",
    imgSrc: "/assets/images/avatar-sm-zidane.png",
  },
  {
    tempId: 3,
    testimonial:
      "8zense.com's designs make planning for the future seamless. Can't recommend them enough!",
    by: "Francoise Cevert, Pilot Formula ONE",
    imgSrc: "/assets/images/avatar-sm-cevert.png",
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 11",
    by: "Franz Beckenbauer, Fussball-Weltmeister als Spieler und Trainer",
    imgSrc: "/assets/images/avatar-sm-beckenbauer.png",
  },
  {
    tempId: 5,
    testimonial:
      "SO SO SO HAPPY WE FOUND YOU FERNANDA!!!! I'd bet you've saved me 100 hours so far.",
    by: "Günther Netzer-Fussballerlegende",
    imgSrc: "/assets/images/avatar-sm-netzer.png",
  },
  {
    tempId: 6,
    testimonial:
      "Took some convincing, but now that we're on 8zense.com, we're never going back.",
    by: "Claudia Cardinale, Schauspielerin",
    imgSrc: "/assets/images/avatar-sm-cardinale.png"
  },
  {
    tempId: 7,
    testimonial:
      "I would be lost without 8zense.com's in depth analytics. The ROI is EASILY 100X for us.",
    by: "Angela Merkel, Alt Bundeskanzlerin",
    imgSrc: "/assets/images/avatar-sm-merkel.png",
  },
  {
    tempId: 8,
    testimonial: "8zense.com is just the best. Period.",
    by: "Ronaldo, Football-PlayerCEO at CO",
    imgSrc: "/assets/images/avatar-sm-ronaldo.png"
  },
  {
    tempId: 9,
    testimonial: "For good Design I switched 5 years ago to 8zense.com and never looked back.",
    by: "Andy, Handball-Profi",
    imgSrc: "/assets/images/avatar-sm-andi.png"
  },
  {
    tempId: 10,
    testimonial:
      "I've been searching for a design-studio like 8zense.com  for YEARS. So glad I finally found one!",
    by: "Pete, Architekt ",
    imgSrc: "/assets/images/avatar-sm-pete.png",
  },
  {
    tempId: 11,
    testimonial:
      "8zense.com is so awsome and intuitive - Fernanda is a fantastic designerin.",
    by: "Jean-Paul, Schauspieler",
    imgSrc: "/assets/images/avatar-sm-belmondo.png"
  },
];