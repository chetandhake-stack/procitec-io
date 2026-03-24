import Container from "@/components/layout/Container";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamArchitectureProps = {
  content: EamPageContent["architecture"];
};

export default function EamArchitecture({ content }: EamArchitectureProps) {
  return (
    <section className="py-16 sm:py-20" id="platform-architecture">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <Card className="bg-surface">
            <CardHeader className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Platform Fit
              </p>
              <CardTitle className="text-2xl">
                Built to separate governance from day-to-day maintenance work.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-6 text-text-secondary">
                Buyers often need to confirm two things at once: that operating
                teams get a usable workspace, and that the platform keeps access
                boundaries clear.
              </p>
              <p className="leading-6 text-text-secondary">
                Procitec EAM is positioned to do both through clear public entry,
                tenant-specific application spaces, and role-aware access
                control.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.items.map((item) => (
              <Card
                key={item.title}
                className="h-full border-border bg-background transition-colors duration-200 hover:border-primary/25"
              >
                <CardHeader className="space-y-3">
                  {item.icon ? (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={item.icon} />
                    </span>
                  ) : null}
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-6 text-text-secondary">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
