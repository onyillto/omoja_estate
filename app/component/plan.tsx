"use client";
import React, { useState } from "react";
import {
  Check,
  Calendar,
  CreditCard,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const PaymentStructure = () => {
  const [activePlan, setActivePlan] = useState("outright");

  return (
    <section className="relative w-full py-24 bg-gray-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" width="100%" height="100%">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 0H20L0 20M40 40V20L20 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-900"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-[#800517] uppercase tracking-widest mb-2">
            Investment Options
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Flexible Payment Plans
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that aligns with your financial goals. Whether you
            prefer maximum savings with an outright purchase or financial
            flexibility with installments, we have you covered.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-md border border-gray-100 inline-flex relative">
            {/* Sliding Background Animation using conditional classes */}
            <div
              className={`absolute top-1.5 bottom-1.5 rounded-full bg-[#800517] transition-all duration-300 ease-out ${
                activePlan === "outright"
                  ? "left-1.5 w-[140px]"
                  : "left-[146px] w-[160px]"
              }`}
            ></div>

            <button
              onClick={() => setActivePlan("outright")}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                activePlan === "outright"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Outright Payment
            </button>
            <button
              onClick={() => setActivePlan("installment")}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                activePlan === "installment"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Installment Plan
            </button>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500">
          <div className="grid md:grid-cols-12 min-h-[500px]">
            {/* Left Side: The Visual/Details */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
              {/* Decorative blob */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-50 rounded-br-full opacity-50"></div>

              {activePlan === "outright" ? (
                <div className="animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-[#800517] px-3 py-1 rounded-full text-xs font-bold mb-6">
                    <ShieldCheck className="w-4 h-4" /> BEST VALUE
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Outright Purchase
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Secure your plot immediately with a one-time payment. This
                    option offers the absolute best price point and grants you
                    immediate documentation and allocation priority.
                  </p>

                  <div className="space-y-4">
                    <BenefitItem text="Instant Plot Allocation" />
                    <BenefitItem text="No Hidden Interest Rates" />
                    <BenefitItem text="Priority Documentation Processing" />
                    <BenefitItem text="Immediate Access for Development" />
                  </div>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-6">
                    <Calendar className="w-4 h-4" /> FLEXIBLE TERM
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Installment Plan
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Spread your payment over a convenient period. Start with an
                    initial deposit to lock down your plot, then pay the balance
                    in manageable milestones.
                  </p>

                  {/* Visual Timeline for Installments */}
                  <div className="relative pl-4 border-l-2 border-red-100 space-y-8">
                    <TimelineItem
                      title="Initial Deposit"
                      desc="Secure your slot and lock the price."
                      active
                    />
                    <TimelineItem
                      title="2nd Installment"
                      desc="Due after 3 months (Development Commences)."
                    />
                    <TimelineItem
                      title="3rd Installment"
                      desc="Due after 6 months."
                    />
                    <TimelineItem
                      title="4th & Final Payment"
                      desc="Completion & Allocation of Documents."
                      isLast
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: The Pricing & Action */}
            <div className="md:col-span-5 bg-gray-50 p-8 md:p-12 flex flex-col justify-center border-l border-gray-100">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500 font-medium mb-2">
                  Total Investment
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                  {activePlan === "outright" ? "₦5.5M" : "₦6.0M"}
                </h2>
                <p className="text-[#800517] text-sm font-medium mb-8">
                  {activePlan === "outright"
                    ? "Includes 5% Discount applied"
                    : "Spread over 12 months"}
                </p>

                <button className="w-full group relative py-4 px-6 rounded-xl bg-[#800517] text-white font-semibold shadow-lg shadow-red-200 hover:bg-[#6a0413] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
                  <span className="relative z-10">
                    {activePlan === "outright"
                      ? "Make Payment Now"
                      : "Start with Deposit"}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-gray-400 mt-6">
                  *Prices are subject to change based on market value. <br />
                  Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sub Components for cleaner code ---

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[#800517] flex-shrink-0">
      <Check className="w-4 h-4" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

interface TimelineItemProps {
  title: string;
  desc: string;
  active?: boolean;
  isLast?: boolean;
}

const TimelineItem = ({ title, desc, active = false }: TimelineItemProps) => (
  <div className="relative group">
    {/* Dot */}
    <div
      className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 ${
        active ? "bg-[#800517] border-[#800517]" : "bg-white border-gray-300"
      }`}
    ></div>

    <h4
      className={`text-sm font-bold ${
        active ? "text-[#800517]" : "text-gray-900"
      }`}
    >
      {title}
    </h4>
    <p className="text-xs text-gray-500 mt-1">{desc}</p>
  </div>
);

export default PaymentStructure;
