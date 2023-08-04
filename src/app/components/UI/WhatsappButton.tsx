"use client";
import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WAButton() {
  const [showWAButton, setShowWAButton] = useState(true);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setShowWAButton(false);
    } else {
      setShowWAButton(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showWAButton) {
    return (
      <a
        href="https://wa.me/message/NBI3OK53VXP6H1"
        target="_blank"
        className="fixed bottom-4 right-4 z-50 flex cursor-pointer items-center rounded-full bg-white p-4 font-medium shadow-md duration-500 ease-in-out hover:font-bold md:bottom-12 md:right-12 md:w-40"
      >
        <IoLogoWhatsapp
          fontSize="24px"
          color="#25D366"
          className="block md:mr-1"
        />
        <p className="hidden md:block">Whatsapp Us</p>
      </a>
    );
  } else {
    <></>;
  }
}
