import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGBS - Infinity Global Business Solutions",
  description: "Infinity Global Business Solutions offers innovative solutions to empower your business and drive growth.",
  keywords: ["business solutions", "fintech", "IGBS", "Infinity Global Business Solutions"],
  openGraph: {
    title: "IGBS - Infinity Global Business Solutions",
    description: "Empowering your business with innovative solutions.",
    url: "https://igbs.io",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IGBS Team working together",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@IGBS",
    title: "IGBS - Infinity Global Business Solutions",
    description: "Empowering your business with innovative solutions.",
    images: [{ url: "https://igbs.io/og-image.jpg" }],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
