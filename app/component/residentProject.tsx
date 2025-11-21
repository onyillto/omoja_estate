"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for project data for clarity and safety
interface ProjectData {
  name: string;
  tag: string;
  location: string;
  description: string;
  landArea: string;
  totalPlots: number;
  availablePlots: number;
  completion: string;
  plotSizes: string;
  priceRange: string;
  images: string[];
  amenities: string[];
  link: string;
}

const ProjectsIndex = () => {
  // --- Project Data Array ---
  const projects: ProjectData[] = [
    {
      name: "Cloud Maisonette",
      tag: "Residential Estate",
      location: "Kuje, Abuja, Nigeria",
      description:
        "Royal Protein Farms is an innovative mixed-use agricultural estate in Kuje, Abuja, a region zoned for farming under the Abuja Master Plan. It features curated layouts for crop cultivation and animal husbandry, ensuring operational efficiency and sustainable practices.",
      landArea: "25 Acres",
      totalPlots: 120,
      availablePlots: 87,
      completion: "2024",
      plotSizes: "700sqm, 1000sqm",
      priceRange: "₦5.5M - ₦6.0M",
      images: [
        "/self.jpg",
        "/gate.jpg",
        "/suparmaaket.jpg",
        "/hall.jpg",
        "/gate-2.jpg",
        "/self-2.jpg",
      ],
      amenities: [
        "Controlled access gate",
        "Solar street lights",
        "Borehole water",
        "Cabro paved roads",
        "Electric fence",
        "Shopping center (planned)",
        "Kids play area",
        "Jogging tracks",
        "Water drainage system",
      ],
      link: "/royal-protein-farms",
    },
    {
      name: "Iron Roots Estates", // New Project Name
      tag: "Residential & Commercial",
      location: "Phase III, FCT, Nigeria",
      description:
        "Iron Roots Estates is a premium residential and commercial development offering modern living spaces and strategic business plots. Located in the fast-developing Phase III of the FCT, it provides easy access to key city infrastructure.",
      landArea: "15 Acres",
      totalPlots: 80,
      availablePlots: 45,
      completion: "2025",
      plotSizes: "500sqm, 750sqm",
      priceRange: "₦8.0M - ₦12.5M",
      images: [
        "/self.jpg", // Use placeholder images; replace with actual paths
        "/gate.jpg",
        "/suparmaaket.jpg",
        "/hall.jpg",
        "/gate-2.jpg",
        "/self-2.jpg",
      ],
      amenities: [
        "24/7 Security",
        "Tarred Internal Roads",
        "Treated Water Supply",
        "Recreational Park",
        "Underground Drainage",
        "Fibre Optics Internet",
        "Gym & Spa (planned)",
      ],
      link: "/iron-roots-estates",
    },
  ];

  // --- Reusable Project Card Component ---
  const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => (
    <div className="bg-white p-8 md:p-6 rounded-3xl border border-gray-200 shadow-xl mb-16">
      {/* Project Header */}
      <div className="mb-12">
        <span className="text-red-500 text-[13px] uppercase tracking-[3px] font-medium mb-8 block">
          {project.tag}
        </span>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h2 className="text-gray-900 text-[36px] md:text-[32px] sm:text-[28px] font-bold mb-4">
              {project.name}
            </h2>
            <div className="flex items-center gap-2 text-red-500 mb-6">
              <svg
                className="w-5 h-5 text-red-600"
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
              <span className="text-[15px]">{project.location}</span>
            </div>
            <p className="text-gray-600 text-[15px] leading-[26px] max-w-[600px]">
              {project.description}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-gray-50 border border-red-200 rounded-lg p-5">
              <span className="text-red-500 text-[13px] uppercase tracking-[2px] block mb-2">
                Land Area
              </span>
              <span className="text-gray-900 text-[24px] font-bold">
                {project.landArea}
              </span>
            </div>
            <div className="bg-gray-50 border border-red-200 rounded-lg p-5">
              <span className="text-red-500 text-[13px] uppercase tracking-[2px] block mb-2">
                Total Plots
              </span>
              <span className="text-gray-900 text-[24px] font-bold">
                {project.totalPlots}
              </span>
            </div>
            <div className="bg-gray-50 border border-red-200 rounded-lg p-5">
              <span className="text-red-500 text-[13px] uppercase tracking-[2px] block mb-2">
                Available
              </span>
              <span className="text-gray-900 text-[24px] font-bold">
                {project.availablePlots} Plots
              </span>
            </div>
            <div className="bg-gray-50 border border-red-200 rounded-lg p-5">
              <span className="text-red-500 text-[13px] uppercase tracking-[2px] block mb-2">
                Completion
              </span>
              <span className="text-gray-900 text-[24px] font-bold">
                {project.completion}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-12">
        <div className="grid grid-cols-12 gap-4">
          {/* Large Image - uses project.images[0] */}
          <div className="col-span-12 lg:col-span-7 relative h-[500px] md:h-[400px] rounded-2xl overflow-hidden group">
            <Image
              src={project.images[0]}
              alt={`${project.name} Estate View 1`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Right Column - Two Images (Index 1 and 2) */}
          <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-4">
            <div className="relative h-[240px] lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src={project.images[1]}
                alt={`${project.name} Estate View 2`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative h-[240px] lg:h-full rounded-2xl overflow-hidden group">
              <Image
                src={project.images[2]}
                alt={`${project.name} Estate View 3`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Bottom Three Images (Index 3, 4, 5) */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.slice(3).map((img, index) => (
              <div
                key={index}
                className="relative h-[240px] md:h-[200px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${project.name} view ${index + 4}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Left Column - Plot Sizes & Price */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gray-50 border border-red-200 rounded-2xl p-8 md:p-6">
            <h3 className="text-gray-900 text-[18px] font-semibold mb-6">
              Plot Sizes
            </h3>
            <p className="text-gray-600 text-[15px]">{project.plotSizes}</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 md:p-6">
            <h3 className="text-gray-900 text-[18px] font-semibold mb-4">
              Price Range
            </h3>
            <p className="text-red-500 text-[24px] font-bold">
              {project.priceRange}
            </p>
          </div>
        </div>

        {/* Right Column - Amenities */}
        <div className="lg:col-span-7 bg-gray-50 border border-red-200 rounded-2xl p-8 md:p-6">
          <h3 className="text-gray-900 text-[18px] font-semibold mb-6">
            Estate Amenities & Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {project.amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 text-[15px]">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link
          href={project.link}
          className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-[15px] font-medium transition-all duration-300"
        >
          View {project.name} Details
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-white py-20 md:py-16">
      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Main Section Title */}
        <h1 className="text-gray-900 text-5xl font-extrabold text-center mb-16 md:mb-12">
          Featured Projects
        </h1>

        {/* Render Each Project */}
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard project={project} />
            {index < projects.length - 1 && (
              <hr className="border-t border-red-200 my-16 max-w-4xl mx-auto" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectsIndex;
