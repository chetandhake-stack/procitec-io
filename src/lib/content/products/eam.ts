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
    previewTitle: string;
    previewDescription: string;
    previewItems: EamFeatureCard[];
  };
  problem: EamSection<EamFeatureCard>;
  transformation: {
    eyebrow: string;
    title: string;
    description: string;
    items: EamComparisonItem[];
  };
  modules: EamSection<EamFeatureCard>;
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: EamWorkflowStep[];
  };
  fieldUse: EamSection<EamFeatureCard>;
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
      "Reduce downtime with clearer asset visibility and structured maintenance control.",
    description:
      "Procitec EAM helps plant and maintenance teams organize assets, plan preventive work, manage execution, and keep daily operations visible in one industrial system.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "See How It Works",
      href: "#how-it-works",
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
    previewTitle: "What buyers see in a demo",
    previewDescription:
      "A focused view of the structure and workflows maintenance teams use every day.",
    previewItems: [
      {
        title: "Asset structure",
        description:
          "Plant, area, line, and machine records stay connected instead of scattered across separate files.",
        icon: "account_tree",
      },
      {
        title: "Work execution",
        description:
          "Preventive work, inspections, and assigned tasks move through one visible workflow.",
        icon: "assignment",
      },
      {
        title: "Operational review",
        description:
          "Downtime, history, and follow-up stay easier to review when activity is captured in one place.",
        icon: "analytics",
      },
      {
        title: "Field-ready use",
        description:
          "Mobile and PWA-oriented access support plant users who are not working from a desk.",
        icon: "phone_iphone",
      },
    ],
  },
  problem: {
    eyebrow: "Common Maintenance Problems",
    title:
      "When maintenance runs on memory, spreadsheets, and scattered records, downtime stays harder to control.",
    description:
      "Industrial teams usually start looking for EAM when recurring problems become too visible to ignore.",
    items: [
      {
        title: "Unplanned breakdowns disrupt production",
        description:
          "Teams do not always have one clear place to review equipment condition, downtime, and follow-up work.",
        icon: "warning",
      },
      {
        title: "Maintenance depends on who remembers what comes next",
        description:
          "Preventive work and routine checks drift when schedules live in disconnected sheets or personal follow-up.",
        icon: "event_busy",
      },
      {
        title: "Asset history is incomplete or difficult to find",
        description:
          "When records are fragmented, teams lose context on repairs, recurring issues, and operating history.",
        icon: "history",
      },
      {
        title: "Spare readiness is harder to judge",
        description:
          "Parts are more likely to be overstocked, unavailable, or disconnected from the actual maintenance need.",
        icon: "warehouse",
      },
      {
        title: "Downtime and follow-up stay difficult to review",
        description:
          "Operational decisions slow down when interruptions, inspections, and corrective work are not visible together.",
        icon: "analytics",
      },
    ],
  },
  transformation: {
    eyebrow: "From Reactive To Structured",
    title: "What changes when assets, work, and history live in one system.",
    description:
      "Procitec EAM helps replace fragmented maintenance tracking with a more controlled operating model.",
    items: [
      {
        before: "Reactive maintenance with limited planning",
        after: "Planned preventive work with clearer schedules and follow-up",
      },
      {
        before: "Scattered asset records across multiple tools",
        after: "Structured asset hierarchy with connected operational history",
      },
      {
        before: "Manual task follow-up with weak accountability",
        after: "Visible work execution through assigned and reviewable work orders",
      },
      {
        before: "Unclear downtime patterns and delayed response",
        after: "More usable visibility into interruptions, inspections, and next actions",
      },
      {
        before: "Decisions based on incomplete maintenance context",
        after: "Better operational review through records, trends, and audit visibility",
      },
    ],
  },
  modules: {
    eyebrow: "Core Capabilities",
    title:
      "Everything teams need to move from fragmented maintenance tracking to a structured system.",
    description:
      "Procitec EAM is organized around the operational workflows plant and maintenance teams already manage every day.",
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
  howItWorks: {
    eyebrow: "How It Works",
    title: "A practical workflow from asset setup to maintenance review.",
    description:
      "The system should feel understandable quickly: how assets are organized, how work is executed, and how teams review what happened.",
    steps: [
      {
        title: "Register Assets",
        description:
          "Capture equipment records with the operational details teams need to maintain and review them properly.",
        icon: "inventory_2",
      },
      {
        title: "Build Asset Hierarchy",
        description:
          "Organize plant, area, line, and machine context so teams can orient themselves faster.",
        icon: "account_tree",
      },
      {
        title: "Plan Maintenance",
        description:
          "Set preventive work, routines, and recurring checks so maintenance is less dependent on memory.",
        icon: "event_repeat",
      },
      {
        title: "Execute Work Orders",
        description:
          "Assign tasks, track progress, and keep execution visible while work is being completed.",
        icon: "assignment",
      },
      {
        title: "Capture Inspections And Updates",
        description:
          "Keep routine checks, field observations, and follow-up records inside the same operating workflow.",
        icon: "checklist",
      },
      {
        title: "Review Downtime And Trends",
        description:
          "Use downtime records, maintenance history, and baseline reporting to support better next actions.",
        icon: "analytics",
      },
    ],
  },
  fieldUse: {
    eyebrow: "Field And Daily Use",
    title: "Built for daily plant work, not just office review.",
    description:
      "Procitec EAM is positioned for practical use by maintenance and operations teams who need fast orientation and low-friction access.",
    items: [
      {
        title: "Mobile-Ready Access",
        description:
          "Give plant users access to the system without assuming they are always working from a desktop workstation.",
        icon: "phone_iphone",
        points: [
          "Useful for supervisors and technicians moving across the site",
          "Designed to stay usable in active plant environments",
          "Supports day-to-day follow-up outside the office",
        ],
      },
      {
        title: "PWA Repeat-Use Path",
        description:
          "Support repeat daily use with a practical application entry that keeps the workflow close at hand.",
        icon: "install_mobile",
        points: [
          "Practical for recurring maintenance activity",
          "Keeps daily tasks closer to the user workflow",
          "Fits teams that need quick access more than deep training",
        ],
      },
      {
        title: "Clear Daily Workflow",
        description:
          "Assets, work orders, inspections, and follow-up records stay connected so teams can move through work with less friction.",
        icon: "manufacturing",
        points: [
          "Less switching between disconnected records",
          "Easier review of what was done and what is pending",
          "Better continuity between plant work and management review",
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
