// app/page.tsx (or components/LandingPage.tsx if you prefer)
"use client"; // This component uses client-side interactivity like hover effects

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTA from "../component/PremiumCTASection"
import Plan from "../component/plan"
const LandingPage = () => {
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

        {/* Content */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="bg-[#2d7a6e] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 font-semibold">
            Kuje, Abuja
          </span>
          <h3 className="text-gray-200 text-sm md:text-base mb-3 tracking-wide uppercase font-medium">
            Why Choose Iron Roots Farms
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 px-4">
            Where productive land meets practical design — farm smarter, live
            better.
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            Iron Roots Farms is a purpose-built agricultural estate in Kuje,
            Abuja, created for people who want productive, resilient and
            well-managed land. Whether you&apos;re starting a commercial plot,
            expanding family farming, or building a long-term agricultural
            enterprise, Iron Roots gives you the infrastructure, security and
            community to grow with confidence.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
          </div>
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
            {/* Feature Card 1 */}
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
                Prime Location — Market Access Without the Commute
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Situated in Kuje – one of Abuja’s busiest food corridors – Iron
                Roots places your farm close to major buyers, wholesalers and
                transport links. Lower haulage time and logistics friction for
                your produce.
              </p>
            </div>

            {/* Feature Card 2 */}
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
                Thoughtful Layout For Real Farming Needs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plots are zoned for crop cultivation, livestock operations and
                residential oversight. Clear demarcation improves bioreactivity
                and day-to-day efficiency with integrated owner and worker
                housing.
              </p>
            </div>

            {/* Feature Card 3 */}
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
                Water Security That Supports Every Season
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dual boreholes (separate supplies for crops and livestock) plus
                supplementary wells keep irrigation steady, reduce concerns
                during dry spells, and protect livestock health across seasons.
              </p>
            </div>

            {/* Feature Card 4 */}
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
                Layered Security for Peace of Mind
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High perimeter fencing, gated entry, electric barbed wire and
                24/7 on-site security personnel. Optional CCTV and controlled
                access points provide an added layer of protection.
              </p>
            </div>

            {/* Feature Card 5 */}
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
                Practical Infrastructure That Reduces Wastage
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engineered drainage to prevent erosion and flooding, truck-ready
                internal roads and clear plot access. Infrastructure designed to
                make farming easier and more reliable.
              </p>
            </div>

            {/* Feature Card 6 */}
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
                Ready-Made Commercial Opportunities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Designated commercial plots for feed mill, veterinary clinic,
                rental storage units and multipurpose hall for training and
                aggregation services – creating a self-supporting ecosystem.
              </p>
            </div>

            {/* Feature Card 7 */}
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
                Straightforward Ownership and Transparent Paperwork
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full documentation including receipt, contract of sale, deed of
                assignment, surveyor/letter of allocation. Flexible payment
                plans and transparent sales process.
              </p>
            </div>

            {/* Feature Card 8 */}
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
                A Community That Grows With You
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A working neighborhood of farmers, service providers and support
                networks. Regular trainings, shared knowledge sessions and
                collaboration opportunities for all experience levels.
              </p>
            </div>

            {/* Feature Card 9 */}
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
                Sustainable, Future Ready Practices
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Efficient water use, erosion control, proper waste management
                and space for regenerative practices like crop rotations and
                agroforestry to protect soil fertility.
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

export default LandingPage;
