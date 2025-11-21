"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  Check,
  Expand,
  Layers,
  Calendar,
} from "lucide-react";

// --- MOCK DATA: Easily add more projects here ---
const projects = [
  {
    id: 1,
    subtitle: "Project 01",
    title: "THE CLOUDS Maisonettes",
    location: "Abuja, Nigeria",
    description:
      "A premium gated community located in the serene Karen area. Moja Gardens Estate offers modern living with excellent connectivity to the CBD. The estate features well-planned plots with ready titles and is ideal for families seeking a peaceful suburban lifestyle.",
    price: "NGA 4.5M - 12M",
    stats: {
      area: "25 Acres",
      plots: "120 Units",
      available: "87 Plots",
      completion: "2024",
    },
    amenities: [
      "24/7 Security & CCTV",
      "Tarmac Roads",
      "Central Water Supply",
      "Underground Power",
    ],
    images: ["/gate.jpg", "/gate-2.jpg", "/gate-3.jpg"],
  },
  {
    id: 2,
    subtitle: "Project 02",
    title: "Royal Protein Farms",
    location: "Kiambu, Nairobi",
    description:
      "Nestled in the lush greenery of Kiambu, Highland Springs is designed for those who appreciate nature without compromising on luxury. This project features larger plot sizes perfect for country homes and agricultural hobbies.",
    price: "NGA 6.5M - 18M",
    stats: {
      area: "50 Acres",
      plots: "80 Units",
      available: "12 Plots",
      completion: "2025",
    },
    amenities: [
      "Clubhouse & Gym",
      "Jogging Tracks",
      "Organic Farm Zones",
      "Fiber Internet",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-e32cb518753e?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
  },
  {
    id: 3,
    subtitle: "Project 03",
    title: "The Onyx Residency",
    location: "Kilimani, Nairobi",
    description:
      "A high-density residential development offering smart-plots for vertical construction. Perfect for developers looking to build apartments or mixed-use commercial centers in the heart of the city.",
    price: "NGA 25M - 40M",
    stats: {
      area: "5 Acres",
      plots: "20 Units",
      available: "3 Plots",
      completion: "Ready",
    },
    amenities: [
      "Commercial Zoning",
      "Sewer Line Connected",
      "Street Lighting",
      "Dual Carriage Access",
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    ],
  },
];

// --- Define a type for our project structure for better type safety ---
type ProjectType = {
  id: number;
  subtitle: string;
  title: string;
  location: string;
  description: string;
  price: string;
  stats: {
    area: string;
    plots: string;
    available: string;
    completion: string;
  };
  amenities: string[];
  images: string[];
};
const ProjectShowcase = () => {
  return (
    <section className="w-full bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-[#800517] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Our Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Developments
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover our collection of meticulously planned estates. Each
            project is selected for its strategic location, growth potential,
            and community value.
          </p>
        </div>

        {/* Loop through projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <SingleProjectItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component for Individual Project ---
const SingleProjectItem = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  // This determines if the layout is swapped (Left vs Right)
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* 1. Image Gallery Side */}
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          {/* Main Large Image */}
          <div className="col-span-2 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* Floating Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-[#800517] uppercase tracking-wide">
                Selling Now
              </span>
            </div>
          </div>

          {/* Two Smaller Thumbnails */}
          {project.images.slice(1, 3).map((img: string, i: number) => (
            <div
              key={i}
              className="relative h-[180px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={img}
                alt="Gallery thumbnail"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Info Details Side */}
      <div className="w-full lg:w-1/2">
        <div className="mb-8">
          <span className="text-green-600 font-mono text-sm font-bold tracking-widest uppercase block mb-2">
            {project.subtitle}{" "}
            {/* Keep as is, or change if subtitle color is also themed */}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {project.title}
          </h2>
          <div className="flex items-center gap-2 text-gray-500 mb-6">
            <MapPin className="w-5 h-5 text-[#800517]" />
            <span className="text-lg font-medium">{project.location}</span>
          </div>
          <p className="text-gray-600 leading-loose text-base md:text-lg border-l-4 border-red-100 pl-6">
            {project.description}
          </p>
        </div>

        {/* Stats Grid - The "Finner" Box Look */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatBox
            icon={<Expand className="w-4 h-4" />}
            label="Area"
            value={project.stats.area}
          />
          <StatBox
            icon={<Layers className="w-4 h-4" />}
            label="Plots"
            value={project.stats.plots}
          />
          <StatBox
            icon={<Check className="w-4 h-4" />}
            label="Available"
            value={project.stats.available}
            active
          />
          <StatBox
            icon={<Calendar className="w-4 h-4" />}
            label="Ready"
            value={project.stats.completion}
          />
        </div>

        {/* Amenities & Price */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 uppercase mb-4">
              Key Amenities
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.amenities.map((amenity, i) => (
                <span // amenity was implicitly any
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-gray-800 text-sm border border-red-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-gray-100">
            <div>
              <span className="block text-sm text-gray-500 mb-1">
                Starting From
              </span>
              <span className="block text-3xl font-bold text-[#800517] tracking-tight">
                {project.price}
              </span>
            </div>
            <button className="group px-8 py-3 bg-[#800517] text-white rounded-xl font-semibold shadow-lg hover:bg-[#6a0413] transition-all duration-300 flex items-center gap-2">
              View Full Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the stats boxes
interface StatBoxProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  active?: boolean; // Made optional
}

const StatBox = ({ label, value, icon, active }: StatBoxProps) => (
  <div
    className={`p-4 rounded-2xl border transition-colors duration-300 ${
      active
        ? "bg-red-50 border-red-200"
        : "bg-white border-gray-100 hover:border-red-200"
    }`}
  >
    <div
      className={`flex items-center gap-2 mb-2 ${
        active ? "text-[#800517]" : "text-gray-400"
      }`}
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">
        {label}
      </span>
    </div>
    <div
      className={`text-lg font-bold ${
        active ? "text-[#6a0413]" : "text-gray-900"
      }`}
    >
      {value}
    </div>
  </div>
);

export default ProjectShowcase;
