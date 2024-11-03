"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isIGBS, setIsIGBS] = useState(true); // Renamed state to clarify its purpose

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Empowering Your Financial Future"
          paragraph="At IGBS and CapitalHub, we provide a comprehensive suite of innovative solutions designed to enhance financial well-being and streamline operations for businesses and individuals alike."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsIGBS(true)} // Switch to IGBS Services
              className={`${
                isIGBS ? "pointer-events-none text-primary" : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              IGBS Services
            </span>
            <div onClick={() => setIsIGBS(!isIGBS)} className="flex cursor-pointer items-center">
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isIGBS ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsIGBS(false)} // Switch to CapitalHub Services
              className={`${
                isIGBS ? "text-dark dark:text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              CapitalHub Services
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {isIGBS ? (
            <>
              {/* IGBS Services Pricing Boxes */}
              <PricingBox
                packageName="Catalyst"
                subtitle="Essential tools for team collaboration and project management"
              >
                <OfferList text="Access to Project Management Tools" status="active" />
                <OfferList text="Use with Unlimited Teams" status="active" />
                <OfferList text="Document Collaboration" status="active" />
                <OfferList text="Basic Support" status="active" />
                <OfferList text="Secure Cloud Storage" status="active" />
                <OfferList text="Automated Reporting" status="inactive" />
              </PricingBox>
              <PricingBox
                packageName="Momentum"
                subtitle="Advanced features to enhance productivity and team communication"
              >
                <OfferList text="All Features from Catalyst" status="active" />
                <OfferList text="AI-Powered Data Analysis Tools" status="active" />
                <OfferList text="Real-time Team Communication" status="active" />
                <OfferList text="Workflow Automation Tools" status="active" />
                <OfferList text="Integration with 3rd-Party Apps" status="active" />
                <OfferList text="Priority Email Support" status="inactive" />
              </PricingBox>
              <PricingBox
                packageName="Pinnacle"
                subtitle="Premium tools for comprehensive project management and analytics"
              >
                <OfferList text="All Features from Momentum" status="active" />
                <OfferList text="Customizable Dashboard" status="active" />
                <OfferList text="Advanced Analytics & Insights" status="active" />
                <OfferList text="Access to Financial Planning Tools" status="active" />
                <OfferList text="Unlimited Integrations" status="active" />
                <OfferList text="24/7 Dedicated Support" status="active" />
              </PricingBox>
            </>
          ) : (
            <>
              {/* CapitalHub Services Pricing Boxes */}
              <PricingBox
                packageName="For Employers"
                subtitle="Streamline payroll and boost employee satisfaction"
              >
                <OfferList text="Seamless Payroll Integration" status="active" />
                <OfferList text="Early Wage Access Management" status="active" />
                <OfferList text="Boost Employee Retention & Satisfaction" status="active" />
                <OfferList text="Financial Wellness Tools" status="active" />
                <OfferList text="Customized Reporting" status="inactive" />
                <OfferList text="24/7 Support for Administrators" status="inactive" />
              </PricingBox>
              <PricingBox
                packageName="For Employees"
                subtitle="Instant access to your earnings for financial flexibility"
              >
                <OfferList text="Instant Access to Earned Wages" status="active" />
                <OfferList text="User-Friendly Mobile App" status="active" />
                <OfferList text="Secure Transfers to Bank Accounts/Cards" status="active" />
                <OfferList text="No Interest on Wage Advances" status="active" />
                <OfferList text="Access to Financial Education Videos" status="active" />
                <OfferList text="Transaction Tracking & Notifications" status="inactive" />
              </PricingBox>
              <PricingBox
                packageName="Why CapitalHub"
                subtitle="Comprehensive solutions for employers and employees"
              >
                <OfferList text="Financial Flexibility for Employees" status="active" />
                <OfferList text="Real-time Access to Earnings" status="active" />
                <OfferList text="Integration with Leading Payroll Systems" status="active" />
                <OfferList text="Boosted Employee Engagement & Productivity" status="active" />
                <OfferList text="Data-Driven Insights for Employers" status="active" />
                <OfferList text="Secure and Compliant Platform" status="active" />
              </PricingBox>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
