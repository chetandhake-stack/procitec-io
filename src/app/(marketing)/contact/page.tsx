import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Procitec for application guidance, EAM access, and product planning conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
