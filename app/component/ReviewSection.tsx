"use client";
import React, { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react"; // Added navigation icons

const reviews = [
  {
    id: 1,
    quote:
      "From our first inquiry to securing our plot, the Moja team made the entire process seamless and easy to navigate. They explained every document, walked us through the layout of the estate, and kept us updated without us having to chase anyone. The environment feels well planned and secure, and their after-sales support has been genuinely helpful. We’re excited to begin building in a place that already feels like home.",
    author: "Ms. Dima Ukiwe",
    role: "WEDDING PLANNER",
    rating: 3,
  },
  {
    id: 2,
    quote:
      "Working with Moja for our farmland project has been a refreshing experience. They carried out proper soil checks, water access assessments, and provided clear information on the estate’s agricultural layout. The land is well-structured and the team handled everything with transparency and professionalism. Their understanding of sustainable farming practices made the process smooth for us, and we’ve already started preparing the land confidently.",
    author: "The Adebayo Family",
    role: "Homeowners",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Securing farmland through Moja Realestate was straightforward from the start. They took the time to show me around, explain the terrain, and share practical details about access roads, drainage, and future expansion plans. What stood out most was how honest and responsive the team was throughout. The farmland has solid potential for long-term agricultural development, and I appreciate how the Moja staff supported me even after documentation was completed.",
    author: "Mr. & Mrs. Okoro",
    role: "Property Investors",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const currentReview = reviews[currentReviewIndex];

  // --- Automatic Sliding Logic ---
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideTimer);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  // ---------------------------------

  return (
    <section className="bg-white text-[#800517] py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative">
      <div className="max-w-4xl text-center w-full relative">
        {/* Section Heading */}
        <p className="text-sm tracking-[0.3em] font-light uppercase mb-6 text-gray-500">
          REVIEWS
        </p>

        {/* Testimonial Content with Slide Transition */}
        {/* The key forces React to remount the component, triggering the custom CSS animation */}
        <div key={currentReview.id} className="review-slide-transition">
          {/* Quote Icon */}
          <div className="mb-2">
            <span className="text-7xl font-serif text-[#800517]/10 leading-none">
              &ldquo;
            </span>
          </div>

          {/* Review Quote */}
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-gray-800 mb-4">
            {currentReview.quote}
          </p>

          {/* Quote Icon - Closing */}
          <div className="mb-6">
            <span className="text-7xl font-serif text-[#800517]/10 leading-none">
              &rdquo;
            </span>
          </div>

          {/* Author and Role */}
          <h4 className="text-base font-light tracking-wider uppercase text-gray-700 mb-1">
            {currentReview.author}
          </h4>
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
            {currentReview.role}
          </p>

          {/* Rating Stars */}
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(currentReview.rating)
                    ? "text-[#FFD700] fill-[#FFD700]"
                    : i === Math.floor(currentReview.rating) &&
                      currentReview.rating % 1 !== 0
                    ? "text-[#FFD700] fill-current opacity-50"
                    : "text-gray-300"
                }`}
                strokeWidth={1}
              />
            ))}
          </div>
        </div>

        {/* Manual Navigation Arrows */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block w-full pointer-events-none">
          <div className="flex justify-between max-w-4xl mx-auto px-4">
            <button
              onClick={prevReview}
              className="p-3 text-gray-600 hover:text-[#800517] pointer-events-auto transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 text-gray-600 hover:text-[#800517] pointer-events-auto transition-colors"
              aria-label="Next review"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots/Indicators (Optional, but helpful for context) */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReviewIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentReviewIndex
                  ? "bg-[#800517] w-3 h-3"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Custom Keyframes for a Slide/Fade Transition */
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(10%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Apply the animation to the div when its key changes */
        .review-slide-transition {
          animation: slideIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
