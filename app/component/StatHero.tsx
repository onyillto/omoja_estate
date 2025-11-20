"use client";
import React from "react";

const StatsHero = () => {
  const stats = [
    {
      number: "1,500",
      label: "Clients are satisfied using our services",
    },
    {
      number: "12",
      label: "Years of professional experience",
    },
    {
      number: "30",
      label: "Property consultant and agents",
    },
    {
      number: "80",
      label: "More than developer options available",
    },
  ];

  return (
    <section className="relative py-20 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
          alt="Property background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#800517] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">
              Our Performance
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stat <span className="text-[#800517]">Info</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#800517] to-[#880000] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-baseline gap-2">
                  {stat.number}
                  <span className="text-[#800517] text-4xl">+</span>
                </div>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your preferred safe and reliable property{" "}
              <span className="text-[#800517]">solution</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice is untrammelled and when
              nothing prevents our being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsHero;
