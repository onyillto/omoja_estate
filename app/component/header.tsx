"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroWithNav = () => {
  const [socialHover, setSocialHover] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Social Links */}
        <div
          className={`fixed z-10 bottom-3 right-3 flex justify-end items-end transition-all duration-200 ${
            socialHover ? "w-[105px] h-[105px]" : "w-10 h-10"
          }`}
          onMouseEnter={() => setSocialHover(true)}
          onMouseLeave={() => setSocialHover(false)}
        >
          <div className="absolute w-10 h-10 rounded-full flex justify-center items-center bg-black/20 backdrop-blur-[5px]"></div>

          <a
            href="https://www.rafaelalucas.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute w-10 h-10 rounded-full bg-black/20 backdrop-blur-[5px] flex justify-center items-center transition-all duration-300 ${
              socialHover
                ? "opacity-100 right-0 bottom-[calc(100%-40px)]"
                : "opacity-0 right-0 bottom-0"
            }`}
          >
            <span
              className="w-full h-full bg-center bg-no-repeat bg-[length:20px] opacity-90 hover:opacity-100 hover:bg-[length:65%] hover:bg-[#698fb7] rounded-full transition-all duration-200"
              style={{
                backgroundImage:
                  "url(https://rafaelavlucas.github.io/assets/codepen/link.svg)",
              }}
            ></span>
          </a>

          <a
            href="https://dribbble.com/rafaelalucas"
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute w-10 h-10 rounded-full bg-black/20 backdrop-blur-[5px] flex justify-center items-center transition-all ${
              socialHover
                ? "opacity-100 bottom-[45%] right-[45%] delay-150"
                : "opacity-0 right-0 bottom-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.64, 0.01, 0.07, 1.65)",
            }}
          >
            <span
              className="w-full h-full bg-center bg-no-repeat bg-[length:20px] opacity-90 hover:opacity-100 hover:bg-[length:65%] hover:bg-[#ea4c89] rounded-full transition-all duration-200"
              style={{
                backgroundImage:
                  "url(https://rafaelavlucas.github.io/assets/codepen/dribbble.svg)",
              }}
            ></span>
          </a>

          <a
            href="https://www.linkedin.com/in/rafaelalucas/"
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute w-10 h-10 rounded-full bg-black/20 backdrop-blur-[5px] flex justify-center items-center transition-all ${
              socialHover
                ? "opacity-100 bottom-0 right-[calc(100%-40px)] delay-[250ms]"
                : "opacity-0 right-0 bottom-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.64, 0.01, 0.07, 1.65)",
            }}
          >
            <span
              className="w-full h-full bg-center bg-no-repeat bg-[length:20px] opacity-90 hover:opacity-100 hover:bg-[length:65%] hover:bg-[#0077b5] rounded-full transition-all duration-200"
              style={{
                backgroundImage:
                  "url(https://rafaelavlucas.github.io/assets/codepen/linkedin.svg)",
              }}
            ></span>
          </a>

          <div
            className={`w-10 h-10 z-[9] bg-[length:50%] bg-no-repeat bg-[position:10px_7px] ${
              socialHover ? "opacity-100" : "opacity-90"
            } transition-all duration-1000 delay-200 absolute bottom-0 right-0`}
            style={{
              backgroundImage:
                "url(https://rafaelavlucas.github.io/assets/codepen/logo_white.svg)",
            }}
          ></div>
        </div>

        {/* Navigation */}

        {/* Hero Section */}
        <header className="w-full h-full relative px-10 md:px-10 sm:px-5 bg-gradient-to-b from-white to-red-50">
          <div className="max-w-[1110px] min-h-[600px] md:min-h-[500px] left-1/2 -translate-x-1/2 flex justify-between items-center relative">
            <article className="z-[1] bg-white/30 p-10 md:p-5 max-w-[620px] mt-[100px] md:mt-[90px] md:mb-10 w-[70%] backdrop-blur-[8px] relative animate-[text_0.8s_0.6s_ease_backwards] before:content-[''] before:absolute before:w-[5px] before:h-full before:bg-[#800517]/50 before:top-0 before:left-0 before:animate-[line_0.8s_0.6s_ease_backwards]">
              <p className="uppercase font-semibold tracking-[2px] mb-4 text-[#800517]">
                MOJA REAL ESTATE
              </p>
              <h2 className="uppercase font-bold tracking-[2px] mb-6 md:mb-4 text-[40px] md:text-[28px] text-[#800517]">
                Invest in Your Future
              </h2>
              <p className="tracking-[0.5px] text-base md:text-sm leading-[26px] text-gray-700">
                At Moja Real Estate, we specialize in premium properties and
                secure land investments. As your trusted partner, we guide you
                through every step of your real estate journey.
              </p>
              <p className="tracking-[0.5px] text-base md:text-sm leading-[26px] text-gray-700 mt-4">
                Whether you are looking for a family home, a commercial space,
                or a strategic land acquisition, our expert team is dedicated to
                helping you find the perfect match for your goals. Your journey
                to prosperity starts here.
              </p>
            </article>

            <figure className="right-0 max-w-[600px] w-[60%] md:w-[70%] h-[600px] md:h-[480px] translate-y-[100px] md:translate-y-[80px] md:right-[-6%] absolute overflow-hidden animate-[image_0.6s_0.2s_ease_backwards] before:content-[''] before:absolute before:w-full before:h-0 before:top-full before:bg-gradient-to-t before:from-white before:to-red-50 before:opacity-100 before:left-0 before:animate-[imageBefore_1s_0.2s_ease_backwards] after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:bg-gradient-to-t after:from-white after:to-red-50 after:opacity-20 after:left-0">
              <Image
                src="/hall-2.jpg"
                alt="Mountains"
                fill
                className="object-cover"
              />
            </figure>
          </div>
        </header>
      </div>

      <style jsx>{`
        @keyframes text {
          0% {
            opacity: 0;
            transform: translateX(200px);
          }
        }
        @keyframes line {
          0% {
            width: 100%;
            opacity: 0;
          }
        }
        @keyframes image {
          0% {
            opacity: 0;
            transform: translatey(200px);
          }
        }
        @keyframes imageBefore {
          0% {
            height: 100%;
            top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default HeroWithNav;
