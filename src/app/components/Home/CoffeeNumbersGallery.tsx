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
      <div className="flex w-full flex-col items-center px-6 py-12 md:h-[420px] md:flex-row md:items-start md:p-12">
        <div className="h-full border-r-orange-main text-sm md:mr-16 md:w-[25%] md:border-r-2 md:pr-8 md:text-base">
          <h1 className="mb-1 text-3xl font-semibold md:mb-2 md:text-4xl md:font-bold">
            Our Coffee in Numbers
          </h1>
          <p>
            <span className="font-semibold md:font-bold">1+ Ton</span> Green
            Beans per Month
          </p>
          <p>
            <span className="font-semibold md:font-bold">25</span> Workforce
          </p>
          <p>
            <span className="font-semibold md:font-bold">300 ha</span> Coffee
            farm
          </p>
          <p>
            <span className="font-semibold md:font-bold">100+</span> Satisfied
            customers
          </p>
        </div>
        <div className="mt-6 flex flex-col items-center md:mt-0 md:w-[75%]">
          <h1 className="mb-2 text-3xl font-semibold md:mb-4 md:text-4xl md:font-bold">
            Gallery
          </h1>
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
