import React from "react";
import Navbar from "../../component/navbar";
// Assuming CardComponent is located in the component directory
import ResidentHeader from "../../component/projectHeader";
import ResidentialProjectsSection from "../../component/residentProjects";
import ProjectTwo from "../../component/projectList";
const projectPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for the fixed navbar height */}
      <main className="pt-20">
        <ResidentHeader />
        
        <ProjectTwo />
      </main>
    </div>
  );
};

export default projectPage;
