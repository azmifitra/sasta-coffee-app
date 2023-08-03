"use client";

import * as React from "react";
import Image from "next/image";
import DrawerSide from "./DrawerSide";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [showDrawerSide, setShowDrawerSide] = React.useState(false);
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="shadow-1 fixed z-50 h-20 w-full bg-white shadow-lg">
      <div className="flex h-full items-center justify-between px-4 md:px-12">
        <div className="flex cursor-pointer items-center">
          <img
            src={"icons/icon-sasta-coffee.png"}
            alt="logo-sasta-coffee"
            className="h-16"
          />
          <span className="mx-2 mt-1 text-lg font-bold text-orange-main md:mx-2 md:text-xl">
            {/* Sasta Coffee */}
          </span>
        </div>
        <div className="flex items-center text-sm font-medium">
          {!showDrawerSide && (
            <AiOutlineMenu
              fontSize="20px"
              color="#EB7023"
              className="block h-20 cursor-pointer md:hidden"
              onClick={() => setShowDrawerSide(true)}
            />
          )}
          {showDrawerSide && (
            <AiOutlineClose
              fontSize="20px"
              color="#EB7023"
              className="block cursor-pointer md:hidden"
              onClick={() => setShowDrawerSide(false)}
            />
          )}
          <div className="hidden items-center text-lg font-medium md:flex">
            <span
              className="badge-navbar-1"
              onClick={() => handleClickScroll("about-us")}
            >
              About Us
            </span>
            <span
              className="badge-navbar-1"
              onClick={() => handleClickScroll("features-benefits")}
            >
              Features & Benefits
            </span>
            <span
              className="badge-navbar-1"
              onClick={() => handleClickScroll("products")}
            >
              Products
            </span>
            <span
              className="badge-navbar-1"
              onClick={() => handleClickScroll("contact")}
            >
              Contact
            </span>
          </div>
        </div>
      </div>
      {showDrawerSide && <DrawerSide closeDrawerSide={setShowDrawerSide} />}
    </nav>
  );
}
