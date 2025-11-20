"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectTwo = () => {
  const projectImages = [
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80", // Infinity pool with city view
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", // Aerial suburban view
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80", // Modern house exterior
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&q=80", // Old building
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", // Interior wood design
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", // Aerial parking lot
  ];

  const amenities = [
    "Controlled access gate",
    "Solar street lights",
    "Borehole water",
    "Cabro paved roads",
    "Electric fence",
    "Shopping center (planned)",
    "Kids play area",
    "Jogging tracks",
    "Water drainage system",
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 md:py-16">
      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Project Header */}
        <div className="mb-16 md:mb-12">
          <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[3px] font-medium mb-8 block">
            Project 02
          </span>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h2 className="text-white text-[36px] md:text-[32px] sm:text-[28px] font-bold mb-4">
                Green Valley Residences
              </h2>
              <div className="flex items-center gap-2 text-[#2d7a6e] mb-6">
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
                <span className="text-[15px]">Kitengela, Kajiado</span>
              </div>
              <p className="text-gray-400 text-[15px] leading-[26px] max-w-[600px]">
                An affordable yet modern estate strategically positioned along
                Namanga Road, Kitengela. Green Valley Residences provides
                excellent value with high ROI potential. The area is rapidly
                growing with new infrastructure developments and easy access to
                SGR and Nairobi.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Land Area
                </span>
                <span className="text-white text-[24px] font-bold">
                  40 Acres
                </span>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Total Plots
                </span>
                <span className="text-white text-[24px] font-bold">200</span>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Available
                </span>
                <span className="text-white text-[24px] font-bold">
                  45 Plots
                </span>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5">
                <span className="text-[#2d7a6e] text-[13px] uppercase tracking-[2px] block mb-2">
                  Completion
                </span>
                <span className="text-white text-[24px] font-bold">2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 md:mb-12">
          <div className="grid grid-cols-12 gap-4">
            {/* Large Image - Pool */}
            <div className="col-span-12 lg:col-span-7 relative h-[500px] md:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src={projectImages[0]}
                alt="Infinity pool with city view"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Right Column - Two Images */}
            <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-4">
              <div className="relative h-[240px] lg:h-full rounded-2xl overflow-hidden group">
                <Image
                  src={projectImages[1]}
                  alt="Aerial suburban view"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative h-[240px] lg:h-full rounded-2xl overflow-hidden group">
                <Image
                  src={projectImages[2]}
                  alt="Modern house exterior"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom Three Images */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectImages.slice(3).map((img, index) => (
                <div
                  key={index}
                  className="relative h-[240px] md:h-[200px] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Estate view ${index + 4}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column - Plot Sizes & Price */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-6">
              <h3 className="text-white text-[18px] font-semibold mb-6">
                Plot Sizes
              </h3>
              <p className="text-gray-400 text-[15px]">
                50x100 ft, 100x100 ft, 1/4 Acre
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-6">
              <h3 className="text-white text-[18px] font-semibold mb-4">
                Price Range
              </h3>
              <p className="text-[#2d7a6e] text-[24px] font-bold">
                KES 1.8M - 6.5M
              </p>
            </div>
          </div>

          {/* Right Column - Amenities */}
          <div className="lg:col-span-7 bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-6">
            <h3 className="text-white text-[18px] font-semibold mb-6">
              Estate Amenities & Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2d7a6e] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-[15px]">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/projects/green-valley-residences"
            className="group inline-flex items-center gap-3 bg-[#2d7a6e] hover:bg-[#236d61] text-white px-8 py-4 rounded-lg text-[15px] font-medium transition-all duration-300"
          >
            View Project Details
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectTwo;
