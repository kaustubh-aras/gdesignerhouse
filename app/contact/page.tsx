import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import HeroCarousel from "@/components/hero-carousel2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - G Designer House | Get In Touch",
  description:
    "Get in touch with G Designer House. Contact us for architectural design services, inquiries, or project consultations. Visit our office in Bhayandar.",
  keywords:
    "contact us, get in touch, architectural consultation, design inquiry, contact form",
  alternates: {
    canonical: "https://www.gdesignerhouse.com/contact",
  },
  openGraph: {
    title: "Contact Us - G Designer House",
    description:
      "Get in touch with G Designer House for your architectural needs.",
    url: "https://www.gdesignerhouse.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        <HeroCarousel
          title="Get In Touch"
          subtitle="Have a project in mind? We'd love to hear from you. Reach out and let's create something extraordinary together."
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}