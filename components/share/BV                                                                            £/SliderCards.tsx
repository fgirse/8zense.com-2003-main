import React from "react";
import Image from "next/image";

interface CardProps {
  id: number;
  text: string;
  name: string;
  vorname: string;
  funktion: string;
  image: string;
  type: string;
}

const SliderCards: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return cards.map(({ id, text, name ,vorname, funktion, image, }) => (
   <>
   <div className="flex flex-row items-center justify-center">
    <div className="w-60 h-auto">
    <Image src={image} key={id} alt="" width={150} height={150}/>
    </div>    
      <span>{name}</span>
      <span>{vorname}</span>
      <span>{funktion}</span>
      <span>{text}</span>
      </div>
    </>
  ));
};

export default SliderCards;