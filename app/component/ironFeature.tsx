"use client";
import React from "react";
import {
  ShieldCheck,
  Lock,
  MapPin,
  Droplets,
  Waves,
  Factory,
  Home,
  Stethoscope,
  Users,
  Sprout,
} from "lucide-react";

const features = [
  {
    title: "The Perimeter Fence",
    icon: <ShieldCheck className="w-6 h-6" />,
    description:
      "Designed to fully enclose the farm estate, providing comprehensive protection against unauthorized access. The high-grade fencing safeguards crops, livestock, and equipment while accommodating large trucks.",
  },
  {
    title: "Advanced Security",
    icon: <Lock className="w-6 h-6" />,
    description:
      "Security is our paramount feature. We protect assets and business continuity through comprehensive measures.",
    list: [
      "Robust Physical Barriers",
      "Advanced Surveillance Systems",
      "Strict Access Control Protocols",
    ],
  },
  {
    title: "Gate House",
    icon: <MapPin className="w-6 h-6" />,
    description:
      "Strategically located at the main entrance, the Gate House functions as a controlled access checkpoint, ensuring only authorized personnel and vehicles enter the premises.",
  },
  {
    title: "Clean Water Supply",
    icon: <Droplets className="w-6 h-6" />,
    description:
      "We have implemented a comprehensive water independence strategy ensuring uninterrupted irrigation and biosecurity.",
    list: [
      "Dual-Borehole System (Crops & Livestock)",
      "Supplementary Well Infrastructure",
      "Elimination of External Water Dependencies",
    ],
  },
  {
    title: "Drainage System",
    icon: <Waves className="w-6 h-6" />,
    description:
      "Designed to manage water flow, prevent flooding during heavy rainfall, and maintain optimal land conditions across all operational areas.",
  },
  {
    title: "Feed Mill",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Exclusive land zoned for a feed mill to service Iron Farms and neighbors. A prime position with built-in demand from the estate and surrounding agricultural hub.",
  },
  {
    title: "Rental Apartments",
    icon: <Home className="w-6 h-6" />,
    description:
      "Flexible weekly, monthly, or annual housing for farmers and workforce. Eliminates frequent commuting and ensures seamless access during peak management periods.",
  },
  {
    title: "Veterinary Clinic",
    icon: <Stethoscope className="w-6 h-6" />,
    description:
      "A reserved plot for a veterinary clinic. This facility will service the estate and surrounding farms, offering instant market access with guaranteed demand.",
  },
  {
    title: "General Hall",
    icon: <Users className="w-6 h-6" />,
    description:
      "An educational hub and collaborative space. This versatile facility hosts farmer meetings and training, immersing stakeholders in a model of modern agriculture.",
  },
  {
    title: "Purpose-Driven Greenery",
    icon: <Sprout className="w-6 h-6" />,
    description:
      "Landscaping designed for more than aesthetics. Our greenery stabilizes soil, improves ventilation, and promotes healthier crops, balancing security with environmental management.",
  },
];

const IronFarmFeatures = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-red-100/50 blur-3xl"></div>
        <div className="absolute top-[20%] right-[0%] w-[30%] h-[30%] rounded-full bg-red-50/50 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[#800517] text-sm font-semibold mb-4">
            Infrastructure & Amenities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Built for <span className="text-[#800517]">Growth</span> &
            Efficiency
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Iron Roots Farms is the premier destination for sustainable
            agriculture in Abuja. We integrate robust infrastructure to ensure
            smart agricultural practices for both aspiring farmers and industry
            veterans.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-red-200 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-[#800517] group-hover:bg-[#800517] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#800517] transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Conditional Rendering for Lists */}
                {feature.list && (
                  <ul className="space-y-2 mt-4">
                    {feature.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-[#800517] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IronFarmFeatures;
