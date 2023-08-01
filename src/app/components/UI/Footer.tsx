"use client";

import * as React from "react";

export default function Footer() {
  return (
    <div className="shadow-footer flex flex-col border-t-orange-main px-12 py-8 font-medium md:flex-row md:justify-between">
      <div>
        <img
          src={"icons/icon-sasta-coffee-secondary.png"}
          alt="logo-sasta-coffee"
          className="mb-2 h-24"
        />
        <h5>Experience the satisfaction of enjoying Indonesian coffee.</h5>
        <p className="text-sm font-normal text-gray-400">
          Copyright 2023 © Sasta Coffee
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <h4 className="mb-2 text-3xl font-semibold">Contact</h4>
        <p>(+62) 81809035905</p>
        <p>(+62) 87823895139</p>
        <p>ini_nanti_diganti@rocketmail.com</p>
      </div>
    </div>
  );
}
