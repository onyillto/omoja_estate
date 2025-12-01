"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectTwo = () => {
  const projectImages = [
    "/self.jpg", // Large Image (Index 0)
    "/gate.jpg", // Top Right Image (Index 1)
    "/suparmaaket.jpg", // Bottom Right Image (Index 2)
    "/hall.jpg", // Bottom Left Image (Index 3)
    "/gate-2.jpg", // Bottom Middle Image (Index 4)
    "/self-2.jpg", // Bottom Right Image (Index 5)
  ];

  const amenities = [
    "Gated entry with controlled access",
    "High perimeter fencing and electric barbed wire",
    "24/7 on-site security personnel",
    "5 Boreholes (solar & electric powered)",
    "Engineered drainage systems",
    "Truck-ready internal roads",
    "Veterinary clinic",
    "Farm produce supermarket",
    "Multipurpose hall for training and value addition",
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-16">
      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Project Header */}
        <div className="mb-16 md:mb-12">
          <span className="text-[#800517] text-[13px] uppercase tracking-[3px] font-medium mb-8 block">
            Iron Roots Farms
          </span>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h2 className="text-[#800517] text-[36px] md:text-[32px] sm:text-[28px] font-bold mb-4">
                Iron Roots Farms
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <svg
                  className="w-5 h-5 text-[#800517]"
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
                <span className="text-[15px]">
                  Chibiri Kuje, FCT Abuja Nigeria
                </span>
              </div>
              <p className="text-gray-600 text-[15px] leading-[26px] max-w-[600px]">
                Iron Roots Farms is a thoughtfully planned agricultural estate
                in Kuje, Abuja, built for individuals and businesses who value
                productivity, resilience and long-term land stewardship. Whether
                you’re launching a commercial venture, expanding a family farm
                or establishing a sustainable agricultural enterprise, Iron
                Roots provides the infrastructure, security and supportive
                ecosystem you need to cultivate with confidence.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <span className="text-[#800517] text-[13px] uppercase tracking-[2px] block mb-2">
                  Land Area
                </span>
                <span className="text-gray-800 text-[24px] font-bold">
                  25 Acres
                </span>
              </div>
              {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <span className="text-[#800517] text-[13px] uppercase tracking-[2px] block mb-2">
                  Total Plots
                </span>
                <span className="text-gray-800 text-[24px] font-bold">120</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <span className="text-[#800517] text-[13px] uppercase tracking-[2px] block mb-2">
                  Available
                </span>
                <span className="text-gray-800 text-[24px] font-bold">
                  87 Plots
                </span>
              </div> */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <span className="text-[#800517] text-[13px] uppercase tracking-[2px] block mb-2">
                  Completion
                </span>
                <span className="text-gray-800 text-[24px] font-bold">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 md:mb-12">
          <div className="grid grid-cols-12 gap-4">
            {/* Large Image - uses projectImages[0] */}
            <div className="col-span-12 lg:col-span-7 relative h-[500px] md:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src={projectImages[0]}
                alt="Estate View 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Right Column - Two Images */}
            <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-4">
              <div className="relative h-[240px] lg:h-full rounded-2xl overflow-hidden group">
                <Image
                  src={projectImages[1]}
                  alt="Estate View 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative h-[240px] lg:h-full rounded-2xl overflow-hidden group">
                <Image
                  src={projectImages[2]}
                  alt="Estate View 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom Three Images */}
            <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Uses the remaining images from the array (Index 3, 4, 5) */}
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
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-6">
              <h3 className="text-gray-800 text-[18px] font-semibold mb-6">
                Plot Sizes
              </h3>
              <p className="text-gray-600 text-[15px]">700sqm, 1000sqm</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-6 flex flex-col justify-center">
              <h3 className="text-gray-800 text-[18px] font-semibold mb-4">
                Pricing
              </h3>
              <Link
                href="/contact"
                className="inline-block text-center bg-[#800517] text-white px-6 py-3 rounded-lg text-[15px] font-medium hover:bg-[#6a0413] transition-colors"
              >
                Make an Inquiry
              </Link>
            </div>
          </div>

          {/* Right Column - Amenities */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-6">
            <h3 className="text-gray-800 text-[18px] font-semibold mb-6">
              Estate Amenities & Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#800517] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-[15px]">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center">
          <Link
            href="/farm-estates"
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#800517] px-8 py-4 rounded-lg text-[15px] font-medium transition-all duration-300 border border-[#800517]"
          >
            View Project Details
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectTwo;
