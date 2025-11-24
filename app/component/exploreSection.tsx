"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Check, BedSingle, ArrowLeft, ArrowRight } from "lucide-react";

// --- Type Definitions (UNCHANGED) ---
type Amenity = {
  icon: React.ReactNode;
  text: string;
};

type Property = {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  bedrooms: number;
  type: string;
  image: string;
  amenities: Amenity[];
};

// --- Property Data (UNCHANGED) ---
const initialProperties: Property[] = [
  {
    id: 1,
    title: "Royal Protein Farms",
    location: "Wuse",
    priceRange: "₦300,000 - ₦350,000",
    bedrooms: 3,
    type: "semi-detached exclusive home",
    image: "/free.jpg",
    amenities: [
      {
        icon: <BedSingle className="w-4 h-4 text-gray-800" />,
        text: "Luxuriously furnished 3 bedroom",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Mini Automation (Curtains)",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Seasoned Private Chef/Fully equipped kitchen",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Wi-Fi/NETFLIX/DSTV.",
      },
    ],
  },
  {
    id: 2,
    title: "THE CLOUDS Maisonettes",
    location: "Wuse",
    priceRange: "₦300,000 - ₦350,000",
    bedrooms: 3,
    type: "semi-detached exclusive home",
    image: "/gate.jpg",
    amenities: [
      {
        icon: <BedSingle className="w-4 h-4 text-gray-800" />,
        text: "Luxuriously furnished 3 bedroom",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Mini Automation (Curtains)",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Seasoned Private Chef/Fully equipped kitchen",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Wi-Fi/NETFLIX/DSTV.",
      },
    ],
  },
  {
    id: 3,
    title: "MAYBOURNE",
    location: "Wuse",
    priceRange: "₦450,000 - ₦500,000",
    bedrooms: 5,
    type: "penthouse",
    image: "/hall.jpg",
    amenities: [
      {
        icon: <BedSingle className="w-4 h-4 text-gray-800" />,
        text: "Luxuriously furnished 5 bedroom",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Smart Home Features",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Private Chef/Equipped kitchen",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Premium Entertainment Package",
      },
    ],
  },
  {
    id: 4,
    title: "MACDONAL",
    location: "Wuse",
    priceRange: "₦500,000 - ₦550,000",
    bedrooms: 6,
    type: "duplex",
    image: "/selfcon.jpg",
    amenities: [
      {
        icon: <BedSingle className="w-4 h-4 text-gray-800" />,
        text: "Luxuriously furnished 6 bedroom",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Home Theatre System",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Full Staff Quarters",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "24/7 Concierge Service",
      },
    ],
  },
  {
    id: 5,
    title: "Iron Farm RealEstate",
    location: "Wuse",
    priceRange: "₦300,000 - ₦350,000",
    bedrooms: 4,
    type: "suite",
    image: "/supermarket.jpg",
    amenities: [
      {
        icon: <BedSingle className="w-4 h-4 text-gray-800" />,
        text: "Luxuriously furnished 4 bedroom",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Double Patio",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Premium security",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "24-hour power supply",
      },
    ],
  },
  {
    id: 6,
    title: "ADMIN BLOCK",
    location: "Wuse",
    priceRange: "₦250,000 - ₦300,000",
    bedrooms: 3,
    type: "flat",
    image: "/fine.jpg",
    amenities: [
      {
        icon: <BedSingle className="w-4 h-4 text-gray-800" />,
        text: "Italian Furnished Living room",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Private Chef with kitchen",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "DSTV / Netflix / Wi-Fi Service",
      },
      {
        icon: <Check className="w-4 h-4 text-gray-800" />,
        text: "Premium security / 24-hour power",
      },
    ],
  },
];

const PropertyCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const totalSlides = initialProperties.length;
  const currentProperty = initialProperties[currentSlideIndex - 1];

  const scrollToSlide = useCallback((index: number) => {
    if (scrollRef.current) {
      const scrollPosition = (index - 1) * scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentSlideIndex(index);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, offsetWidth } = scrollRef.current;
        const closestIndex = Math.round(scrollLeft / offsetWidth);
        if (closestIndex + 1 !== currentSlideIndex) {
          setCurrentSlideIndex(closestIndex + 1);
        }
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, [currentSlideIndex]);

  const nextSlide = () => {
    const newIndex = (currentSlideIndex % totalSlides) + 1;
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentSlideIndex === 1 ? totalSlides : currentSlideIndex - 1;
    scrollToSlide(newIndex);
  };

  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
    document.body.style.overflow = "unset";
  };

  const getNeighborTitle = (offset: number) => {
    const index = (currentSlideIndex - 1 + offset + totalSlides) % totalSlides;
    return initialProperties[index]?.title || "";
  };

  // --- JSX Structure ---
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Full-screen Background - Dynamic Background Image (UNCHANGED) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${currentProperty.image})`,
          backgroundAttachment: "fixed",
          filter: "blur(4px) brightness(0.7)",
          transform: "scale(1.05)",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content / Slider Area */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center py-10">
        {/* Top Header (UNCHANGED) */}
        <h5 className="text-white text-lg tracking-[0.3em] font-light mb-12 uppercase">
          BOOK AN APARTMENT
        </h5>

        {/* The Slider Container - Horizontal Scroll with Snap */}
        <div
          ref={scrollRef}
          // Adjusted height to better fit the minimal card content
          className="w-full h-[500px] flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        >
          {initialProperties.map((property, index) => {
            const isCentral = index + 1 === currentSlideIndex;

            return (
              <div
                key={property.id}
                id={`slide-${property.id}`}
                className="flex-shrink-0 w-full snap-center flex justify-center items-center p-4 md:p-8 relative"
              >
                {/* Side Titles (UNCHANGED) */}
                {isCentral && (
                  <>
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70 text-2xl font-light tracking-widest uppercase origin-right -rotate-90 whitespace-nowrap hidden lg:block">
                      {getNeighborTitle(-1)}
                    </div>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70 text-2xl font-light tracking-widest uppercase origin-left rotate-90 whitespace-nowrap hidden lg:block">
                      {getNeighborTitle(1)}
                    </div>
                  </>
                )}

                {/* Central Modal-like Card (MODIFIED) */}
                <div
                  className={`bg-white shadow-2xl overflow-hidden flex flex-col justify-between p-0 max-w-sm w-full transition-all duration-300 ${
                    isCentral
                      ? "scale-100 h-full max-h-[400px] md:max-h-[500px]" // Set max height for the minimal card
                      : "scale-[0.8] opacity-0 h-[0] pointer-events-none"
                  }`}
                >
                  {/* Property Header/Title Area (UNCHANGED) */}
                  <div className="flex flex-col flex-grow">
                    <div className="text-center pt-8 pb-3">
                      <h2 className="text-xl font-light tracking-[0.2em] text-gray-800 uppercase">
                        {property.title}
                      </h2>
                      <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                        - {property.location} -
                      </p>
                    </div>

                    {/* Main Image from Property */}
                    <div
                      className="relative w-full h-48 md:h-64 overflow-hidden lg:cursor-pointer" // Increased height slightly
                      onClick={() => openModal(property)}
                    >
                      <Image
                        priority={isCentral}
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* --- REMOVED: Price and Short Description & Amenities List --- */}
                  </div>

                  {/* Action Buttons (Desktop Card Footer) */}
                  <div className="flex w-full border-t border-gray-200">
                    <button
                      onClick={() => openModal(property)}
                      className="flex-1 bg-white text-black py-4 px-2 font-bold tracking-wider uppercase text-sm border-l border-gray-200 hover:bg-red-50 hover:text-[#800517] transition-colors"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation & Counter (UNCHANGED) */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prevSlide}
            className="text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous property"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <span className="text-white text-lg font-light tracking-widest">
            {currentSlideIndex} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            className="text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next property"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* --- Modal for full details (UNCHANGED - but now contains all the text) --- */}
      {showModal && selectedProperty && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white border-4 border-[#800517] max-w-md w-full shadow-2xl relative animate-slideIn my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-white hover:bg-red-50 rounded-full transition-colors border-2 border-[#800517] shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#800517]" />
            </button>

            {/* Property Image */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b-4 border-[#800517]">
              <Image
                src={selectedProperty.image}
                alt={selectedProperty.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Property Details */}
            <div className="p-6 sm:p-8 space-y-5">
              {/* Title */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-[#800517] mb-2 uppercase">
                  {selectedProperty.title}
                </h2>
                <p className="text-xs tracking-[0.2em] text-gray-600 uppercase">
                  - {selectedProperty.location} -
                </p>
                <p className="text-base sm:text-lg font-medium text-gray-800 mt-3">
                  {selectedProperty.priceRange} / Night
                </p>
              </div>

              {/* Bedroom Info */}
              <div className="flex items-center justify-center gap-2 py-3 border-t border-b border-[#800517]">
                <BedSingle className="w-5 h-5 text-[#800517]" />
                <p className="text-sm sm:text-base font-medium text-[#800517] uppercase tracking-wide">
                  {selectedProperty.bedrooms} Bedroom {selectedProperty.type}
                </p>
              </div>

              {/* Amenities */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Amenities
                </h4>
                {selectedProperty.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5">{amenity.icon}</span>
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">
                      {amenity.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons (Modal Footer) */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#800517]">
                <button
                  onClick={closeModal} // This button could be a 'Contact Agent' button instead of 'View Details'
                  className="flex-1 bg-[#800517] text-white py-3 px-4 rounded font-medium tracking-wider uppercase transition-colors hover:bg-red-900 text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Custom scrollbar hiding for cleaner look */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /* Animation for modal */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PropertyCarousel;
