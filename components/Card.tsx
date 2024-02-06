"use client";

import Text from "./UI/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";

type cardProps = {
  className: string;
  letter_id: string;
  valentines_letter: string;
  valentines_name: string;
  background_id: string;
  valentines_response: string;
};

const Card: React.FC<cardProps> = ({
  className,
  letter_id,
  valentines_letter,
  valentines_name,
  background_id,
  valentines_response,
}) => {
  return (
    <div className="flex flex-col flex-auto items-center justify-center relative">
      <Image
        src={`/${background_id}.svg`}
        alt="Valentine background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
        }}
        priority
        className="size-auto -z-10"
      />
      <div
        className={cn(
          "flex flex-col flex-auto items-center justify-center pb-28 gap-4 lg:gap-8 ",
          className
        )}
      >
        <div className="flex justify-center w-full flex-col items-center gap-4 p-4">
          <Text
            letter_id={letter_id}
            valentines_letter={valentines_letter}
            valentines_name={valentines_name}
            background_id={background_id}
            valentines_response={valentines_response}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
