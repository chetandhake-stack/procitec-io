export type EamLink = {
  label: string;
  href: string;
};

export type EamComparisonItem = {
  before: string;
  after: string;
};

export type EamHeroHighlight = {
  title: string;
  description: string;
  icon?: string;
};

export type EamFeatureCard = {
  title: string;
  description: string;
  icon?: string;
  points?: string[];
};

export type EamWorkflowStep = {
  title: string;
  description: string;
  icon?: string;
};

export type EamFaqItem = {
  question: string;
  answer: string;
};

export type EamSection<T> = {
  eyebrow: string;
  title: string;
  description: string;
  items: T[];
};

export interface EamPageContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: EamLink;
    secondaryCta: EamLink;
    tertiaryCta: EamLink;
    highlights: EamHeroHighlight[];
  };
  modules: EamSection<EamFeatureCard>;
  useCases: EamSection<EamFeatureCard>;
  architecture: EamSection<EamFeatureCard>;
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: EamFaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    trustLine: string;
    primaryCta: EamLink;
    secondaryCta: EamLink;
    tertiaryCta: EamLink;
  };
}

export const eamPageContent: EamPageContent = {
  seo: {
    title: "Enterprise Asset Management Software for Industrial Maintenance | Procitec EAM",
    description:
      "Procitec EAM helps industrial teams organize assets, plan preventive maintenance, manage work orders, and improve plant visibility through one structured platform.",
  },
  hero: {
    eyebrow: "Procitec EAM",
    headline:
      "Procitec EAM - Enterprise Asset Manager - Where asset information becomes asset intelligence.",
    description:
      "Procitec EAM helps plant and maintenance teams manage asset records, work orders, inspections, downtime, documents, and alerts in one industrial system.",
    primaryCta: {
      label: "WhatsApp",
      href: "https://wa.me/919822117755?text=Hello%20Procitec",
    },
    secondaryCta: {
      label: "Email",
      href: "mailto:sales@procitec.in?subject=Procitec%20EAM%20Demo%20Request",
    },
    tertiaryCta: {
      label: "Open EAM",
      href: "https://eam.procitec.io/",
    },
    highlights: [
      {
        title: "Full asset visibility across plant areas and equipment",
        description:
          "Keep asset structure, work history, and maintenance context easier to review.",
        icon: "manufacturing",
      },
      {
        title: "Planned maintenance instead of reactive follow-up",
        description:
          "Use schedules, work orders, and inspections to move from memory-driven work to a system.",
        icon: "event_repeat",
      },
      {
        title: "Clear operational records for better maintenance decisions",
        description:
          "Review downtime, follow-up activity, and equipment history with more confidence.",
        icon: "analytics",
      },
    ],
  },
  modules: {
    eyebrow: "Core Capabilities",
    title: "Core modules for asset and maintenance operations.",
    description:
      "Keep the module story short and practical so buyers can quickly see what is covered.",
    items: [
      {
        title: "Asset Management",
        description:
          "Organize equipment records, status context, and maintenance history so teams know what they are working on.",
        icon: "inventory_2",
        points: [
          "Structured asset hierarchy",
          "Lifecycle and status context",
          "Connected maintenance history",
        ],
      },
      {
        title: "Work Orders",
        description:
          "Assign, track, and review maintenance activity with clearer ownership and follow-up visibility.",
        icon: "assignment",
        points: [
          "Task assignment and progress tracking",
          "Clearer accountability",
          "Reviewable execution history",
        ],
      },
      {
        title: "Preventive Maintenance",
        description:
          "Schedule recurring maintenance so routine work does not depend on memory or manual reminders.",
        icon: "event_repeat",
        points: [
          "Planned maintenance schedules",
          "Routine task coverage",
          "Reduced dependence on spreadsheets",
        ],
      },
      {
        title: "Inspections And Routines",
        description:
          "Capture standard checks and recurring observations as part of the daily operational flow.",
        icon: "checklist",
        points: [
          "Standardized checks",
          "Digital inspection records",
          "Earlier issue visibility",
        ],
      },
      {
        title: "Downtime Visibility",
        description:
          "Record interruptions and connect them to asset follow-up so recurring issues are easier to review.",
        icon: "history",
        points: [
          "Downtime event tracking",
          "Pattern review",
          "Connected corrective follow-up",
        ],
      },
      {
        title: "Spare Parts",
        description:
          "Support maintenance readiness by keeping spare use and availability easier to track in context.",
        icon: "warehouse",
        points: [
          "Spare reference visibility",
          "Maintenance readiness support",
          "Better link between work and parts use",
        ],
      },
      {
        title: "Documents",
        description:
          "Keep manuals, drawings, datasheets, checklists, and certificates connected to the asset record.",
        icon: "description",
        points: [
          "Asset-linked documents",
          "Technical file visibility",
          "Cleaner maintenance reference",
        ],
      },
      {
        title: "Meters & Readings",
        description:
          "Review operating readings and trends so teams can connect asset condition to maintenance decisions.",
        icon: "speed",
        points: [
          "Real-time reading context",
          "Trend visibility",
          "Condition review support",
        ],
      },
      {
        title: "Alerts",
        description:
          "Keep current asset risks visible so follow-up work can start from the right context.",
        icon: "notifications",
        points: [
          "Active alert visibility",
          "Risk context",
          "Faster follow-up",
        ],
      },
      {
        title: "Warranty",
        description:
          "Track warranty coverage and remaining protection so service decisions have commercial context.",
        icon: "verified_user",
        points: [
          "Coverage details",
          "Warranty status",
          "Service decision support",
        ],
      },
      {
        title: "SOPs",
        description:
          "Use approved procedures to guide recurring maintenance work and standardize execution quality.",
        icon: "menu_book",
        points: [
          "Approved procedures",
          "Step-by-step guidance",
          "Version control",
        ],
      },
      {
        title: "Audit Visibility",
        description:
          "Keep operational records easier to review so teams can support accountability and follow-up discussions.",
        icon: "shield_lock",
        points: [
          "Role-aware record visibility",
          "Structured operational history",
          "Support for review and accountability",
        ],
      },
      {
        title: "Reporting Baselines",
        description:
          "Use maintenance and asset records to build a clearer operational view for decisions and next actions.",
        icon: "analytics",
        points: [
          "Maintenance activity review",
          "Trend-oriented visibility",
          "Baseline reporting support",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use Cases",
    title: "Designed for industrial assets that teams need to maintain, inspect, and review consistently.",
    description:
      "Procitec EAM is better positioned when buyers can see their environment reflected in the page, not just generic software language.",
    items: [
      {
        title: "Electrical Panels And Switchboards",
        description:
          "Keep equipment structure, maintenance routines, and follow-up activity visible for critical electrical assets.",
        icon: "electrical_services",
      },
      {
        title: "Transformers And Power Systems",
        description:
          "Support maintenance review and operating history for assets where downtime and condition matter closely.",
        icon: "bolt",
      },
      {
        title: "CNC And Production Machines",
        description:
          "Track equipment history, planned work, and interruptions for production-critical machines.",
        icon: "precision_manufacturing",
      },
      {
        title: "Utilities And Facility Equipment",
        description:
          "Bring site services and shared facility assets into the same structured maintenance system.",
        icon: "business",
      },
    ],
  },
  architecture: {
    eyebrow: "Control And Visibility",
    title:
      "Operational clarity with access boundaries that stay controlled as teams grow.",
    description:
      "Procitec EAM keeps public product communication, tenant workspaces, and role-aware access properly separated.",
    items: [
      {
        title: "Centralized product entry",
        description:
          "Procitec.io explains the product clearly while the live application remains a distinct operational workspace.",
        icon: "desktop_windows",
      },
      {
        title: "Tenant workspaces",
        description:
          "Each tenant can operate in its own application space so sites or business units stay clearly separated.",
        icon: "factory",
      },
      {
        title: "Role-aware access",
        description:
          "RBAC-oriented access helps align permissions with operational responsibility instead of exposing everything to everyone.",
        icon: "security",
      },
      {
        title: "Administrative oversight",
        description:
          "Governance stays separate from daily maintenance work so platform oversight does not crowd the operational view.",
        icon: "admin_panel_settings",
      },
      {
        title: "Audit-oriented records",
        description:
          "Structured operational history helps support review, accountability, and buyer confidence.",
        icon: "shield_lock",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions buyers ask before evaluating fit or booking a demo.",
    description:
      "Short answers improve scan speed for human readers and make the product easier for search engines and AI systems to interpret accurately.",
    items: [
      {
        question: "What types of assets is Procitec EAM suited for?",
        answer:
          "Procitec EAM is positioned for industrial equipment and facility assets that need structured records, maintenance planning, inspections, and operational review.",
      },
      {
        question: "How does preventive maintenance work in Procitec EAM?",
        answer:
          "Teams can organize recurring plans, scheduled work, and routine checks so preventive activity is easier to plan, assign, and review in one system.",
      },
      {
        question: "Can plant teams use Procitec EAM on mobile devices?",
        answer:
          "Yes. Procitec EAM is intended to support mobile access together with a practical PWA-style entry path for repeat daily use in plant and field contexts.",
      },
      {
        question: "How does Procitec EAM keep access controlled across teams or sites?",
        answer:
          "The platform uses tenant-specific workspaces together with role-aware access control so visibility can stay aligned with responsibility and tenant boundaries.",
      },
      {
        question: "Can Procitec support product evaluation and rollout planning?",
        answer:
          "Yes. Buyers can book a demo, discuss rollout priorities, and review how the product would fit their plant structure and maintenance workflow.",
      },
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "Bring your asset records, maintenance work, and operational follow-up into one clearer system.",
    description:
      "Review fit with your plant, discuss rollout priorities, and see how Procitec EAM can support day-to-day maintenance control.",
    trustLine:
      "Built for industrial teams that need structured maintenance workflows, field-ready access, and controlled visibility.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Talk to Expert",
      href: "/support",
    },
    tertiaryCta: {
      label: "Open EAM",
      href: "https://eam.procitec.io/",
    },
  },
};
