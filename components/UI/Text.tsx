"use client";

import { useEffect, useState, useRef } from "react";
import { Response } from "@/lib/db/db-helper";
import {
  Animation,
  AnimationYes,
  AnimationNo,
  AnimationBroken,
  AnimationCouple,
} from "./Animation";
import anime from "animejs";

type textProps = {
  letter_id: string;
  valentines_letter: string;
  valentines_name: string;
  background_id: string;
  valentines_response: string;
};

const Text: React.FC<textProps> = ({
  letter_id,
  valentines_letter,
  valentines_name,
  valentines_response,
}) => {
  const [hovered, setHovered] = useState({
    elem: "",
    hover: false,
  });
  const [clicked, setClicked] = useState({
    elem: "",
    click: false,
  });
  const [animation, setAnimation] = useState<JSX.Element>(<></>);
  const btnYes = useRef<HTMLButtonElement>(null);
  const btnNo = useRef<HTMLButtonElement>(null);
  const responseDiv = useRef<HTMLDivElement>(null);
  const aniDiv = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: any) => {
    setHovered({ elem: e.target.value, hover: true });
  };

  const handleMouseLeave = (e: any) => {
    setHovered({ elem: e.target.value, hover: false });
  };

  useEffect(() => {
    const { elem, hover } = hovered;

    const hoverAnimation = () => {
      let data;
      if (!clicked.click) {
        if (elem === "Yes" && hover) {
          data = <AnimationYes />;
        } else if (elem === "No" && hover) {
          data = <AnimationNo />;
        } else if ((elem === "Yes" && !hover) || elem === "No" || !hover) {
          data = <></>;
        }
      }

      setAnimation(data!);
    };

    hoverAnimation();
  }, [hovered]);

  useEffect(() => {
    const logoAnimation = anime.timeline({
      autoplay: true,
      easing: "linear",
    });

    if (!responsed) {
      logoAnimation
        .add({
          targets: ["#ValName", "#ValHelloGif"],
          opacity: [0, 1],
        })
        .add({
          targets: ["#ValName", "#ValHelloGif"],
          opacity: [1, 0],
          delay: 3000,
        })
        .add({
          targets: ["#ValMessage", "#ValShyGif"],
          opacity: [0, 1],
        })
        .add({
          targets: ["#ValMessage", "#ValShyGif"],
          opacity: [1, 0],
          delay: 3000,
        })
        .add({
          targets: ["#ValMessage1", "#ValBlushGif"],
          opacity: [0, 1],
        })
        .add({
          targets: "#ValMessage1",
          opacity: [1, 0],
          delay: 3000,
        })
        .add({
          targets: "#ValMessage2",
          opacity: [0, 1],
        })
        .add({
          targets: ["#ValMessage2", "#ValBlushGif"],
          opacity: [1, 0],
          delay: 15000,
        })
        .add({
          targets: "#ValResponse",
          opacity: [0, 1],
          begin: function (anim) {
            const element = anim.animatables[0].target;
            console.log(element);
            if (element) {
              element.classList.remove("hidden");
            }
          },
        });
    }
  }, []);

  const handleYesNo = (e: any) => {
    Response(letter_id, e.target.value);
    setClicked({ elem: e.target.value, click: true });
    setHovered({ elem: e.target.value, hover: false });

    let element;

    if (e.target.value === "Yes") {
      element = btnNo.current;
      if (element) {
        element.disabled = true;
      }
    } else if (e.target.value === "No") {
      element = btnYes.current;
      if (element) {
        element.disabled = true;
      }
    }

    const elementResponseDiv = responseDiv.current;
    const elementAniDiv = aniDiv.current;

    if (elementResponseDiv) {
      elementResponseDiv.style.display = "none";
    }
    if (elementAniDiv) {
      elementAniDiv.style.display = "none";
    }
  };

  let responsed: boolean;

  valentines_response !== undefined ? (responsed = true) : (responsed = false);

  return (
    <>
      {responsed ? (
        <></>
      ) : (
        <div ref={aniDiv} className="flex justify-center size-36 relative">
          {animation}
          <Animation />
        </div>
      )}

      {(responsed && valentines_response === "Yes") ||
      clicked.elem === "Yes" ? (
        <div className="flex justify-center size-64 items-center relative m-auto">
          <AnimationCouple />
        </div>
      ) : (
        <></>
      )}
      {(responsed && valentines_response === "No") || clicked.elem === "No" ? (
        <div className="flex justify-center size-64 items-center relative m-auto">
          <AnimationBroken />
        </div>
      ) : (
        <></>
      )}

      {responsed ? (
        <></>
      ) : (
        <div
          ref={responseDiv}
          className="relative flex w-full justify-center text-center text-neutral-900 font-medium"
        >
          <h1 id="ValName" className="text-xl opacity-0 lg:text-2xl absolute">
            hello! {valentines_name}
          </h1>

          <p id="ValMessage" className="text-lg opacity-0 lg:text-xl absolute">
            I want to tell you something. That,{""}
          </p>

          <p
            id="ValMessage1"
            className="text-lg opacity-0 lg:text-xl absolute w-full"
          >
            In the world of billions of people.
          </p>

          <p
            id="ValMessage2"
            className="text-lg opacity-0 lg:text-xl absolute w-full"
          >
            I {valentines_letter}
          </p>
          <div id="ValResponse" className="absolute hidden opacity-0">
            <div className="flex gap-4 items-center flex-col">
              <p className="text-lg lg:text-xl">
                So, In the occasion of Love, {valentines_name}.
                <br />I am asking you, Will you be my valentine?
              </p>
              <div>
                <button
                  ref={btnYes}
                  value={"Yes"}
                  className="bg-rose-300 m-4 rounded-lg px-4 py-1 hover:bg-rose-400"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleYesNo(e)}
                >
                  Yes
                </button>
                <button
                  ref={btnNo}
                  value={"No"}
                  className="bg-blue-300 m-4 rounded-lg px-4 py-1 hover:bg-blue-400"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleYesNo(e)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Text;
