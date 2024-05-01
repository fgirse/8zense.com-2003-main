"use client"

import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";
import Image from "next/image";
import NetWorking from'@/public/assets/images/networking.svg'
import Quality from'@/public/assets/images/quality03.gif';


const CollapseCardFeatures = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
            Wir sind top! <span className="text-slate-400">Hier ist warum</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  icon: string;
}

const Feature = ({
  position,
  index,
  title,
  description,
  icon,
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-slate-900 text-white" : " bg-white"
      }`}
    >
      
      <div className="w-16 h-20 absolute right-4 top-2 text-7xl lg:w-36 lg:h-36"><Image src={icon} alt="" fill sizes="100vw"/></div>
      <h3 className="mb-8 text-[1.66rem] font-bold lg:text-[2.33rem]">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;

const features = [
  {
    title: "Individualität",
    icon:"/assets/images/Animation - 1713258701084.gif",
    description:
      "Individualität ist bei 8zense.com gross geschrieben. Jede unserer Beton-Compositionen ist ein Einzelstück!"  
  },
  {
    title: "Networking",
    icon:"/assets/images/networking03.gif",
    description:
      "Wir pflegen beste Verbindungen zu renommierten Architekten und Designern!",
  },
  {
    title: "Top Qualität",
    icon:"/assets/images/qualität.gif",
    description:
      "Alle die von uns hergestellten Werkstücke sind handgefertigt! ",
  },
  {
    title: "Exklusiv",
    icon:"/assets/images/exclusive.svg",
    description:
      "8zense.com steht für klares Design, hohe Funktionalität und ausgezeichneter Material Qualität!",
  },
  {
    title: "Zeitlos",
  icon:"/assets/icons/Zeituhrdark.svg",
    description: "8zense.com Beton-Design ist zeitlos!"

  },
];