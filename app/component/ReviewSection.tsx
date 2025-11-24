"use client";
import React from "react";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  // Only one review is used for the specific UI you provided, as it's a single testimonial layout.
  // The other reviews are kept in the array but not directly rendered in this specific design.
  const reviews = [
    {
      id: 1,
      quote:
        "The private chef's unwavering commitment to hospitality left me feeling deeply touched and cared for. Every half hour, his gentle yet insistent voice would beckon me to indulge in the most sumptuous meal.",
      author: "Ms. Dima Ukiwe",
      role: "WEDDING PLANNER", // Updated role to match the screenshot
      rating: 3, // Updated rating to match the screenshot (3.5 stars, so 3 solid, 1 half-empty)
    },
    // The following reviews are not actively displayed in the single testimonial UI
    {
      id: 2,
      quote:
        "From our first inquiry to securing our plot, the Moja team made the entire process seamless and easy to navigate. They explained every document, walked us through the layout of the estate, and kept us updated without us having to chase anyone. The environment feels well planned and secure, and their after-sales support has been genuinely helpful. We’re excited to begin building in a place that already feels like home.",
      author: "The Adebayo Family",
      role: "Homeowners",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Working with Moja for our farmland project has been a refreshing experience. They carried out proper soil checks, water access assessments, and provided clear information on the estate’s agricultural layout. The land is well-structured and the team handled everything with transparency and professionalism. Their understanding of sustainable farming practices made the process smooth for us, and we’ve already started preparing the land confidently.",
      author: "Mr. & Mrs. Okoro",
      role: "Property Investors",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Securing farmland through Moja Realestate was straightforward from the start. They took the time to show me around, explain the terrain, and share practical details about access roads, drainage, and future expansion plans. What stood out most was how honest and responsive the team was throughout. The farmland has solid potential for long-term agricultural development, and I appreciate how the Moja staff supported me even after documentation was completed.",
      author: "Dr. Fatima Bello",
      role: "Agri-Investor",
      rating: 5,
    },
  ];

  const currentReview = reviews[0]; // Displaying only the first review for this specific UI

  return (
    <section className="bg-white text-[#800517] py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
      <div className="max-w-4xl text-center">
        {/* Section Heading */}
        <p className="text-sm tracking-[0.3em] font-light uppercase mb-16 text-gray-500">
          REVIEWS
        </p>

        {/* Quote Icon */}
        <div className="mb-8">
          <span className="text-9xl font-serif text-[#800517]/10 leading-none">
            &ldquo;
          </span>
        </div>

        {/* Review Quote */}
        <p className="font-serif italic text-3xl md:text-4xl leading-relaxed text-gray-800 mb-8">
          {currentReview.quote}
        </p>

        {/* Quote Icon - Closing */}
        <div className="mb-12">
          <span className="text-9xl font-serif text-[#800517]/10 leading-none">
            &rdquo;
          </span>
        </div>

        {/* Author and Role */}
        <h4 className="text-lg font-light tracking-wider uppercase text-gray-700 mb-2">
          {currentReview.author}
        </h4>
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-8">
          {currentReview.role}
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(currentReview.rating)
                  ? "text-[#FFD700] fill-[#FFD700]" // Gold for filled stars
                  : i === Math.floor(currentReview.rating) &&
                    currentReview.rating % 1 !== 0
                  ? "text-[#FFD700] fill-current opacity-50" // Half-filled star
                  : "text-gray-300" // Empty stars
              }`}
              strokeWidth={1} // Thinner stroke for stars
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
