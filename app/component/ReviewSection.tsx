"use client";
import React from "react";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      quote:
        "The process of acquiring our plot of land with moja Estate was seamless from start to finish. Their team was professional, transparent, and guided us every step of the way. We're thrilled to start building our dream home!",
      author: "The Adebayo Family",
      role: "Homeowners",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "We were looking for more than just a house; we wanted a community. moja Estate delivered exactly that. The attention to detail in their residential prototype and the vision for the community is outstanding. It's the perfect place for our family to grow.",
      author: "Mr. & Mrs. Okoro",
      role: "Property Investors",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Investing in farmland with moja Estate has been a wise decision. Their commitment to sustainable development and agriculture is impressive. The entire process was handled with utmost integrity. A truly trustworthy real estate partner.",
      author: "Dr. Fatima Bello",
      role: "Agri-Investor",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#800517]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#800517]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#800517]/10 to-[#880000]/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#800517] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#800517]">
              What Our Guests Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guest{" "}
            <span className="bg-gradient-to-r from-[#800517] via-[#880000] to-[#800000] bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#800517] to-[#880000] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our delighted guests about their unforgettable
            experiences. Your story could be next.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative group"
            >
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#800517] to-[#880000] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>

              {/* Quote */}
              <div className="relative mb-6">
                <blockquote className="text-gray-700 text-lg leading-relaxed italic before:absolute before:left-0 before:-top-2 before:text-6xl before:text-[#800517]/20 before:font-serif before:quote">
                  &ldquo;
                </blockquote>
                <p className="mb-4 pl-8">{review.quote}</p>
                <blockquote className="text-gray-700 text-lg leading-relaxed italic after:absolute after:right-0 after:-bottom-2 after:text-6xl after:text-[#800517]/20 after:font-serif after:rotate-180 after:content-['\201D']">
                  &rdquo;
                </blockquote>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-[#800517] fill-[#800517]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900">{review.author}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#800517] to-[#880000] hover:from-[#880000] hover:to-[#800000] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto">
            <span>Share Your Story</span>
            <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ReviewsSection;
