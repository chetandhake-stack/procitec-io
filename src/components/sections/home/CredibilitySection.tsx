import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { credibilityItems } from "@/lib/content/home";

export default function CredibilitySection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <SectionHeader
          eyebrow="Credibility"
          title="Built for industrial decision-makers who value clarity and trust."
          description="The platform should feel structured, practical, and deployment-aware. That means product separation, operational context, and clear information hierarchy."
        />

        <Card className="space-y-4 bg-background">
          {credibilityItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-sm leading-6 text-text-secondary">{item}</p>
            </div>
          ))}
        </Card>
      </Container>
    </section>
  );
}
