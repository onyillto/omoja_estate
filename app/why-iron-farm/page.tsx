// app/page.tsx (or components/LandingPage.tsx if you prefer)
"use client"; // This component uses client-side interactivity like hover effects

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTA from "../component/PremiumCTASection";
import Plan from "../component/plan";

const WhyChooseIronFarmPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Section 1: Hero Section (Image 1) */}
      <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-br from-green-900 to-green-700">
        {/* Background Image with Overlay */}
        <Image
          src="https://i.pinimg.com/736x/2d/6a/92/2d6a92c4237a724bc5585c1d34850392.jpg" // Replace with your actual image path for Image 1
          alt="Green agricultural field from above"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0 opacity-50" // Adjust opacity as needed
        />

        {/* Content - UPDATED HERO COPY */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="bg-[#2d7a6e] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 font-semibold">
            Kuje, Abuja
          </span>
          <h3 className="text-gray-200 text-sm md:text-base mb-3 tracking-wide uppercase font-medium">
            Why Choose Iron Roots Farms
          </h3>
          {/* H1 - NEW COPY */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 px-4">
            Where fertile land meets purposeful design, farm smarter and grow
            stronger.
          </h1>
          {/* P - NEW COPY */}
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            Iron Roots Farms is a thoughtfully planned agricultural estate in
            Kuje, Abuja, built for individuals and businesses who value
            productivity, resilience and long-term land stewardship. Whether
            you’re launching a commercial venture, expanding a family farm or
            establishing a sustainable agricultural enterprise, Iron Roots
            provides the infrastructure, security and supportive ecosystem you
            need to cultivate with confidence.
          </p>

          {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/get-started">
              <span className="bg-[#2d7a6e] hover:bg-[#236d61] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 cursor-pointer text-lg">
                Get Started
              </span>
            </Link>
            <Link href="/learn-more">
              <span className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300 cursor-pointer text-lg">
                Learn More
              </span>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Section 2: Features Grid (Image 2) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gray-600 text-center text-sm md:text-base uppercase tracking-wide mb-3 font-medium">
            What Makes Iron Roots Different
          </h2>
          <p className="text-gray-800 text-center text-2xl md:text-3xl font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed to support productive, resilient and
            profitable farming
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1: Prime Location - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Prime Location: Direct Access to Markets Without the Long Haul
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Located in Kuje, one of Abuja’s most active agricultural and
                food distribution hubs, Iron Roots positions your farm within
                immediate reach of major buyers, wholesalers and transport
                routes. The result is faster off-take, reduced haulage time and
                smoother logistics for your produce. You enjoy the convenience
                of nearby markets and internal estate market while maintaining
                the land quality, space and conditions essential for strong,
                consistent yields.
              </p>
            </div>

            {/* Feature Card 2: Thoughtful Layout - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                A Layout Engineered for Real Agricultural Performance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Iron Roots is designed by people who understand the rhythm and
                requirements of farming. Plots are intentionally zoned for crop
                cultivation, livestock farming and residential oversight,
                ensuring each function complements rather than competes with the
                other. Defined separation between planting zones and animal
                areas enhances biosecurity and overall farm efficiency.
                Integrated housing for owners and workers to support consistent,
                hands on management every single day.
              </p>
            </div>

            {/* Feature Card 3: Water Security - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h1M3 12H2M15.325 5.675l.707-.707L20.243 8.757l-.707.707M3.757 20.243l.707.707L8.757 20.243l-.707-.707M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Water Security Engineered for Year-Round Productivity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable water is the foundation of sustainable agriculture and
                Iron Roots is built with that in mind. The estate features 5
                boreholes with independent lines for crops and livestock powered
                by both electricity and solar to reduce reliance on external
                supply. This layered water system ensures consistent irrigation,
                minimizes dry season crop stress and safeguards livestock
                health. The result is operational continuity and stable output
                across all seasons.
              </p>
            </div>

            {/* Feature Card 4: Layered Security - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.24l-2.83-2.83a1.5 1.5 0 00-2.122 0L6 10.05a1.5 1.5 0 00-.439 1.118l-.293 2.656a1 1 0 001.242 1.242l2.656-.293a1.5 1.5 0 001.118-.439L19.878 9.06a1.5 1.5 0 000-2.122z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Layered Security Designed for True Peace of Mind
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Security at Iron Roots is built into the estate from the ground
                up: high perimeter fencing, gated entry, electric barbed wire,
                and 24/7 on-site personnel create a strong first line of
                protection. Optional CCTV and controlled access points add
                enhanced oversight for those who want it. And with an active
                community of resident and working farmers, the estate remains
                secure because it is lived in, monitored and engaged every
                single day.
              </p>
            </div>

            {/* Feature Card 5: Practical Infrastructure - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.105-.28.214-.565.334-.858a.75.75 0 011.233-.038c.394.57.668 1.13.868 1.638 1.188 2.924 1.832 5.378 1.832 7.842 0 5.429-3.418 9.25-7.13 9.25-3.712 0-7.13-3.821-7.13-9.25 0-2.464.644-4.918 1.832-7.842a.75.75 0 011.233-.038c.12.293.229.578.334.858M12 21c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Practical Infrastructure That Removes Friction, Not Adds to It
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Iron Roots is built with the realities of farming in mind.
                Engineered drainage systems prevent erosion and flooding, while
                truck-ready internal roads ensure smooth movement of equipment
                and produce. Every plot has clear boundaries and defined access
                points to support mechanised planting, harvesting and transport.
                The result is an estate where infrastructure reduces operational
                stress, saves time and protects your bottom line.
              </p>
            </div>

            {/* Feature Card 6: Commercial Opportunities - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Built-in Commercial Opportunities That Strengthen Your
                Operations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Iron Roots incorporates designated commercial plots for
                essential agribusiness services including a feed mill,
                veterinary clinic, rental storage units, farm produce
                supermarket and a multipurpose hall for training and value
                addition activities. These service hubs create a self sustaining
                agricultural ecosystem where suppliers, specialists and traders
                are within reach. This is to reduce operating costs, faster
                access to support and a smoother, more efficient farming
                experience.
              </p>
            </div>

            {/* Feature Card 7: Ownership and Paperwork - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Simple Ownership, Transparent Documentation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acquiring land at Iron Roots is designed to be seamless. Every
                buyer receives complete documentation including receipt, letter
                of acknowledgement, contract of sale, deed of assignment, survey
                and letter of allocation. With flexible payment plans and a
                fully transparent sales process, you know exactly what you’re
                purchasing and how to begin developing your plot from day one.
              </p>
            </div>

            {/* Feature Card 8: Community - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h-5m-5 0H7m0 0v-6a3 3 0 013-3h2a3 3 0 013 3v6m-9-2h4m-4 0v-4m4 4v-4m-4 0a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                A Community Designed to Grow With You
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Iron Roots is more than a collection of plots, it’s a
                functional, collaborative farming neighbourhood. With knowledge
                sharing sessions and a multipurpose hall dedicated to capacity
                building, meetings and place to foster the educational side of
                agriculture, the estate fosters continuous learning and
                practical skills transfer. Both new and experienced farmers
                benefit from a community that shares resources, supports one
                another and collectively drives better farming outcomes.
              </p>
            </div>

            {/* Feature Card 9: Sustainability - UPDATED COPY */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-[#2d7a6e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainable and Future Ready Practices Built Into Its Planning
                From Day One
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Iron Roots is planned with long term land health at its core.
                Efficient water systems, erosion control measures, pest control
                and responsible waste management create a stable foundation,
                while dedicated space for regenerative practices such as crop
                rotation and agroforestry helps maintain soil structure and
                fertility. These integrated systems keep yields strong across
                seasons and ensure your land remains productive for decades to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Plan />
      {/* Section 3: Call to Action with Background Images (Image 3) */}
      <CTA />
    </div>
  );
};

export default WhyChooseIronFarmPage;
