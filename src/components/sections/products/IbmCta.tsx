import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { IbmPageContent } from "@/lib/content/products/ibm";

type IbmCtaProps = {
  content: IbmPageContent["cta"];
};

export default function IbmCta({ content }: IbmCtaProps) {
  return (
    <section className="bg-text-primary py-16 sm:py-20">
      <Container size="lg">
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8 text-center shadow-medium sm:px-8 sm:py-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {content.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-white/80">
              {content.description}
            </p>
            <p className="mx-auto max-w-2xl text-sm leading-6 text-white/65">
              {content.trustLine}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={content.primaryCta.href} size="lg" className="w-full sm:w-auto">
              {content.primaryCta.label}
            </Button>
            <Button
              href={content.secondaryCta.href}
              size="lg"
              variant="secondary"
              className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
            >
              {content.secondaryCta.label}
            </Button>
            <Button
              href={content.tertiaryCta.href}
              size="lg"
              variant="ghost"
              className="w-full text-white hover:bg-white/10 sm:w-auto"
            >
              {content.tertiaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
