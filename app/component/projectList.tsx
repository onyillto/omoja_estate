"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Check,
  Expand,
  Layers,
  Calendar,
} from "lucide-react";

// --- Define a type for our project structure for better type safety ---
type ProjectType = {
  id: number;
  subtitle: string;
  title: string;
  location: string;
  description: string;
  // NOTE: 'price' field has been removed as requested
  stats: {
    area: string;
    plots: string;
    available: string;
    completion: string;
  };
  amenities: string[];
  images: string[];
};

// --- MOCK DATA: Removed 'price' field ---
const projects: ProjectType[] = [
  {
    id: 1,
    subtitle: "Project 01: Agricultural Project",
    title: "Iron Roots Farm",
    location: "chibiri, kuje, FCT Nigeria", // Changed location
    description:
      "Iron Roots Farms is an innovative mixed-use agricultural estate in Kuje, Abuja, a region zoned for farming under the Abuja Master Plan. It features curated layouts for crop cultivation and animal husbandry, ensuring operational efficiency and sustainable practices.", // Updated description
    // price: "₦ 40M - 85M", // Removed
    stats: {
      area: "5 Acres",
      plots: "20 Plots",
      available: "3 Plots",
      completion: "Ready",
    },
    amenities: [
      "Commercial Zoning Approval",
      "Sewer Line Connected",
      "Street Lighting",
      "Dual Carriage Access",
    ],
    images: ["/gate.jpg", "/self.jpg", "/gate-3.jpg"],
  },
  {
    id: 2,
    subtitle: "Project 02: Agricultural Project",
    title: "Royal Protein Farms",
    location: "Kuje, Abuja, Nigeria", // Changed location
    description:
      "A specialized mixed-use estate designed for large-scale agricultural investment and protein production (poultry, fishery, livestock). Situated in the Kuje farming zone, this project offers large plots with dedicated water and storage facilities.", // Updated description
    // price: "₦ 6.5M - 18M", // Removed
    stats: {
      area: "50 Acres",
      plots: "80 Plots",
      available: "12 Plots",
      completion: "2025",
    },
    amenities: [
      "Perimeter Fencing",
      "Borehole Water Access",
      "Dedicated Farm Zones",
      "Gated Entry",
    ],
    images: ["/farm.jpg", "/farming.jpg", "/farm-road.jpg"],
  },
  {
    id: 3,
    subtitle: "Project 03: Residential",
    title: "THE CLOUDS Maisonettes",
    location: " Aco, ariport road, Abuja, Nigeria", // Changed location
    description:
      "A premium residential development featuring contemporary three and four-bedroom maisonettes. Located in the fast-developing Lugbe area, THE CLOUDS offers secure, modern living with excellent infrastructure for families seeking a luxurious suburban lifestyle.", // Updated description
    // price: "₦ 15.5M - 35M", // Removed
    stats: {
      area: "15 Acres",
      plots: "120 Units",
      available: "87 Plots",
      completion: "2026",
    },
    amenities: [
      "24/7 Security & CCTV",
      "Interlocked Roads",
      "Central Water Supply",
      "Underground Power",
    ],
    images: ["/cloud-two.jpg", "/interior.jpg", "/interior-two.jpg"],
  },
  {
    id: 4,
    subtitle: "Project 04: Residential",
    title: "La-Familia",
    location: "Guzape, Abuja, Nigeria",
    description:
      "An exclusive community offering luxury 5-bedroom duplexes with private gardens. La-Familia is designed for modern families who value comfort, security, and a connection to nature, all within a prime urban location.",
    stats: {
      area: "20 Acres",
      plots: "50 Units",
      available: "35 Plots",
      completion: "2026",
    },
    amenities: [
      "Gated Community & 24/7 Security",
      "Recreational Parks & Green Areas",
      "Paved Roads & Streetlights",
      "Modern Drainage System",
    ],
    images: [
      "/residential-new-1.jpg",
      "/residential-new-2.jpg",
      "/residential-new-3.jpg",
    ],
  },
  {
    id: 5,
    subtitle: "Project 04: Agricultural Project",
    title: "Iron Roots Farm Extension",
    location: "Chibiri Kuje, FCT Abuja Nigeria",
    description:
      "Farm Extensions is an innovative mixed-use agricultural estate in Kuje, Abuja, a region zoned for farming under the Abuja Master Plan. It features curated layouts for crop cultivation and animal husbandry, ensuring operational efficiency and sustainable practices.",
    stats: {
      area: "20 Acres",
      plots: "50 Units",
      available: "35 Plots",
      completion: "2026",
    },
   amenities: [
  "Fenced Farmland with Secure Gate",
  "Irrigation & Water Supply System",
  "Fruit Trees & Vegetable Garden Areas",
  "Dedicated Livestock Pens & Housing",
  "Solar-Powered Borehole",
  "Farm-to-Market Access Roads",
  "Storage Barn & Tool Shed",
  "Farm Workers’ Quarters",
]
,
    images: [
      "/extension-one.jpg",
      "/extension-two.jpg",
      "/extension-three.jpg",
    ],
  },
];

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

  // Placeholder WhatsApp link (Nigerian format: 234 + 10 digits)
  const whatsappNumber = "2348012345678";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20your%20${project.title}%20project%20at%20${project.location}.%20Can%20you%20send%20me%20the%20details%20and%20pricing%3F`;

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
          {/* <StatBox
            icon={<Layers className="w-4 h-4" />}
            label="Plots"
            value={project.stats.plots}
          /> */}
          {/* <StatBox
            icon={<Check className="w-4 h-4" />}
            label="Available"
            value={project.stats.available}
            active
          /> */}
          <StatBox
            icon={<Calendar className="w-4 h-4" />}
            label="Ready"
            value={project.stats.completion}
          />
        </div>

        {/* Amenities & Price/CTA - UPDATED SECTION */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 uppercase mb-4">
              Key Amenities
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.amenities.map((amenity, i) => (
                <span
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
            {/* Removed Price Block */}
            <div>
              <span className="block text-sm text-gray-500 mb-1">
                Interested in this project?
              </span>
              <span className="block text-xl font-semibold text-gray-900 tracking-tight">
                Request Details & Pricing
              </span>
            </div>

            {/*  */}
            {/* New WhatsApp Button */}
            {/* {whatsappLink} */}
            <Link href="/contact" target="_blank" rel="noopener noreferrer">
              <span className="group inline-flex items-center gap-3 bg-[#800517] hover:bg-[#6a0413] text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-[1.03] shadow-lg whitespace-nowrap">
                {/* Using an icon that implies contact/forwarding */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.35 4.96L2 22l5.35-1.42c1.45.79 3.08 1.21 4.69 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm3.36 14.4c-.18.3-.43.43-.9.66-.46.24-2.14.9-2.45.97-.3.08-.63.12-.96.12-.34 0-.58-.12-.8-.37-.22-.24-.84-.89-.84-1.74 0-.85.58-1.52.66-1.63.07-.11.16-.27.35-.49.18-.21.23-.37.35-.55.12-.17.06-.33-.03-.49-.09-.17-.9-.98-1.24-1.34-.33-.37-.7-.3-.49-.52.2-.21.46-.5.66-.74.2-.24.4-.2.53-.2.12 0 .26.03.4.03.14 0 .42-.17.65-.49.23-.3.8-.75 1.05-.98.25-.24.41-.16.52-.16.12 0 .52.01.7.4.18.37.52 1.08.58 1.17.07.09.12.19.06.32-.06.12-.19.3-.4.51-.21.2-.42.4-.59.56-.16.17-.37.33-.23.57.14.23.63 1.01 1.09 1.48.46.47.81.65 1.03.74.22.09.35.07.49-.03.14-.1.43-.16.74-.35.3-.19.98-.6 1.13-.8.15-.2.28-.27.42-.27.14 0 .93.44 1.16.55.23.1.4.2.46.3.06.09.06.6.06.67-.02.08-.22.51-.38.74-.17.23-.36.42-.62.63l-.1.08z" />
                </svg>
                Contact Us 
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the stats boxes (remains unchanged)
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
