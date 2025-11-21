"use client";

import Image from "next/image";

const ProjectsSectionTailwind = () => {
  const projects = [
    {
      id: 1,
      title: "Farmland",
      image: "/block.jpg", // Replace with your actual image path
      alt: "Queen Amina luxury residential towers",
    },
    {
      id: 2,
      title: "Residential Prototype",
      image: "/self.jpg", // Replace with your actual image path
      alt: "Leonardo luxury residential tower",
    },
    {
      id: 3,
      title: "Iron Root Farm",
      image: "/gate.jpg", // Replace with your actual image path
      alt: "Lucrezia luxury residential building",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white py-24 lg:py-32 overflow-hidden">
      {/* Optional background texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/map-texture.png')] bg-cover bg-center" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-8">
        <h2 className="text-red-600 text-center text-sm lg:text-base font-light tracking-[0.5em] mb-16 lg:mb-20">
          OUR PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-gray-800 text-xs lg:text-[13px] font-light tracking-[0.2em] lg:tracking-[0.3em] uppercase mt-6 text-center">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionTailwind;
