import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="md" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Not Found
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-text-primary">
          The page you requested is not available.
        </h1>
        <p className="mt-4 text-base leading-7 text-text-secondary">
          Return to the Procitec homepage or review the available application
          entry points.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/applications" variant="secondary">
            View Applications
          </Button>
        </div>
      </Container>
    </section>
  );
}
