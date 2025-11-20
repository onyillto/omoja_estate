import React from "react";
import Navbar from "../../component/navbar";
// Assuming CardComponent is located in the component directory
import ResidentHeader from "../../component/sustainability";
import ResidentialProjectsSection from "../../component/methology";
import Smart from "../../component/SmartDev";
import SustainDev from "../../component/sustainDev";
const residentialPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for the fixed navbar height */}
      <main className="pt-20">
        <ResidentHeader />
        <ResidentialProjectsSection />
        <Smart />
        <SustainDev />
      </main>
    </div>
  );
};

export default residentialPage;
