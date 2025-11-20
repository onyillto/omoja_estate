"use client";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ShieldCheck } from "lucide-react";

const FAQSection = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What type of ownership do I get upon purchase?",
      answer: (
        <p className="text-gray-600 leading-relaxed">
          When you purchase a unit at Iron Roots Farms, you gain{" "}
          <strong className="text-gray-900">Complete Ownership</strong>. You are
          free to conduct your farming activities without restrictions.
          Additionally, flexibility is key: if you are not ready to farm
          immediately, you have the liberty to rent out your land to other
          farmers on a monthly or annual basis, ensuring your asset remains
          productive.
        </p>
      ),
    },
    {
      question: "How are the farming zones organized?",
      answer: (
        <p className="text-gray-600 leading-relaxed">
          To ensure optimal hygiene and operational efficiency, the farm is
          zoned strategically. Units designated for{" "}
          <strong className="text-gray-900">Animal Husbandry</strong> and those
          for <strong className="text-gray-900">Crop Farming</strong> are
          situated in separate areas. This separation minimizes
          cross-contamination risks and streamlines logistical operations for
          all farmers.
        </p>
      ),
    },
    {
      question: "What plot sizes are available?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>Our standard farming plots are available in two primary sizes:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-900 font-medium">
            <li>700 SQM</li>
            <li>1000 SQM</li>
          </ul>
          <div className="bg-red-50 p-4 rounded-lg border border-red-100 mt-4">
            <h4 className="text-sm font-bold text-red-800 uppercase mb-2">
              Specialized Infrastructure Opportunities
            </h4>
            <p className="text-sm text-red-700">
              We have designated plots for a <strong>Feed Mill</strong> and a{" "}
              <strong>Veterinary Clinic</strong>. These facilities will not be
              built by us; rather, they are available for interested investors
              to acquire, develop, and operate. This provides a guaranteed
              market servicing the entire Iron Roots estate and neighboring
              farms.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: "How secure is the farm estate?",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Security was our primary objective. We conducted intensive due
            diligence, consulted with agriculturists, and gathered historical
            operational data from neighboring farms (who reported zero
            incidents). Beyond that, we integrated robust measures:
          </p>
          <ul className="grid gap-3 mt-4">
            <SecurityItem text="Collaborative Community: Farmers look out for each other, preventing isolation." />
            <SecurityItem text="High Perimeter Fence & Gate House for controlled access." />
            <SecurityItem text="Electric Barbed Wires to prevent unauthorized entry." />
            <SecurityItem text="24/7 Security Guards for real-time monitoring." />
            <SecurityItem text="Strict Construction Standards prioritizing safety & quality materials." />
            <SecurityItem text="Optional: Personal CCTV integration for your specific unit." />
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-50 rounded-tr-full"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full text-[#800517] mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need to know about ownership, security, and
            operations at Iron Roots Farms.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "border-red-200 bg-red-50/30 shadow-sm"
                  : "border-gray-200 bg-white hover:border-red-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-[#800517]" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-[#800517] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Animated Height Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-20"></div>

          <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-8 relative z-10">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#800517] hover:bg-[#6a0413] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-red-900/50 relative z-10">
            <Mail className="w-4 h-4" />
            Get in Touch
          </button>
        </div> */}
      </div>
    </section>
  );
};

// Helper component for the security list items
const SecurityItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
    <ShieldCheck className="w-5 h-5 text-[#800517] flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </li>
);

export default FAQSection;
