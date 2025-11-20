"use client";
import React from "react";
import Image from "next/image";

const CardsComponent = () => {
  const cards = [
    {
      id: 1,
      title: "Flex",
      text: "This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.",
      image: "/admin-1.jpg",
    },
    {
      id: 2,
      title: "Flex Grow",
      text: "This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.",
      image: "/hall-2.jpg",
    },
    {
      id: 3,
      title: "Flex Shrink",
      text: "This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.",
      image: "/selfcon.jpg",
    },
    {
      id: 4,
      title: "Flex Basis",
      text: "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means 'look at my width or height property.'",
      image: "/hall.jpg",
    },
    {
      id: 5,
      title: "Flex Basis",
      text: "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means 'look at my width or height property.'",
      image: "/hall.jpg",
    },
    {
      id: 6,
      title: "Flex Basis",
      text: "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means 'look at my width or height property.'",
      image: "/hall.jpg",
    },
  ];

  return (
    <ul className="flex flex-wrap list-none m-0 p-0">
      {cards.map((card) => (
        <li key={card.id} className="flex p-4 w-full md:w-1/2 lg:w-1/3 ">
          <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden flex-1 hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
            <div className="relative bg-center bg-no-repeat bg-cover rounded-t overflow-hidden before:content-[''] before:block before:pt-[56.25%] md:before:pt-[66.6%]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="text-[#800517] text-lg font-semibold tracking-wide uppercase mb-2">
                {card.title}
              </div>
              <p className="flex-1 text-sm leading-6 text-gray-600 mb-5">
                {card.text}
              </p>
              {/* <button className="block w-full bg-[#800517] text-white py-2.5 px-4 rounded-md font-medium uppercase tracking-wider hover:bg-[#6a0413] transition-colors text-sm">
                Learn More
              </button> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardsComponent;
