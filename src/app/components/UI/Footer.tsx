"use client";

import * as React from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { SiShopee } from "react-icons/si";

export default function Footer() {
  return (
    <div className="shadow-footer flex flex-col border-t-orange-main p-6 font-medium md:flex-row md:justify-between md:px-12 md:py-8">
      <div>
        <img
          src={"icons/icon-sasta-coffee-secondary.png"}
          alt="logo-sasta-coffee"
          className="mb-2 h-16 md:h-24"
        />
        <h5>Experience the satisfaction of enjoying Indonesian coffee.</h5>
        <p className="text-sm">
          Jl. Suryalaya XIV No. 3, Kel Cijagra, Kec Lengkong, 40265
        </p>
        <p className="text-sm font-normal text-gray-400">
          Copyright 2023 © Sasta Indonesia Coffee
        </p>
      </div>
      <div className="mt-4 text-sm md:mt-0 md:text-base">
        <h4 className="mb-1 text-xl font-semibold md:mb-2 md:text-3xl">
          Contact
        </h4>
        <p>(+62) 81809035905</p>
        <p>(+62) 87823895139</p>
        <p>sastaindonesiacoffee@gmail.com</p>
        <div className="mt-1">
          <p className="text-lg font-semibold text-orange-main">Follow Us</p>
          <div className="flex">
            <a
              href="https://www.instagram.com/sasta.coffee/?hl=en"
              target="_blank"
            >
              <AiOutlineInstagram
                fontSize="24px"
                color="#EB7023"
                className="mr-2 cursor-pointer hover:opacity-60"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/sasta-indonesia-coffee/"
              target="_blank"
            >
              <AiOutlineLinkedin
                fontSize="24px"
                color="#EB7023"
                className="mr-2 cursor-pointer hover:opacity-60"
              />
            </a>
            <a href="https://shopee.co.id/sastacoffeeroastery" target="_blank">
              <SiShopee
                fontSize="21px"
                color="#EB7023"
                className="mr-2 cursor-pointer hover:opacity-60"
              />
            </a>
            <a href="https://www.tokopedia.com/sastacoffee" target="_blank">
              <img
                src={"/icons/tokopedia-logo-outline.png"}
                className="h-[21px] w-[21px] cursor-pointer hover:opacity-60"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
