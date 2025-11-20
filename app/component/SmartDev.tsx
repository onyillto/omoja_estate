// components/SmartDevelopment.jsx
"use client";
import Image from "next/image";
import { Droplet, Shield, Leaf, PanelsTopLeft } from "lucide-react";

export default function SmartDevelopment() {
  const features = [
    {
      icon: <Droplet className="w-6 h-6 text-[#6a0413]" />,
      title: "Water Infrastructure",
      desc: "Boreholes for reliable water access and engineered drainage to manage runoff effectively",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#6a0413]" />,
      title: "Secure Fencing",
      desc: "Protection for both people and habitat with carefully planned boundary systems",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#6a0413]" />,
      title: "Resource Efficiency",
      desc: "Plots ready for sustainable use from day one with integrated infrastructure",
    },
    {
      icon: <PanelsTopLeft className="w-6 h-6 text-[#6a0413]" />,
      title: "Phased Development",
      desc: "Clear development guidance to help owners build responsibly without degrading resources",
    },
  ];

  return (
    <section className="w-full bg-[#6a0413] py-16 px-4 md:px-10 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-300 tracking-widest text-sm font-semibold mb-2">
            ─── SMART DEVELOPMENT
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Designing for People and the Planet
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            We design estates to be resource-efficient and resilient. On-farm
            infrastructure is integrated into project planning, and for
            residential sites, phased infrastructure handovers and clear
            development guidance help owners build responsibly.
          </p>

          {/* FEATURE CARDS */}
          <div className="flex flex-col gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-5 rounded-xl border border-red-200"
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1 text-[#6a0413]">
                    {item.title}
                  </h3>
                  <p className="text-[#6a0413] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/block.jpg" // replace with your real image path
            alt="Smart Development"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
