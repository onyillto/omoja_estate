"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = {
  name: string;
  route: string;
  children?: NavItem[];
};

const SimpleNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", route: "/" },
    {
      name: "Why  Iron Roots Farm",
      route: "/why-iron-farm",
    },
    { name: "Residential Estate", route: "/residential" },
    { name: "Farm Estates", route: "/farm-estates" },
    {
      name: "Company",
      route: "/company",
      children: [
        {
          name: "Why Moja Realestate",
          route: "/company/why-choose-moja-realestate",
        },
        { name: "Projects", route: "/company/projects" },
        { name: "Sustainability", route: "/company/sustainability" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Moja Real Estate"
              width={180}
              height={60}
              className="h-12 md:h-16 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.route;
              return (
                <div
                  key={item.name}
                  className="relative group py-7" // Added padding to create a hover area
                >
                  {item.children ? (
                    <button className="text-gray-700 group-hover:text-[#800517] text-sm font-medium flex items-center gap-1 transition-colors">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.route}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#800517]"
                          : "text-gray-700 hover:text-[#800517]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 hidden group-hover:block">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.route}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-[#800517] transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#800517] hover:bg-[#6a0413] text-white rounded-md text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#800517] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.route;
              return item.children ? (
                <div key={item.name} className="space-y-1">
                  <div className="text-gray-700 font-medium py-3 px-4">
                    {item.name}
                  </div>
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.route}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-2.5 px-4 text-sm rounded-md transition-colors ${
                          pathname === child.route
                            ? "text-[#800517] bg-red-50"
                            : "text-gray-700 hover:bg-red-50 hover:text-[#800517]"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.route}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#800517] bg-red-50"
                      : "text-gray-700 hover:bg-red-50 hover:text-[#800517]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 px-6 bg-[#800517] hover:bg-[#6a0413] text-white rounded-md text-sm font-medium text-center transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SimpleNavbar;
