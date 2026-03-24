import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo/metadata";

const platformPrinciples = [
  {
    title: "Application-first structure",
    description:
      "Procitec.io is designed to direct users toward the right product page or live entry point quickly.",
  },
  {
    title: "Industrial clarity",
    description:
      "The platform uses direct language, structured sections, and low-friction navigation for technical decision-makers.",
  },
  {
    title: "Scalable product foundation",
    description:
      "The architecture supports EAM, EMS, and future Procitec applications without redesigning the site structure.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Platform",
  description:
    "Understand the Procitec.io platform structure, product positioning, and scalable application architecture.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Platform"
          title="A structured product platform for industrial software applications."
          description="Procitec.io separates the public product website from live applications and the corporate website so users understand where to go and why."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {platformPrinciples.map((item) => (
            <Card key={item.title} className="bg-surface">
              <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
