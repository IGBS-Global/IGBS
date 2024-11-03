import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    paragraph: "Leverage cutting-edge cloud technologies for scalable, secure, and cost-effective business operations. Our cloud expertise helps you migrate, optimize, and innovate.",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Software Development",
    paragraph: "Tailor-made software solutions designed to address your unique business challenges. From web applications to enterprise systems, we deliver quality code.",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Business Process Automation",
    paragraph: "Streamline operations and boost efficiency with intelligent automation solutions. Transform manual processes into automated workflows for enhanced productivity.",
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3h9a3 3 0 003-3z" />
      </svg>
    ),
    title: "Data Analytics & BI",
    paragraph: "Turn your data into actionable insights with advanced analytics and business intelligence tools. Make informed decisions backed by powerful data visualization.",
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-9 9m-9-9.01a9.98 9.98 0 00.01 9.99" />
      </svg>
    ),
    title: "Cybersecurity Services",
    paragraph: "Protect your digital assets with comprehensive security solutions. Our advanced protocols and continuous monitoring ensure your business stays secure.",
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Digital Transformation",
    paragraph: "Navigate your digital journey with our expert guidance. We help businesses evolve, adapt, and thrive in the digital age with strategic technology implementation.",
  },
  {
    id: 7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    title: "API Integration",
    paragraph: "Connect and optimize your business ecosystem with seamless API integration services. Unite your applications and data for enhanced operational efficiency.",
  },
  {
    id: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l6-6M8 10l6 6 6-6" />
      </svg>
    ),
    title: "IT Consulting",
    paragraph: "Strategic technology guidance to align your IT investments with business goals. Our experts provide insights to drive innovation and competitive advantage.",
  },
  {
    id: 9,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 22h18M3 2h18M3 10h18M3 18h18" />
      </svg>
    ),
    title: "Mobile Solutions",
    paragraph: "Engage users on any device with powerful mobile applications. We develop cross-platform solutions that deliver exceptional user experiences.",
  },
];

export default featuresData;