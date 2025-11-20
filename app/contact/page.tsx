import React from "react";
import Navbar from "../component/navbar";
// Assuming CardComponent is located in the component directory
import ResidentHeader from "../component/contactHero";
import ContactSection from "../component/contactSection";
const contactPage = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for the fixed navbar height */}
      <main className="pt-20">
        <ResidentHeader />
        <ContactSection />

      </main>
    </div>
  );
};

export default contactPage;