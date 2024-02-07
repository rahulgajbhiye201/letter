"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { LetterCreator } from "@/lib/server-actions/LetterCreator";

import Carousel from "./UI/Carousel";

export default function LetterCreatorForm() {
  const [formState, formAction] = useFormState(LetterCreator, null);
  const [bgSelected, setBgSelected] = useState("");

  const handleBgValue = (e: any) => {
    const bgValue = e.currentTarget.value;
    setBgSelected(bgValue);
  };

  function fieldChecker(e: any) {
    if (bgSelected === "") {
      alert("Please select a background");
      e.preventDefault();
    }
  }

  return (
    <form
      action={formAction}
      className="bg-violet-200 p-4 shadow-xl shadow-violet-300/50"
    >
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            className="rounded-lg w-20"
            disabled
            defaultValue="hello!"
          />
          <input
            type="text"
            name="name"
            className="rounded-lg w-52"
            required
            placeholder="Name of your Valentine"
          />
          <input
            type="text"
            className="rounded-lg w-64"
            disabled
            defaultValue="I want to tell you something."
          />
          <input
            type="text"
            className="rounded-lg w-full"
            disabled
            defaultValue="That, In the world with billions of people. I"
          />
          <textarea
            name="letter"
            required
            className="rounded-lg h-36 w-full"
            placeholder="Let him/her know. In the world with billions of people, Why you're the best choice to be his/hers Valentine."
          ></textarea>
          <input
            type="text"
            className="rounded-lg w-60"
            disabled
            defaultValue="So, In the occasion of Love,"
          />
          <input
            type="text"
            className="rounded-lg w-52"
            placeholder="Name of your Valentine."
          />
          <input
            type="text"
            className="rounded-lg w-full"
            disabled
            defaultValue="I am asking you, Will you be my valentine?"
          />

          <input hidden name="background" value={bgSelected} readOnly />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Carousel
            handleBgValue={(e) => handleBgValue(e)}
            bgSelected={bgSelected}
          />
        </div>

        <button
          type="submit"
          className="bg-rose-500 p-2 rounded-lg border border-solid text-white w-fit self-center"
          onClick={(e) => fieldChecker(e)}
        >
          Create Letter
        </button>
      </div>
    </form>
  );
}
