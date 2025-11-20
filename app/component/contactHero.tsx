"use client";
import React from "react";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 sm:px-5">
        {/* Contact Us Tag with Lines */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 md:w-12 h-[2px] bg-[#800517]"></div>
          <span className="text-[#800517] text-[14px] md:text-[13px] uppercase tracking-[3px] font-semibold">
            Contact Us
          </span>
          <div className="w-16 md:w-12 h-[2px] bg-[#800517]"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-[48px] md:text-[40px] sm:text-[32px] font-bold mb-8 text-center leading-tight">
          Let's Start a Conversation
        </h1>

        {/* Description */}
        <p className="text-white/90 text-[18px] md:text-[16px] sm:text-[14px] leading-[32px] md:leading-[28px] text-center max-w-[900px] mx-auto">
          Have questions about our properties? Want to schedule a site visit?
          Our team is ready to assist you in finding your perfect investment
          opportunity.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
