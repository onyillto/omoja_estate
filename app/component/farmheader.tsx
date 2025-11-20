"use client";
import React from "react";
import Image from "next/image";

const PortfolioHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/admin-1.jpg"
          alt="Iroko Farm Estate"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 sm:px-5">
        {/* Portfolio Tag */}
        <div className="mb-8 animate-fadeIn">
          <span className="text-[#2d7a6e] text-[14px] md:text-[13px] uppercase tracking-[3px] font-medium">
            Residential Estate
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-[48px] md:text-[40px] sm:text-[32px] font-bold mb-6 text-center animate-fadeInUp">
          Moja Real Estate
        </h1>

        {/* Description */}
        <p className="text-white text-[18px] md:text-[16px] sm:text-[14px] leading-[32px] md:leading-[28px] text-center max-w-[850px] mx-auto mb-16 animate-fadeInUp delay-200">
          Moja Realestate Ltd — we are a realestate agency operating in
          Abuja.... We are a company committed to delivering modern, functional,
          and high-value property solutions. Our portfolio spans residential and
          agricultural developments, property sales, and real estate advisory
          services.
        </p>

        {/* Scroll CTA */}
        <div className="flex flex-col items-center gap-3 animate-fadeInUp delay-400">
          <span className="text-white/80 text-[13px] uppercase tracking-[2px]">
            Scroll to Explore
          </span>
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default PortfolioHero;
