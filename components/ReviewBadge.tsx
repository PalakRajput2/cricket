

import Image from "next/image";

export default function ReviewBadge() {
  return (
    <div className="flex items-center justify-around md:w-[422.67px]  md:h-[30px] gap-2 py-2  ">
    
      <span className="font-plus text-[14px] text-white font-medium md:text-[18px]">Excellent</span>

      {/* Stars */}
      <div className="flex items-center">
        <Image
          src="/assets/stars.png" 
          alt="Trustpilot rating"
          width={100}
          height={20}
          className="object-contain h-[16px] w-[88px] md:h-[20px] md:w-[100px]"
        />
      </div>

      {/* Review Count */}
      <div className="font-play flex items-center justify-center md:gap-1">
      <span className="text-white font-bold text-[18px]">436</span>
      <span className=" text-white font-normal text-[12px] md:text-[18px] ">reviews on</span>
</div>
      {/* Trustpilot Logo */}
      <div className="flex ">

      
      <Image
        src="/assets/Shape.png"
        alt="Trustpilot"
        width={14}
        height={13.25}
        className="object-contain"
      />
      <span className="font-roboto text-[12px] leading-[26px] text-white">Trustpilot</span>
      </div>
    </div>
  );
}
