"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 flex-shrink-0"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.067l-1.254 4.587 4.68-1.233z" />
    </svg>
  );

  return (
    <footer className="bg-[#800517] text-white pt-12 pb-6 border-t border-red-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section: Grid Layout for better structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Column 1: Brand and Description (2 columns on mobile/tablet) */}
          <div className="md:col-span-2 lg:col-span-2 space-y-5 pr-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Moja RealEstate Logo"
                width={180}
                height={40}
              />
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
              **Building sustainable agricultural and residential communities**
              for the future. Join us in redefining modern living with resilient
              infrastructure and clear documentation.
            </p>
            {/* Social Icons moved to the Brand column for better grouping */}
            <div className="pt-4 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-white hover:text-[#800517] transition-all duration-300"
                  aria-label={`Follow us on ${
                    ["Facebook", "Instagram", "Twitter", "LinkedIn"][index]
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (New Column for structure) */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/farm-solution"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {/* MapPin - Aligned Start for multi-line text */}
              <li className="flex items-start gap-3 text-gray-200 text-sm">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Birgi Plaza, Wuye, Abuja Nigeria</span>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3 text-gray-200 text-sm">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <Link
                  href="tel:+2349168366266"
                  className="hover:text-white transition-colors"
                >
                  +234 916 836 6266
                </Link>
              </li>
              {/* Mail */}
              <li className="flex items-center gap-3 text-gray-200 text-sm">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <Link
                  href="mailto:mojaealestate1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  mojaealestate1@gmail.com
                </Link>
              </li>
              {/* WhatsApp */}
              <li className="flex items-center gap-3 text-gray-200 text-sm">
                <WhatsAppIcon />
                <a
                  href="https://wa.me/2349168366266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-red-800 my-8" />

        {/* Bottom Section: Copyright */}
        <div className="flex justify-center">
          <p className="text-gray-300 text-xs text-center">
            © {currentYear} **Moja Real Estate, Inc**. All rights reserved.
            <span className="md:inline-block hidden mx-2">|</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
