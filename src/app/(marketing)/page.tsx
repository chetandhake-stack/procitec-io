import type { Metadata } from "next";
import ApplicationsSection from "@/components/sections/home/ApplicationsSection";
import AudiencePathsSection from "@/components/sections/home/AudiencePathsSection";
import CallToActionSection from "@/components/sections/home/CallToActionSection";
import CredibilitySection from "@/components/sections/home/CredibilitySection";
import HeroSection from "@/components/sections/home/HeroSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import ProblemSolutionSection from "@/components/sections/home/ProblemSolutionSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Industrial Applications for Reliability, Visibility, and Scale",
  description:
    "Explore Procitec applications built for industrial teams, with clear entry points for EAM, EMS, and future products.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudiencePathsSection />
      <ApplicationsSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <CredibilitySection />
      <CallToActionSection />
    </>
  );
}
