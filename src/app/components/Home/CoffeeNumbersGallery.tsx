"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CoffeeNumbersGallery() {
  return (
    <main>
      <div className="flex h-full w-full p-12">
        <div className="mr-16 w-[25%] border-r-2 border-r-orange-main  pr-8">
          <h1 className="mb-2 text-4xl font-bold">Our Coffee in Numbers</h1>
          <p>
            <span className="font-bold">1+ Ton</span> Green Beans per Month
          </p>
          <p>
            <span className="font-bold">25</span> Workforce
          </p>
          <p>
            <span className="font-bold">300 ha</span> Coffee farm
          </p>
          <p>
            <span className="font-bold">100+</span> Satisfied customers
          </p>
        </div>
        <div className="flex w-[75%] flex-col items-center">
          <h1 className="mb-4 text-4xl font-bold">Gallery</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={"/green-1.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/green-2.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-1.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-2.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-3.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-4.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={"/coffee-beans-5.jpg"} />
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
