import Container from "@/components/layout/Container";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { problemSolutionItems } from "@/lib/content/home";

export default function ProblemSolutionSection() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Problem to Outcome"
          title="Explain the operational issue, then show the application fit."
          description="The Procitec homepage should help industrial buyers understand the problem, the solution, and the operational result without hype or filler."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {problemSolutionItems.map((item) => (
            <Card key={item.title} className="bg-background">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Problem
                  </p>
                  <p className="leading-6 text-text-secondary">{item.problem}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Solution
                  </p>
                  <p className="leading-6 text-text-secondary">{item.solution}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Outcome
                  </p>
                  <p className="font-medium leading-6 text-text-primary">{item.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
