"use client";

import Image from "next/image";
import { backgrounds } from "@/lib/image-helper";

type CarouselProps = {
  handleBgValue: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bgSelected: any;
};

const Carousel: React.FC<CarouselProps> = ({ handleBgValue, bgSelected }) => {
  return (
    <>
      {backgrounds.map((items: string) => {
        return (
          <button
            key={items}
            value={`${items}`}
            className={`relative outline rounded-lg ${
              bgSelected === items
                ? "outline-4 outline-cyan-400"
                : "outline-none"
            }`}
            type="button"
            onClick={handleBgValue}
          >
            <Image
              src={`/${items}.svg`}
              alt={items}
              width={300}
              height={300}
              priority={true}
              className="rounded-lg size-auto"
            />
          </button>
        );
      })}
    </>
  );
};

export default Carousel;
