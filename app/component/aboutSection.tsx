"use client";
import React from "react";

const MojaOverview = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Moja Real Estate Properties"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 bg-[#800517] rounded-2xl -z-10 hidden sm:block"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-amber-100 rounded-2xl -z-10 hidden sm:block"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Section Label */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-[#800517]/10 text-[#800517] rounded-full text-sm font-semibold">
                About Moja Real Estate
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Put People{" "}
              <span className="text-[#800517] relative">
                First
                <svg
                  className="absolute -bottom-2 left-0 w-full hidden sm:block"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="#800517"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 md:space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Moja Real Estate Ltd is a premier real estate agency operating
                in Abuja, Nigeria&apos;s capital city. We are a company committed to
                delivering modern, functional, and high-value property solutions
                that meet the evolving needs of our clients.
              </p>

              <p>
                Our portfolio spans residential and agricultural developments,
                property sales, and comprehensive real estate advisory services.
                We pride ourselves on creating sustainable communities that
                enhance quality of life while preserving environmental
                integrity.
              </p>

              <p className="hidden md:block">
                At Moja Real Estate, we believe in building more than just
                properties—we build lasting relationships, thriving communities,
                and spaces where dreams become reality. Every project we
                undertake reflects our dedication to excellence, sustainability,
                and innovation.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 py-6 md:py-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#800517]">
                  500+
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                  Properties Sold
                </div>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#800517]">
                  1000+
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#800517]">
                  10+
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                  Years Experience
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#800517] hover:bg-[#6a0413] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm md:text-base">
                Learn More About Us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MojaOverview;
