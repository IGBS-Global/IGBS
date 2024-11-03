import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Infinity Global Business Solutions Contact Page",
  description: "This is Contact Page for Infinity Global Business Solutions Website",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us" // Clear title indicating the purpose of the page
        description="We’d love to hear from you! Please fill out the form below or reach out to us via our contact details for any inquiries or feedback regarding our services." // Brief overview of what users can expect
      />

      <Contact />
    </>
  );
};

export default ContactPage;
