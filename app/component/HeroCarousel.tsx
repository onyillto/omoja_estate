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
          src="/self.jpg"
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
          {/* Badge */}

          {/* Main Title */}
          <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-serif">
            Come Experience the cleanest form of Agriculture
          </h1>

          {/* Subtitle/Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            developing residential homes that meets SDG11 goal
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#800517] text-[#ffff] hover:bg-gray-100 rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule an inspection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div> */}
    </div>
  );
};

export default SimpleHero;
