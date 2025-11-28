import React from "react";
import Navbar from "../component/navbar";
// Assuming CardComponent is located in the component directory
import FarmHeader from "../component/farmCom";
import FarmProjectsSection from "../component/residentProjects";
import ProjectTwo from "../component/ProjectTwo";
import FarmExtension from "../component/farmExtension";
const residentialPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for the fixed navbar height */}
      <main className="pt-20">
        <FarmHeader />

        <ProjectTwo />
        <FarmProjectsSection />
        <FarmExtension />
      </main>
    </div>
  );
};

export default residentialPage;
