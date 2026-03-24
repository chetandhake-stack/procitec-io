import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { workflowSteps } from "@/lib/content/home";

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="How It Works"
          title="A simple sequence from visibility to action."
          description="Procitec.io should communicate the platform flow in a way that feels fast to scan on mobile and structured enough for technical buyers."
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <Card key={step.title} className="bg-surface">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft">
                {index + 1}
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
