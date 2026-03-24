import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function CallToActionSection() {
  return (
    <section className="bg-text-primary py-16 sm:py-20">
      <Container size="lg" className="text-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Next Step
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Move directly into the application path that fits your team.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
            Keep the call to action clear, visible, and easy to use on mobile.
            Procitec.io should always help users act without extra friction.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href={siteConfig.primaryCta.href} size="lg" className="w-full sm:w-auto">
            {siteConfig.primaryCta.label}
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="secondary"
            className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
          >
            Talk to Expert
          </Button>
        </div>
      </Container>
    </section>
  );
}
