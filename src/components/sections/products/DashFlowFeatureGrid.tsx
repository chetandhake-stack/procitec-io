import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { DashFlowPageContent } from "@/lib/content/products/dashflow";

type DashFlowFeatureSection =
  | DashFlowPageContent["benefits"]
  | DashFlowPageContent["operations"]
  | DashFlowPageContent["rollout"];

type DashFlowFeatureGridProps = {
  content: DashFlowFeatureSection;
  id?: string;
  surface?: "background" | "surface";
};

export default function DashFlowFeatureGrid({
  content,
  id,
  surface = "background",
}: DashFlowFeatureGridProps) {
  const sectionClassName =
    surface === "surface"
      ? "border-y border-border bg-surface py-16 sm:py-20"
      : "py-16 sm:py-20";

  const cardClassName =
    surface === "surface" ? "bg-background" : "bg-surface";

  return (
    <section className={sectionClassName} id={id}>
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <Card
              key={item.title}
              className={`h-full transition-colors duration-200 hover:border-primary/25 ${cardClassName}`}
            >
              <div className="space-y-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MaterialSymbol name={item.icon} />
                </span>
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-6 text-text-secondary">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
