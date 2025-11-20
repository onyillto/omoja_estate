"use client";
import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Home,
  Sprout,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Outlook of the RealEstates",
      name: "NAME AVAILABLE SOON!!",
      description:
        "Luxury residential realestates with modern amenities and world-class infrastructure",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      icon: <Home className="w-6 h-6" />,
      status: "Coming Soon",
      accent: "from-rose-500 to-pink-600",
      stats: { units: "200+", area: "500 Acres" },
    },
    {
      id: 2,
      title: "Outlook of the Farmland",
      name: "IRON ROOTS FARMS",
      description:
        "Sustainable agricultural realestates with fertile land and modern farming facilities",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      icon: <Sprout className="w-6 h-6" />,
      status: "Available",
      accent: "from-emerald-500 to-green-600",
      stats: { units: "120 Plots", area: "25 Acres" },
    },
    {
      id: 3,
      title: "Outlook of the Residential Properties",
      name: "NAME AVAILABLE SOON!!",
      description:
        "Premium residential properties designed for comfortable modern living",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      icon: <MapPin className="w-6 h-6" />,
      status: "Coming Soon",
      accent: "from-blue-500 to-indigo-600",
      stats: { units: "500+", area: "300 Acres" },
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-[#800517]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-tr from-[#800517]/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#800517 1px, transparent 1px), linear-gradient(90deg, #800517 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#800517] to-transparent rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${15 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles className="w-5 h-5 text-[#800517] animate-pulse" />
            <span className="text-sm font-bold text-[#800517] uppercase tracking-[0.2em] bg-gradient-to-r from-[#800517] to-[#a00617] bg-clip-text text-transparent">
              Our Portfolio
            </span>
            <Sparkles className="w-5 h-5 text-[#800517] animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-[#800517] to-gray-900 bg-clip-text text-transparent mb-6">
            Our Projects
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#800517] to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Premium Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#800517]/20 to-[#800517]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Premium Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div
                    className={`relative px-4 py-1.5 rounded-full backdrop-blur-md ${
                      project.status === "Available"
                        ? "bg-gradient-to-r from-emerald-500/90 to-green-600/90"
                        : "bg-gradient-to-r from-[#800517]/90 to-[#a00617]/90"
                    } text-white text-xs font-bold uppercase tracking-wider shadow-lg`}
                  >
                    <span className="relative z-10">{project.status}</span>
                    {project.status === "Available" && (
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Image Container with Gradient Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 border border-white/20">
                      <p className="text-white/70 text-xs">Units</p>
                      <p className="text-white font-bold">
                        {project.stats.units}
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 border border-white/20">
                      <p className="text-white/70 text-xs">Area</p>
                      <p className="text-white font-bold">
                        {project.stats.area}
                      </p>
                    </div>
                  </div>

                  {/* Premium Icon */}
                  <div
                    className={`absolute top-6 left-6 w-12 h-12 bg-linear-to-br ${project.accent} rounded-2xl flex items-center justify-center text-white shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform`}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Title Section */}
                  <div className="mb-6">
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">
                      {project.title}
                    </p>
                    <h3 className="text-2xl font-bold bg-linear-to-r from-[#800517] to-[#a00617] bg-clip-text text-transparent">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Premium CTA Button */}
                  <button className="relative w-full group/btn overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-[#800517] to-[#a00617] rounded-2xl"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-[#a00617] to-[#800517] rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative px-6 py-4 flex items-center justify-center gap-3">
                      <span className="text-white font-semibold uppercase tracking-wider text-sm">
                        View Details
                      </span>
                      <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">
              Building Tomorrow&apos;s Communities Today
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(20px) scale(1.1);
          }
          66% {
            transform: translateY(20px) translateX(-10px) scale(0.9);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;
