"use client";

import Image from "next/image";
import { gifs } from "@/lib/image-helper";

export const Animation = () => {
  return (
    <>
      <Image
        src={`/${gifs[0]}.gif`}
        alt="Valentine background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto opacity-0"
        id="ValHelloGif"
      />
      <Image
        src={`/${gifs[1]}.gif`}
        alt="Valentine background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto opacity-0"
        id="ValShyGif"
      />
      <Image
        src={`/${gifs[2]}.gif`}
        alt="Valentine background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto opacity-0"
        id="ValBlushGif"
      />
    </>
  );
};

export const AnimationYes = () => {
  return (
    <>
      <Image
        src={`/${gifs[3]}.gif`}
        alt="Valentine background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto"
        id="ValYesGif"
      />
    </>
  );
};

export const AnimationNo = () => {
  return (
    <>
      <Image
        src={`/${gifs[4]}.gif`}
        alt="Valentine background"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto"
        id="ValNoGif"
      />
    </>
  );
};

export const AnimationCouple = () => {
  return (
    <>
      <Image
        src={`/${gifs[5]}.gif`}
        alt="Valentine background"
        fill
        priority
        style={{
          opacity: 1,
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto"
        id="ValBrokenGif"
      />
    </>
  );
};

export const AnimationBroken = () => {
  return (
    <>
      <Image
        src={`/${gifs[6]}.gif`}
        alt="Valentine background"
        fill
        priority
        style={{
          opacity: 1,
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="size-auto"
        id="ValBrokenGif"
      />
    </>
  );
};
