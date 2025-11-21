"use client";
import React from "react";
import Image from "next/image";

const SustainabilitySection = () => {
  return (
    <section className="relative w-full h-[800px] md:h-[700px] sm:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sustainability - Wind turbines and landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content - This is the main container that uses flex and items-center to center content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 sm:px-5">
        {/* Our Commitment Tag with Lines and Leaf Icons */}
        <div className="flex items-center gap-4 mb-12 md:mb-10 mt-7">
          <div className="w-20 md:w-16 h-[2px] bg-[#8d1a06]"></div>
          {/* Leaf Icon 1 */}
          <svg
            className="w-6 h-6 md:w-5 md:h-5 text-[#8d1a06]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <span className="text-[#8d1a06] text-[14px] md:text-[13px] uppercase tracking-[3px] font-semibold">
            Our Commitment
          </span>
          {/* Leaf Icon 2 */}
          <svg
            className="w-6 h-6 md:w-5 md:h-5 text-[#8d1a06]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <div className="w-20 md:w-16 h-[2px] bg-[#8d1a06]"></div>
        </div>

        {/* Sustainability Heading - Uses text-center */}
        <h1 className="text-white text-[48px] md:text-[40px] sm:text-[32px] font-bold mb-10 md:mb-8 text-center">
          Sustainability
        </h1>

        {/* Description - Uses text-center */}
        <p className="text-white text-[20px] md:text-[18px] sm:text-[16px] leading-[38px] md:leading-[32px] sm:leading-[28px] text-center max-w-[1100px] mx-auto mb-20 md:mb-16">
          At Moja Real Estate Ltd, sustainability is not an afterthought;
          it&apos;s the framework for every parcel we acquire, every service we
          provide, and every community partnership we enter.
        </p>

        {/* Discover Our Approach Scroll Indicator */}
        <div className="flex flex-col items-center gap-4 mt-auto mb-12">
          <span className="text-white/80 text-[13px] uppercase tracking-[2px] font-medium">
            Discover Our Approach
          </span>
          {/* Bouncing Down Arrow */}
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
