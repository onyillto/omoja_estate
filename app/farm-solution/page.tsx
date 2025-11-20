import React from "react";
import Navbar from "../component/navbar";
// Assuming CardComponent is located in the component directory
import FarmHero from "../component/farm-hero"
import WhyChooseSection from "../component/WhyChooseUs";
import ResidentialComp from "../component/ResidentialComponent"
import OurUse from "../component/ourUSE";
import Feature from "../component/ironFeature"
import Plan from "../component/plan"
const FarmSolutionPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for the fixed navbar height */}
      <main className="pt-20">
        < FarmHero />
        
        <WhyChooseSection />
        < Feature />
        < Plan />
       < ResidentialComp /> 
       < OurUse />
      </main>
    </div>
  );
};

export default FarmSolutionPage;
