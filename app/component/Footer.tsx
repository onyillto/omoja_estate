"use client";
import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "News & Blog", href: "/blog" },
    ],
    resources: [
      { name: "Project Portfolio", href: "/projects" },
      { name: "Pricing Plans", href: "/pricing" },
      { name: "FAQs", href: "/faq" },
      { name: "Contact Support", href: "/contact" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Newsletter (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#800517] rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">M</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Moja<span className="text-red-500">Estate</span>.
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building sustainable agricultural and residential communities for
              the future. Join us in redefining modern living.
            </p>

            {/* Newsletter Input */}
            <div className="pt-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 border border-gray-700 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
                <button className="bg-[#800517] hover:bg-[#6a0413] text-white p-3 rounded-lg transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Links (Span 2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-red-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-red-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>
                  123 Iron Roots Ave, Agricultural District,
                  <br /> Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>hello@mojaestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Moja Real Estate, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-slate-400 hover:bg-[#800517] hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links (Mobile only usually, or inline) */}
          <div className="flex gap-6 md:hidden">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
