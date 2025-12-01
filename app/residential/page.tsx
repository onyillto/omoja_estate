import React from "react";
import Navbar from "../component/navbar";
// Assuming CardComponent is located in the component directory
import ResidentHeader from "../component/farmheader";
// import ResidentialProjectsSection from "../component/residentProjects";
import ProjectTwo from "../component/residentProject";
import ProjectThree from "../component/Familia";
const residentialPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for the fixed navbar height */}
      <main className="pt-20">
        <ResidentHeader />
        {/* <ResidentialProjectsSection /> */}
        < ProjectTwo />
        < ProjectThree />
      </main>
    </div>
  );
};

export default residentialPage;
