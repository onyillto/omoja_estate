"use client";
import React from "react";
import {
  CheckIcon,
  MapPinIcon,
  ChartBarIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const MethodologySection = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="uppercase font-bold tracking-[2px] text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-2 relative after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:w-16 after:h-0.5 after:bg-red-500">
            Our Methodology
          </h2>
        </div>

        {/* Approach Text */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-4">
            Designing for People and the Planet
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sustainability at Moja Real Estate Ltd is practical and verifiable.
            Every site undergoes comprehensive evaluation before it becomes a
            listing, reducing risk for buyers while preserving ecosystem
            function. We design realestates to be resource-efficient and resilient.
            On-farm infrastructure is integrated into project planning, and for
            residential sites, phased infrastructure handovers and clear
            development guidance help owners build responsibly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {/* Legal-Title Verification Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <CheckIcon className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">
              Legal-Title Verification
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Every property undergoes thorough legal documentation review
            </p>
          </div>

          {/* Infrastructure Assessment Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <MapPinIcon className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">
              Infrastructure Assessment
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Comprehensive evaluation of existing and planned infrastructure
            </p>
          </div>

          {/* Environmental Appraisal Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <ChartBarIcon className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">
              Environmental Appraisal
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Detailed environmental impact and ecosystem assessment
            </p>
          </div>

          {/* Water & Soil Analysis Card */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <BeakerIcon className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3">
              Water & Soil Analysis
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              For agricultural realestates: soil fertility and water availability
              testing
            </p>
          </div>
        </div>

        {/* Risk Reduction Section */}
        <div className="bg-red-50 rounded-lg p-6 sm:p-8 border border-red-200">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <CheckIcon className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-3">
                Risk Reduction Through Due Diligence
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                For residential projects we prioritize accessibility, planned
                infrastructure, and compliance with local planning regulations.
                These frontline checks reduce risk for buyers while preserving
                ecosystem function and ensuring long-term value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
