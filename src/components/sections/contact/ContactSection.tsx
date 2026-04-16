import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to Procitec about the right application path."
          description="Use the contact page for direct conversations around product fit, rollout planning, and live application access."
        />

        <Card className="space-y-5 bg-surface">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-text-primary">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-base font-medium text-primary hover:text-primary-hover"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-text-primary">Typical conversations</p>
            <ul className="space-y-2 text-sm leading-6 text-text-secondary">
              <li>Application overview and product fit</li>
              <li>Demo planning for EAM, IBM, and future EMS rollout</li>
              <li>Multi-site industrial deployment discussions</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.primaryCta.href} className="w-full sm:w-auto">
              Open EAM
            </Button>
            <Button
              href={`mailto:${siteConfig.contact.email}`}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Email Procitec
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
