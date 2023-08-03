"use client";

import * as React from "react";

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
        <p>ini_nanti_diganti@rocketmail.com</p>
      </div>
    </div>
  );
}
