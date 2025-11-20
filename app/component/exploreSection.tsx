"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, Check, BedSingle } from "lucide-react";

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

const PropertyModal = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const properties = [
    {
      id: 1,
      title: "ADMIN BLOCK",
      location: "ABUJA",
      priceRange: "₦250,000 - ₦300,000",
      bedrooms: 3,
      type: "flat",
      image: "/block.jpg",
      amenities: [
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Italian Furnished Living room and Dining",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Private Chef with a Fully equipped kitchen",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Double Patio",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "DSTV / Netflix / Wi-Fi Service",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Premium security / 24-hour power supply",
        },
      ],
    },
    {
      id: 2,
      title: "Gate House",
      location: "Abuja",
      priceRange: "₦450,000 - ₦500,000",
      bedrooms: 5,
      type: "penthouse",
      image: "/gate.jpg",
      amenities: [
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Italian Furnished Living room and Dining",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Private Chef with a Fully equipped kitchen",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Double Patio",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "DSTV / Netflix / Wi-Fi Service",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Premium security / 24-hour power supply",
        },
      ],
    },
    {
      id: 3,
      title: "HALL",
      location: "ABUJA",
      priceRange: "₦350,000 - ₦400,000",
      bedrooms: 4,
      type: "flat",
      image: "/hall.jpg",
      amenities: [
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Italian Furnished Living room and Dining",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Private Chef with a Fully equipped kitchen",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Double Patio",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "DSTV / Netflix / Wi-Fi Service",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Premium security / 24-hour power supply",
        },
      ],
    },
    {
      id: 4,
      title: "SELFCON RESIDENCE",
      location: "ABUJA",
      priceRange: "₦500,000 - ₦550,000",
      bedrooms: 6,
      type: "duplex",
      image: "/selfcon.jpg",
      amenities: [
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Italian Furnished Living room and Dining",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Private Chef with a Fully equipped kitchen",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Double Patio",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "DSTV / Netflix / Wi-Fi Service",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Premium security / 24-hour power supply",
        },
      ],
    },
    {
      id: 5,
      title: "SUPERMARKET",
      location: "ABUJA",
      priceRange: "₦300,000 - ₦350,000",
      bedrooms: 4,
      type: "suite",
      image: "/supermarket.jpg",
      amenities: [
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Italian Furnished Living room and Dining",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Private Chef with a Fully equipped kitchen",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Double Patio",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "DSTV / Netflix / Wi-Fi Service",
        },
        {
          icon: <Check className="w-4 h-4 text-[#800517] mt-0.5" />,
          text: "Premium security / 24-hour power supply",
        },
      ],
    },
  ];

  const openModal = (property: Property) => {
    setSelectedProperty(property);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
    document.body.style.overflow = "unset"; // Restore scroll
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#800517] mb-4 tracking-tight">
            Important Estate Features
          </h5>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#800517] to-[#880000] mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our premium properties with world-class amenities
          </p>
        </div>
      </div>

      {/* Property Grid - Responsive Layout */}
      <div className="max-w-7xl mx-auto px-0">
        {/* Mobile: Single column */}
        {/* Tablet: 2 columns */}
        {/* Desktop: 2 top, 3 bottom */}

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          {/* Top Row - 2 Properties */}
          <div className="grid grid-cols-2">
            {properties.slice(0, 2).map((property, index) => (
              <div
                key={property.id}
                onClick={() => openModal(property)}
                className={`relative group cursor-pointer overflow-hidden h-[400px] ${
                  index === 0
                    ? "border-r border-b border-gray-300"
                    : "border-b border-gray-300"
                } hover:shadow-2xl transition-all duration-300`}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#800517]/90 via-black/50 to-transparent group-hover:from-[#800517]/95 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6 w-full max-w-md transform transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-px bg-white/50 mb-4"></div>
                    <h3 className="text-white text-xl lg:text-2xl font-light tracking-[0.25em] leading-tight">
                      {property.title}
                    </h3>
                    <div className="w-full h-px bg-white/50 mt-4"></div>
                    <p className="text-white/80 text-sm mt-3 tracking-wider">
                      Click to view details
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 Properties */}
          <div className="grid grid-cols-3">
            {properties.slice(2).map((property, index) => (
              <div
                key={property.id}
                onClick={() => openModal(property)}
                className={`relative group cursor-pointer overflow-hidden h-[350px] ${
                  index < 2 ? "border-r border-gray-300" : ""
                } hover:shadow-2xl transition-all duration-300`}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#800517]/90 via-black/50 to-transparent group-hover:from-[#800517]/95 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 w-full max-w-xs transform transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-px bg-white/50 mb-4"></div>
                    <h3 className="text-white text-lg lg:text-xl font-light tracking-[0.2em] leading-tight">
                      {property.title}
                    </h3>
                    <div className="w-full h-px bg-white/50 mt-4"></div>
                    <p className="text-white/80 text-xs mt-3 tracking-wider">
                      Click to view details
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-0">
            {properties.map((property, index) => (
              <div
                key={property.id}
                onClick={() => openModal(property)}
                className={`relative group cursor-pointer overflow-hidden h-[350px] ${
                  index % 2 === 0
                    ? "border-r border-b border-gray-300"
                    : "border-b border-gray-300"
                } hover:shadow-2xl transition-all duration-300`}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800517]/90 via-black/50 to-transparent group-hover:from-[#800517]/95 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 w-full transform transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-[1px] bg-white/50 mb-4"></div>
                    <h3 className="text-white text-lg md:text-xl font-light tracking-[0.2em] leading-tight">
                      {property.title}
                    </h3>
                    <div className="w-full h-[1px] bg-white/50 mt-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-0">
            {properties.map((property) => (
              <div
                key={property.id}
                onClick={() => openModal(property)}
                className="relative group cursor-pointer overflow-hidden h-[300px] border-b border-gray-300 active:opacity-90 transition-opacity"
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800517]/90 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6 w-full">
                    <div className="w-full h-[1px] bg-white/50 mb-4"></div>
                    <h3 className="text-white text-lg font-light tracking-[0.2em] leading-tight">
                      {property.title}
                    </h3>
                    <div className="w-full h-[1px] bg-white/50 mt-4"></div>
                    <p className="text-white/80 text-xs mt-3 tracking-wider">
                      Tap to view details
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#800517]">
                <button className="flex-1 bg-linear-to-r from-[#800517] to-[#880000] hover:from-[#6a0413] hover:to-[#700000] text-white py-3 px-4 rounded font-medium tracking-wider uppercase transition-all text-sm sm:text-base">
                  BOOK NOW
                </button>
                <button className="flex-1 bg-white hover:bg-red-50 text-[#800517] py-3 px-4 rounded font-medium tracking-wider uppercase transition-colors border-2 border-[#800517] text-sm sm:text-base">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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

export default PropertyModal;
