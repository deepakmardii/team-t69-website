import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

const CustomCard = ({ imageUrl, text }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none mr-14">
      <Image
        alt="#"
        className="object-cover h-80"
        height={400}
        src={imageUrl}
        width={300}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 text-center justify-center ">
        <p className="text-tiny text-white/80 text-center py-2">{text}</p>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
