"use client";
import React from "react";

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#2d7a6e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "SDG Integration",
      description:
        "At Moja Realestate Ltd, sustainability is more than a goal, it's the way we build. Guided by the Sustainable Development Goals, we design communities that embody resilience and inclusivity. Our commitment to SDG 11 (Sustainable Cities and Communities) is reflected in how we plan, build and manage our estates, through green infrastructure and people-focused design.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#2d7a6e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Transparency",
      description:
        "We maintain clear pricing, ensure complete clarity through verified documentation, thorough title due diligence and precise transaction records. Each listing provides a clear breakdown of ownership, fees, and processes that empowers you to make informed decisions with confidence.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#2d7a6e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Expert Guidance & After Purchase Support",
      description:
        "You would enjoy comprehensive, end-to-end assistance that extends well beyond the point of purchase. From guided site inspections and complimentary legal documentation to development planning insights and structured post-purchase updates, we ensure a seamless ownership experience.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#2d7a6e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Verified Documentation",
      description:
        "Our team provides clear timelines, documentation support and connections to trusted professionals including contractors, consultants and agronomists, so you can move forward with clarity and confidence.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#2d7a6e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Community Focused",
      description:
        "We set clear standards, ensuring that every project strengthens both the environment and the communities we serve. Our developments foster genuine connections and lasting relationships.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 text-[#2d7a6e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Long-term Value",
      description:
        "Our sites are strategically selected in areas with high growth potential, ensuring that your investment appreciates in value while providing a superior quality of life for generations to come.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-16">
      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Header */}
        <div className="text-center mb-16 md:mb-12">
          <h2 className="text-gray-900 text-[32px] md:text-[28px] sm:text-[24px] font-semibold mb-4">
            What Sets Us Apart
          </h2>
          <div className="w-20 h-1 bg-[#2d7a6e] mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#d4f1ed] rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-[18px] md:text-[17px] font-semibold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[15px] md:text-[14px] leading-[26px] md:leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
