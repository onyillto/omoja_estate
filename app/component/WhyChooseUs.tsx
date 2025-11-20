"use client";
import React from "react";
import Image from "next/image";
import {
  Leaf,
  ShieldCheck,
  Droplets,
  Video,
  Utensils,
  Trees,
  CheckCircle2,
  Globe,
} from "lucide-react";

const CommitmentSection = () => {
  const projectFeatures = [
    {
      icon: <Droplets className="w-5 h-5" />,
      text: "Boreholes & Advanced Drainage Systems",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "Perimeter Fencing & Gatehouses",
    },
    {
      icon: <Video className="w-5 h-5" />,
      text: "24/7 CCTV Security Systems",
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      text: "Farm-to-Table Restaurants & Markets",
    },
    {
      icon: <Trees className="w-5 h-5" />,
      text: "Green Areas & Relaxation Spots",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-bl-full opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-tr-full opacity-50 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        {/* --- Part 1: Our Commitment --- */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-100 text-[#800517] text-xs font-bold uppercase tracking-wider mb-6">
            <Globe className="w-4 h-4" /> Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Commitment to Excellence
          </h2>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At Moja Realestate Ltd, we are redefining land development through
              integrity, expertise, and sustainability. Guided by the principles
              of{" "}
              <span className="inline-block border-b-2 border-red-300 font-semibold text-gray-900">
                SDG 11 (Sustainable Cities & Communities)
              </span>
              , we create safe, thriving, and future-ready spaces that empower
              people, preserve natural resources, and sustain value across
              generations.
            </p>
            <p>
              We integrate rigorous due diligence to deliver secure Agricultural
              and Residential RealEstates that exceed regulatory standards, ensuring
              every project enhances both economic productivity and ecological
              balance.
            </p>
          </div>
        </div>

        {/* --- Part 2: Agricultural Projects Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-[#800517]">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Agricultural Projects
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our agricultural realestates and farming communities are
                meticulously designed to support commercial farming on small,
                medium, and large scales. Whether for crop cultivation or animal
                husbandry, each unit features defined layouts and infrastructure
                designed to help your investments thrive.
              </p>

              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                Standard Infrastructure Includes:
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {projectFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-[#800517] flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm text-blue-800 italic">
                These measures ensure a safe, efficient environment that
                safeguards the ecosystem while sustaining long-term
                productivity.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Background Offset Border */}
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-red-600/20 rounded-2xl z-0 hidden md:block"></div>

            {/* Main Image Container */}
            <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/gate-3.jpg" // Ensure this path is correct in your public folder
                alt="Sustainable Agricultural Estate"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#800517] rounded-full text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      100% Due Diligence
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Every site undergoes comprehensive evaluation for soil
                      fertility (Soil Report) and water accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
