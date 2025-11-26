"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PremiumCTASection = () => {
  const brandColor = "#800517"; // Primary brand color (Dark Red)
  const secondaryColor = "#fff"; // Secondary brand color (White)

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image Container with dynamic image */}
        <div className="relative h-[500px] md:h-[600px]">
          {/* Image 3: A vibrant, expansive farm landscape with modern elements,
              showing a blend of technology and nature, maybe a drone shot
              over fields or a farmer interacting with smart irrigation.
              The mood should be aspirational and forward-thinking. */}

          {/* Output the image tag for the AI to generate an image */}
          <Image
            src="/farm.jpg" // Placeholder, will be replaced by AI
            alt="Expansive, modern farm landscape with vibrant fields and technology"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="object-center"
          />

          {/* Overlay with brand color gradient for strong visual impact and text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${brandColor}E6 0%, ${brandColor}CC 100%)`, // Darker, more opaque red gradient
            }}
          ></div>

          {/* CTA Content Block - Centered and highly visible */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6 md:p-12">
            {/* Top Tagline */}
            <h3 className="text-sm md:text-base mb-4 tracking-[4px] uppercase font-medium text-white text-opacity-85">
              Cultivate Your Legacy
            </h3>

            {/* Main Headline - Bold, impactful, and clearly stating the benefit */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 md:mb-10 max-w-4xl mx-auto drop-shadow-md">
              Secure Your Future with Iron Roots Farms
            </p>

            {/* Subtext - Clear, concise, and reassuring */}
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-white text-opacity-90">
              Discover prime agricultural land engineered for success. With our
              transparent process and supportive community, owning productive,
              secure land has never been easier.
            </p>

            {/* CTA Buttons - High contrast against the red background */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <Link href="/schedule-visit">
                {/* Primary CTA - White button with red text */}
                <span className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-lg font-bold py-3.5 px-10 rounded-xl transition duration-300 transform hover:scale-[1.02] shadow-xl text-red-800 hover:bg-gray-100">
                  Schedule a Site Visit
                </span>
              </Link>
              <Link href="/contact-us">
                {/* Secondary CTA - White outline button with white text */}
                <span className="group inline-flex items-center justify-center w-full sm:w-auto text-lg font-semibold py-3.5 px-10 rounded-xl border-2 border-white text-white hover:bg-white/10 transition duration-300">
                  Contact Our Team
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTASection;
