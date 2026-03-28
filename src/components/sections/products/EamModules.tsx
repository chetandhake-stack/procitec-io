import Container from "@/components/layout/Container";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamModulesProps = {
  content: EamPageContent["modules"];
};

export default function EamModules({ content }: EamModulesProps) {
  return (
    <section
      className="border-y border-border bg-surface py-16 sm:py-20"
      id="core-modules"
    >
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <Card
              key={item.title}
              className="h-full bg-background transition-colors duration-200 hover:border-primary/25"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  {item.icon ? (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={item.icon} />
                    </span>
                  ) : null}
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Capability
                  </p>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-6 text-text-secondary">{item.description}</p>
                {item.points ? (
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-primary" />
                        <span className="leading-6 text-text-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
