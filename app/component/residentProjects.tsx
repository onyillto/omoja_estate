"use client";
import React from "react";
import Image from "next/image";

const ProjectDetails = () => {
  const projectImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  ];

  const amenities = [
    "24/7 Security with CCTV",
    "Perimeter wall fencing",
    "Tarmac roads",
    "Street lighting",
    "Central water supply",
    "Underground electricity",
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-red-50 py-20 md:py-16">
      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Project Header */}
        <div className="mb-16 md:mb-12">
          <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[3px] font-medium mb-8 block">
            Project 01
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h1 className="text-[#800517] text-[36px] md:text-[32px] sm:text-[28px] font-bold mb-4">
                Moja Gardens Estate
              </h1>
              <div className="flex items-center gap-2 text-[#800517] mb-6">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[15px]">Karen, Nairobi</span>
              </div>
              <p className="text-gray-700 text-[15px] leading-[26px] max-w-[600px]">
                A premium gated community located in the serene Karen area. Moja
                Gardens Estate offers modern living with excellent connectivity
                to the CBD and amenities. The estate features well-planned plots
                with ready titles and is ideal for families seeking a peaceful
                suburban lifestyle.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white border-2 border-[#800517]/20 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Land Area
                </span>
                <span className="text-[#800517] text-[24px] font-bold">
                  25 Acres
                </span>
              </div>
              <div className="bg-white border-2 border-[#800517]/20 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Total Plots
                </span>
                <span className="text-[#800517] text-[24px] font-bold">
                  120
                </span>
              </div>
              <div className="bg-white border-2 border-[#800517]/20 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Available
                </span>
                <span className="text-[#800517] text-[24px] font-bold">
                  87 Plots
                </span>
              </div>
              <div className="bg-white border-2 border-[#800517]/20 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Completion
                </span>
                <span className="text-[#800517] text-[24px] font-bold">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 md:mb-12">
          <div className="grid grid-cols-12 gap-4">
            {/* Large Image */}
            <div className="col-span-12 lg:col-span-8 relative h-[500px] md:h-[400px] rounded-2xl overflow-hidden group border-4 border-white shadow-xl">
              <Image
                src={projectImages[0]}
                alt="Estate main view"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-6 left-6 bg-[#800517]/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-[13px] flex items-center gap-2 hover:bg-[#800517] transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
                View Full Image
              </button>
            </div>

            {/* Small Images Grid */}
            <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              {projectImages.slice(1, 4).map((img, index) => (
                <div
                  key={index}
                  className="relative h-[240px] lg:h-[157px] rounded-2xl overflow-hidden group cursor-pointer border-4 border-white shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Estate view ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Images */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectImages.slice(4).map((img, index) => (
                <div
                  key={index}
                  className="relative h-[240px] md:h-[200px] rounded-2xl overflow-hidden group cursor-pointer border-4 border-white shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Estate view ${index + 5}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="bg-white border-2 border-[#800517]/20 rounded-2xl p-8 md:p-6 mb-6 shadow-lg">
              <h3 className="text-[#800517] text-[18px] font-semibold mb-6">
                Plot Sizes
              </h3>
              <p className="text-gray-700 text-[15px]">
                40x80 ft, 50x100 ft, 100x100 ft
              </p>
            </div>

            <div className="bg-white border-2 border-[#800517]/20 rounded-2xl p-8 md:p-6 shadow-lg">
              <h3 className="text-[#800517] text-[18px] font-semibold mb-4">
                Price Range
              </h3>
              <p className="text-[#2d7a6e] text-[24px] font-bold">
                KES 4.5M - 12M
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white border-2 border-[#800517]/20 rounded-2xl p-8 md:p-6 shadow-lg">
            <h3 className="text-[#800517] text-[18px] font-semibold mb-6">
              Estate Amenities & Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2d7a6e] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-[15px]">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
