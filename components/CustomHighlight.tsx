import Image from "next/image";
import { testimonials } from "./Testimonial/testimonialData";

export default function CustomerHighlights({ activeIndex }: { activeIndex: number }) {
  const avatar = testimonials[activeIndex % testimonials.length].src;

  return (
    <div className="flex items-center gap-6 md:gap-12 w-[337px] h-[92px] md:mt-8">
      {/* Avatar + Play Button */}
      <div className="relative w-[92px] h-[92px] flex-shrink-0">
        {/* Gradient ring */}
        <div className="absolute inset-0 rounded-full p-[2px]  border-3 border-b-[#3554D1] border-l-[#3554D1] border-t-[#F8D448] border-r-[#F8D448]">
          {/* Inner white circle (creates gap effect) */}
          <div className="w-full h-full rounded-full p-[4px]"> 
            {/* Avatar image */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt="Customer"
                fill
                className="object-cover size-[80px]"
              />
            </div>
          </div>
        </div>

        {/* Play Icon overlay */}
        <div className="absolute left-19 top-8 w-[32px] h-[32px]">
          <Image
            src="/assets/PlayCircle.png"
            alt="play-button"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text */}
      <div className="font-plus text-[#FFFFFF] tracking-wide font-medium text-[14px] leading-[130%] w-[213px] h-[36px]">
        <p>Watch some highlights from our customers</p>
      </div>
    </div>
  );
}
