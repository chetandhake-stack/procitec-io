import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { rolePaths } from "@/lib/content/home";

export default function AudiencePathsSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Choose a Path"
          title="Start from the role you manage today."
          description="Busy industrial teams need direct entry points. These paths help users reach the most relevant application or platform view without scanning unnecessary detail."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {rolePaths.map((path) => (
            <Card key={path.title}>
              <CardHeader>
                <CardTitle>{path.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-6 text-text-secondary">{path.description}</p>
              </CardContent>
              <CardFooter>
                <Button href={path.href} variant="secondary">
                  {path.ctaLabel}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
