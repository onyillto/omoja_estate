"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Shield,
  Leaf,
  TrendingUp,
  ChevronRight,
  Check,
  Home,
  Trees,
  Sun,
  Zap,
} from "lucide-react";

const SmartDevelopmentEnhanced = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Infrastructure",
      description:
        "Boreholes for reliable water access and engineered drainage to manage runoff effectively",
      image:
        "https://i.pinimg.com/1200x/0f/b1/a7/0fb1a786bc80327b8c90789ee35b6930.jpg",
      stats: { value: "10,000L", label: "Daily Capacity" },
      benefits: [
        "Self-sufficient water supply",
        "Smart irrigation systems",
        "Rainwater harvesting",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Fencing",
      description:
        "Protection for both people and habitat with carefully planned boundary systems",
      image:
        "https://i.pinimg.com/1200x/56/94/3a/56943ae85b39b9a615e8eb20c29e51bd.jpg",
      stats: { value: "24/7", label: "Security Monitoring" },
      benefits: [
        "Perimeter security",
        "Access control systems",
        "Wildlife protection zones",
      ],
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Resource Efficiency",
      description:
        "Plots ready for sustainable use from day one with integrated infrastructure",
      image:
        "https://i.pinimg.com/1200x/5a/dd/52/5add52c003e75c00775a8a47d107abcf.jpg",
      stats: { value: "90%", label: "Energy Efficient" },
      benefits: [
        "Solar power ready",
        "Waste management",
        "Green building materials",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Phased Development",
      description:
        "Clear development guidance to help owners build responsibly without degrading resources",
      image:
        "https://i.pinimg.com/736x/7e/5e/ec/7e5eec83f6488b35f865e0b91b776b69.jpg",
      stats: { value: "5 Years", label: "Development Plan" },
      benefits: [
        "Structured growth",
        "Environmental protection",
        "Community development",
      ],
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#800517]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          id="hero"
          className={`container mx-auto px-4 pt-20 pb-12 transition-all duration-1000 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-[#800517]" />
              <span className="text-[#800517] font-semibold text-sm uppercase tracking-wider">
                Smart Development
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Designing for People
              <span className="block text-[#800517] mt-2">and the Planet</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We design estates to be resource-efficient and resilient. On-farm
              infrastructure is integrated into project planning, and for
              residential sites, phased infrastructure handovers and clear
              development guidance help owners build responsibly.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: <Sun />, value: "100%", label: "Solar Ready" },
                { icon: <Droplets />, value: "Zero", label: "Water Waste" },
                { icon: <Trees />, value: "500+", label: "Trees Planted" },
                { icon: <Zap />, value: "A+", label: "Energy Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
                >
                  <div className="text-[#800517] mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Features Section */}
        <div
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          id="features"
          className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
            isVisible.features
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feature Tabs */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Key Infrastructure Features
              </h2>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-[#800517] text-white shadow-xl transform scale-105"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                          activeFeature === index
                            ? "bg-white/20"
                            : "bg-[#800517]/10 text-[#800517]"
                        }`}
                      >
                        {feature.icon}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            activeFeature === index
                              ? "text-white/90"
                              : "text-gray-700"
                          }`}
                        >
                          {feature.description}
                        </p>

                        {activeFeature === index && (
                          <div className="mt-4 space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <Check className="w-4 h-4 text-white/80" />
                                <span className="text-sm text-white/80">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          activeFeature === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Display */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                  <Image
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-[#800517]">
                            {features[activeFeature].stats.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {features[activeFeature].stats.label}
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-[#800517] text-white rounded-lg hover:bg-[#600310] transition-colors text-sm font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 justify-center mt-4">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeFeature === index
                          ? "w-8 bg-[#800517]"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          id="cta"
          className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-linear-to-r from-[#800517] to-red-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                }}
              ></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Build Sustainably?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Discover how our smart development approach can transform your
                vision into reality while protecting our environment for future
                generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-[#800517] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/residential"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDevelopmentEnhanced;
