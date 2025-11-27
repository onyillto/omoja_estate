"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SimpleHero = () => {
  return (
    <div className="relative h-screen w-full pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home.jpg"
          alt="Luxury Real Estate"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-serif">
            Come Experience the cleanest form of Agriculture
          </h1>

          {/* Subtitle/Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            developing residential homes that meets SDG11 goal
          </p>

          {/* CTA Button with Bouncy Animation */}
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#800517] text-[#ffff] hover:bg-gray-100 hover:text-[#800517] rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-bounce-slow"
          >
            Schedule an inspection
          </Link>
        </div>
      </div>

      {/* Custom Styles for Bouncy Animation */}
      <style jsx>{`
        /* This bounce animation is used for attention-seeking elements.
        */
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            /* Moves the button up 10px at the midpoint */
            transform: translateY(-10px);
          }
        }

        /* Applying the custom animation */
        .animate-bounce-slow {
          /* 2.5s duration, infinite loop, smooth easing */
          animation: bounce-slow 2.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SimpleHero;
