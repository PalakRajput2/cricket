"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial.css";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "./testimonialData";

export default function Testimonial({ onSlideChange }: { onSlideChange: (index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-[485px] h-[214px] bg-[rgba(53,84,209,0.7)] backdrop-blur-xl rounded-2xl p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          onSlideChange(swiper.realIndex);
        }}
        className="h-full"
      >
        {testimonials.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <SwiperSlide
              key={index}
              style={{ width: isActive ? "280px" : "100px" }}
              className="flex items-center transition-all duration-300"
            >
              <div
                className={`${
                  isActive ? "w-[280px] h-[150px]" : "w-[100px] h-[150px]"
                } rounded-xl overflow-hidden transition-all duration-300`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={isActive ? 280 : 100}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Nav Buttons */}
      <div className="absolute bottom-2 right-4 flex gap-2 z-10 ">
        <button className="prev-btn w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/35 transition border border-white/30">
          <ChevronLeft className="text-white size-[25px]" strokeWidth={2.5} />
        </button>
        <button className="next-btn w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/35 transition border border-white/30">
          <ChevronRight className="text-white size-[25px]" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
