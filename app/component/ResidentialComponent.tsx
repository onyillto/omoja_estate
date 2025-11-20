"use client";
import React from "react";
import Image from "next/image";
import { Home, MapPin, ShieldCheck, Star } from "lucide-react";

const ResidentialProjectsSection = () => {
  return (
    <section className="relative w-full bg-gray-50 py-24 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Side: Visuals --- */}
          <div className="relative group">
            {/* Backing Pattern */}
            <div className="absolute -left-4 -top-4 w-full h-full border-2 border-gray-200 rounded-[2.5rem] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Main Image */}
            <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/hall-2.jpg" // Ensure this image exists in public folder
                alt="Modern Residential Estate"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

              {/* Floating Feature Card (Glassmorphism) */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#800517] rounded-xl text-white shadow-lg shadow-red-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg">
                      Prime Locations
                    </h4>
                    <p className="text-sm text-gray-600">
                      High growth potential & excellent urban connectivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side: Content --- */}
          <div className="lg:pl-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#800517] text-xs font-bold uppercase tracking-wider mb-6">
              <Home className="w-3 h-3" /> Residential Living
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Designed for Life, <br />
              <span className="text-[#800517]">Built for the Future.</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Our Residential RealEstates are designed as secure, serene, and
                modern communities, created for discerning homeowners seeking
                quality of life and long-term value. We focus on crafting{" "}
                <span className="text-gray-900 font-medium">
                  future-ready environments
                </span>{" "}
                that perfectly blend comfort, aesthetics, and sustainability.
              </p>

              <p>
                Each estate is masterfully planned to feature defined,
                well-organized plots, integrated with essential modern
                infrastructure and curated amenities to foster a genuine sense
                of community. We incorporate accessible communal facilities,
                ensuring a tranquil and safe living environment.
              </p>

              <p>
                Our sites are strategically selected in areas with high growth
                potential, guaranteeing that our residential developments are
                not just places to live, but are secure, functional, and
                environmentally harmonious spaces that appreciate in value.
              </p>
            </div>

            {/* Key Highlights Grid */}
            <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Curated Amenities
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Designed for community bonding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#800517] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Secure Environment
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Peace of mind guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialProjectsSection;
