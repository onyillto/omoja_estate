"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PremiumCTASection = () => {
  const brandColor = "#800517"; // Your primary brand color (Red)
  const secondaryColor = "#6a0413"; // Your secondary brand color (Darker Red)

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image Container */}
        <div className="relative h-[500px] md:h-[600px]">
          {/* <Image
            src="/people-livestock.jpg" // Use one compelling image
            alt="Farmers and livestock in a clean, modern agricultural setting"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="object-center"
          /> */}

          {/* Stronger, more dramatic Overlay */}
          <div
            className="absolute inset-0"
            // Using a darker, more opaque gradient that leads into your brand color
            style={{
              background: `linear-gradient(135deg, ${secondaryColor}DD 0%, ${brandColor}CC 100%)`,
            }}
          ></div>

          {/* CTA Content Block - Centered and highly visible */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6 md:p-12">
            {/* Top Tagline */}
            <h3 className="text-sm md:text-base mb-4 tracking-[4px] uppercase font-medium opacity-85">
              Ready to Build Your Agricultural Future?
            </h3>

            {/* Main Headline - Finer, bolder, and clearer */}
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-6 md:mb-10 max-w-4xl mx-auto">
              Unlock Your Potential with Productive and Secure Land
            </p>

            {/* Subtext */}
            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto opacity-90">
              Join a community of successful farmers. With flexible payment
              plans and transparent ownership, taking the next step
              towards securing your land is straightforward and hassle-free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <Link href="/schedule-visit">
                {/* Primary CTA - High contrast white button */}
                <span className="group inline-flex items-center justify-center w-full sm:w-auto bg-white hover:bg-gray-100 text-lg font-bold py-3.5 px-10 rounded-xl transition duration-300 transform hover:scale-[1.02] shadow-xl text-red-800">
                  Schedule a Site Visit
                </span>
              </Link>
              <Link href="/contact-us">
                {/* Secondary CTA - High contrast outline or filled with secondary color */}
                <span className="group inline-flex items-center justify-center w-full sm:w-auto text-lg font-semibold py-3.5 px-10 rounded-xl border-2 border-white hover:bg-white/10 transition duration-300 text-white">
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
