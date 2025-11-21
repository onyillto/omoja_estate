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

  return (
    // Changed to a red and white theme
    <footer className="bg-[#800517] text-white pt-12 pb-6 border-t border-red-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section */}
        {/* 2. Reduced bottom margin (mb-16 -> mb-10) */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-8 mb-10">
          {/* Column 1: Brand and Description (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {" "}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Moja RealEstate Logo"
                width={180}
                height={40}
              />
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed max-w-sm">
              Building sustainable agricultural and residential communities for
              the future. Join us in redefining modern living.
            </p>
          </div>

          {/* Column 2: Contact Info & Socials (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-5">
              {" "}
              {/* Reduced mb-6 to mb-5 */}
              Contact & Connect
            </h3>
            <ul className="space-y-3">
              {" "}
              {/* Adjusted space-y-4 to space-y-3 */}
              <li className="flex items-start gap-3 text-gray-200 text-sm">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span>
                  Moja Realestate, Kuje,
                  <br /> Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-200 text-sm">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <Link
                  href="tel:+2348001234567"
                  className="hover:text-gray-300 transition-colors"
                >
                  +234 800 123 4567
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-200 text-sm">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <Link
                  href="mailto:hello@mojaestate.com"
                  className="hover:text-white transition-colors"
                >
                  hello@mojaestate.com
                </Link>
              </li>
              {/* Social Icons integrated directly below contact links */}
              <li className="pt-4">
                <div className="flex items-center gap-3">
                  {" "}
                  {/* Reduced gap-4 to gap-3 */}
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
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Divider & Copyright */}
        {/* Reduced padding (pt-8 -> pt-6) */}
        <div className="pt-6 border-t border-red-900 flex justify-center">
          <p className="text-gray-300 text-sm text-center">
            © {currentYear} Moja Real Estate, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
