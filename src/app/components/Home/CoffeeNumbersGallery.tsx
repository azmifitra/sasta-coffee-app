"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const dataCoffeeNumbers: any = [
  {
    id: 1,
    title: "1+ Ton",
    desc: "1+ Ton Green Coffee Beans per Month",
    photo: "bg-[url('assets/images/1+-ton-coffee.jpg')]",
  },
  {
    id: 2,
    title: "20+",
    desc: "20+ Workforce",
    photo: "bg-[url('assets/images/20+-workforce.jpg')]",
  },
  {
    id: 3,
    title: "10 ha+",
    desc: "10 ha+ Coffee farm",
    photo: "bg-[url('assets/images/10-ha.jpg')]",
  },
  {
    id: 4,
    title: "100+",
    desc: "100+ Satisfied customers",
    photo: "bg-[url('assets/images/100+-satisfied-customer.jpg')]",
  },
];

export default function CoffeeNumbersGallery() {
  return (
    <main>
      <div className="w-full items-center text-orange-main md:items-start">
        <div className="mb-4 flex flex-col items-center p-6 text-sm md:mb-8 md:px-6 md:py-12 md:text-base">
          <h1 className="mb-0 text-3xl font-semibold md:mb-2 md:text-4xl md:font-bold">
            Our Coffee in Numbers
          </h1>
          <div className="flex flex-wrap items-center justify-evenly md:justify-between">
            {dataCoffeeNumbers.map((el: any) => (
              <div
                className={`mt-4 h-60 w-32 rounded-lg md:mx-4 md:mt-0 md:h-96 md:w-56 ${el.photo} bg-cover bg-no-repeat`}
                key={el.id}
              >
                <div className="group relative flex h-full items-end justify-center overflow-hidden">
                  <h3
                    className="text-xl font-semibold text-white drop-shadow-2xl md:text-3xl"
                    style={{ textShadow: "2px 2px #1a1a1a" }}
                  >
                    {el.title}
                  </h3>
                  <div className="absolute -bottom-[384px] flex h-full w-full cursor-default flex-col items-center justify-center rounded-lg bg-black-main px-4 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-60"></div>
                  <div className="absolute -bottom-[384px] flex h-full w-full cursor-default flex-col items-center justify-center rounded-lg px-4 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100 md:px-8">
                    <p className="text-center text-white opacity-100 md:text-lg">
                      {el.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center bg-orange-main p-6 md:mt-0 md:px-6 md:py-12">
          <h1 className="mb-2 text-3xl font-semibold text-white md:mb-4 md:text-4xl md:font-bold">
            Gallery
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={"/coffee-cart-hero.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-1.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-2.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/us-hero.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-backyard.jpg"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
}
