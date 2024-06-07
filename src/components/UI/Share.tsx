"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Share() {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    setHostname(window.location.href);
  }, [hostname]);

  return (
    <a
      href={`https://wa.me/?text=${hostname}`}
      className="self-center bg-emerald-500 text-white rounded-lg m-4"
    >
      <span className="flex items-center justify-center p-2 gap-4">
        <FaWhatsapp className="scale-125" />
        <span>Share</span>
      </span>
    </a>
  );
}
