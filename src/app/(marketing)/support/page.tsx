import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo/metadata";

const supportOptions = [
  {
    title: "Product guidance",
    description:
      "Discuss application fit, rollout readiness, and the best Procitec entry point for your team.",
  },
  {
    title: "Implementation alignment",
    description:
      "Coordinate with Procitec on platform structure, deployment direction, and cross-team clarity.",
  },
  {
    title: "Expert contact",
    description:
      "Reach the Procitec team directly when you need a fast next step instead of extra navigation.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description:
    "Find the right support path for Procitec applications, rollout planning, and product guidance.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Support"
          title="Keep support pathways clear and easy to act on."
          description="The support experience should reduce friction for industrial teams looking for guidance, not add another layer of complexity."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {supportOptions.map((option) => (
            <Card key={option.title}>
              <h3 className="text-lg font-semibold text-text-primary">{option.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {option.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" className="w-full sm:w-auto">
            Talk to Expert
          </Button>
          <Button href="/applications" variant="secondary" className="w-full sm:w-auto">
            View Applications
          </Button>
        </div>
      </Container>
    </section>
  );
}
