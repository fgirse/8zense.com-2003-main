
"use client"
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = () => {
    return (
        <div className="p-4 md:p-8 bg-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
                <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="assets/images/interiore11.jpg" />
                <Card
                    heading="Projekt"
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."}
                    imgSrc="assets/images/interiore13.jpg" />
                <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.jpg" 
                     imgSrc="/assets/images/interiore14.jpg" />
            <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="/assets/images/interiore16.jpg" />
            <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="/assets/images/interiore17.jpg" />
                    <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="/assets/images/interiore20.jpg" />
                    <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="/assets/images/interiore21.jpg" />
                    <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="/assets/images/interiore27.jpg"/>
                    <Card
                    heading="Projekt"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="/assets/images/interiore30.jpg" />
            </div>
        </div>
    );
};

const Card = ({
  heading,
  description,
  imgSrc,
}: {
  heading: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64  text-white bg-zenseGrey overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;











const items = [
    {
      id: 1,
      title:"Concrete Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img: "assets/images/matthew-moloney-f8JVGPcTmYg-unsplash.jpg",
    },
    {
      id: 2,
      title:"Beistelltisch Beton",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img: "assets/images/stories-AhhZor-1G1M-unsplash.jpg",
    },
    {
      id: 3,
      title: "Sideboard Beton ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      img: "assets/images/cocarinne-qMI4XmgTST8-unsplash.jpg"
    },
    {
      id: 4,
      title: "BETON-KERZENGEFÄSS",
      description:"Betonkerze",
      img: "/assets/images/stephanie-harvey-OKEmv8AKLLY-unsplash.jpg"
    },
  ];