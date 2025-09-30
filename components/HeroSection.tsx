"use client"
import Image from "next/image"
import CustomerHighlights from "./CustomHighlight"
import ReviewBadge from "./ReviewBadge"
import BenefitBadge from "./BenefitBadge"
import Testimonial from "./Testimonial/Testimonial"
import { useState } from "react"


const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <div className="h-full  relative md:w-full md:h-[450px] rounded-[40px] overflow-hidden">
            <div className="w-full h-full">
                <Image
                    src="/assets/emirates.jpg"
                    alt="Emirates Stadium"
                    fill
                    className="object-cover" />
                <div className="absolute inset-0 [background:linear-gradient(270deg,rgba(53,84,209,0)_60.39%,rgba(53,84,209,0.5)_72.76%,rgba(53,84,209,0.5)_100%),linear-gradient(119.84deg,rgba(53,84,209,0)_52.27%,rgba(53,84,209,0.5)_84.84%)]">
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between pt-6 pb-8 pl-6 pr-6 md:pt-12 md:pb-16 md:pl-8 md:pr-10 h-full">
                    {/* Left Side */}
                    <div className=" md:w-[576px] md:h-[354px]">
                        <div className="font-plus text-white md:w-[576px]md: h-[166px]">
                            <h1 className="text-[26px] md:text-[64px] font-semibold">Arsenal Tickets</h1>
                            <p className="text-[15px] font-normal md:text-[18px] text-[rgba(255, 255, 255, 1)] leading-[150%] tracking-[0.02em]">
                                Buy Arsenal tickets for Premier League, Champions League, and Cup
                                matches at Emirates Stadium. Secure your seats to watch the Gunners
                                live in action.
                            </p>
                        </div>
                        <div className="mt-0 md:mt-6">
                             <CustomerHighlights activeIndex={activeIndex} />
                        </div>

                        <div className="mt-4 h-[26px] md:w-[433.67px] md:h-[30px]">
                            <ReviewBadge  />
                        </div>
                    </div>

                    {/* Right Side - Benefit Badges */}
                    <div className="hidden absolute md:flex flex-col items-end mt-0 pr-5 right-0  space-y-2">
                        <BenefitBadge text="24/7 travel butler" />
                        <BenefitBadge text="Best price are guaranteed" />
                        <BenefitBadge text="We guarantee seats together" />
                    </div>
                    <div className=" hidden absolute md:flex right-0 bottom-11 pr-5 items-end  ">
                          <Testimonial onSlideChange={setActiveIndex} />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default HeroSection