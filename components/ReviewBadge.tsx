

import Image from "next/image";

export default function ReviewBadge() {
  return (
    <div className="flex items-center justify-around md:w-[422.67px]  md:h-[30px] gap-1 md:gap-2 py-2  ">
    
      <span className="font-plus text-[14px] text-white font-medium md:text-[18px]">Excellent</span>

      {/* Stars */}
      <div className="flex items-center">
        <Image
          src="/assets/stars.png" 
          alt="Trustpilot rating"
          width={88}
          height={20}
          className="object-contain md:h-[20px] md:w-[100px]"
        />
      </div>

      {/* Review Count */}
    <div className="font-play flex items-center justify-center gap-1">
  <span className="text-white font-bold text-[18px] leading-none">436</span>
  <span className="text-white font-normal text-[12px] md:text-[18px] leading-none">reviews on</span>
</div>

      {/* Trustpilot Logo */}
      <div className="flex items-center justify-center gap-1">

      
      <Image
        src="/assets/Shape.png"
        alt="Trustpilot"
        width={0}
        height={13.25}
        className="object-contain w-[14px] "
      />
      <span className="font-roboto text-[13px] leading-[26px] text-[#ffffff]/70">Trustpilot</span>
      </div>
    </div>
  );
}
