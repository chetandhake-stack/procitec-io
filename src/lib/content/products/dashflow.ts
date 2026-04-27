export type DashFlowLink = {
  label: string;
  href: string;
};

export type DashFlowFeature = {
  title: string;
  description: string;
  icon: string;
};

export type DashFlowSignal = {
  label: string;
  value: string;
  note: string;
};

export type DashFlowFaqItem = {
  question: string;
  answer: string;
};

export interface DashFlowPageContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: DashFlowLink;
    secondaryCta: DashFlowLink;
    tertiaryCta: DashFlowLink;
    imageSrc: string;
    imageAlt: string;
    signals: DashFlowSignal[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: DashFlowFeature[];
  };
  operations: {
    eyebrow: string;
    title: string;
    description: string;
    items: DashFlowFeature[];
  };
  rollout: {
    eyebrow: string;
    title: string;
    description: string;
    items: DashFlowFeature[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: DashFlowFaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    trustLine: string;
    primaryCta: DashFlowLink;
    secondaryCta: DashFlowLink;
    tertiaryCta: DashFlowLink;
  };
}

export const dashflowPageContent: DashFlowPageContent = {
  seo: {
    title: "Fullscreen IoT Dashboard Rotation Tool for TV Displays | Procitec DashFlow",
    description:
      "Procitec DashFlow automates fullscreen IoT dashboard rotation for plant TVs, control rooms, and KPI screens with branding, licensing, and reliable chart cycling.",
  },
  hero: {
    eyebrow: "Procitec DashFlow",
    headline:
      "Turn IoT dashboards into branded fullscreen display screens for plants, control rooms, and KPI walls.",
    description:
      "DashFlow helps industrial teams rotate selected dashboards and charts automatically on TV screens, keeping live energy, utility, production, and operational metrics visible without manual navigation.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "See Key Benefits",
      href: "#benefits",
    },
    tertiaryCta: {
      label: "View Applications",
      href: "/applications",
    },
    imageSrc: "/dashflow-hero.png",
    imageAlt:
      "DashFlow marketing visual showing automated IoT dashboard TV rotation in an industrial environment.",
    signals: [
      {
        label: "Display mode",
        value: "Fullscreen",
        note: "Built for TV-style dashboards in shared operational spaces.",
      },
      {
        label: "Use pattern",
        value: "Hands-free",
        note: "Selected charts rotate automatically without manual clicking.",
      },
      {
        label: "Branding",
        value: "Customer-ready",
        note: "Support site or client logo upload for branded deployments.",
      },
    ],
  },
  benefits: {
    eyebrow: "User Benefits",
    title: "A cleaner display experience for the teams that rely on shared visibility.",
    description:
      "DashFlow is designed for continuous screen visibility, where operators, supervisors, and managers need the right dashboard in view without touching the display.",
    items: [
      {
        title: "Automated dashboard rotation",
        description:
          "Cycle key IoT dashboards and selected widgets automatically, so shared screens stay useful throughout the shift.",
        icon: "event_repeat",
      },
      {
        title: "Real-time KPI visibility",
        description:
          "Keep energy, production, utility, and plant metrics visible in control rooms, shopfloors, and review spaces.",
        icon: "analytics",
      },
      {
        title: "Clean TV-style presentation",
        description:
          "Fullscreen layout and collapsible controls help displays stay readable and professional on large screens.",
        icon: "desktop_windows",
      },
      {
        title: "Less manual intervention",
        description:
          "Reduce repeated clicks, tab switching, and operator dependency for routine dashboard display tasks.",
        icon: "assignment",
      },
    ],
  },
  operations: {
    eyebrow: "Operations",
    title: "Built for long-running display use, not just one-time dashboard demos.",
    description:
      "DashFlow focuses on dependable day-to-day use in industrial spaces where screens need to stay live, understandable, and easy to control.",
    items: [
      {
        title: "Auto-resume after refresh",
        description:
          "Continue the display flow after browser refresh so wall screens recover more gracefully during day-to-day use.",
        icon: "history",
      },
      {
        title: "Running-state indicator",
        description:
          "Show a clear green running indicator on the Chrome extension icon for easier operator confidence.",
        icon: "security",
      },
      {
        title: "Safe stop across active tabs",
        description:
          "Stop rotation cleanly across active dashboard tabs when the display should be paused or reconfigured.",
        icon: "work",
      },
      {
        title: "Console diagnostics",
        description:
          "Surface missing or abnormal dashboards and widgets so support teams can diagnose display issues faster.",
        icon: "checklist",
      },
    ],
  },
  rollout: {
    eyebrow: "Branding, Licensing, and Fit",
    title: "Practical for branded deployments across plants, departments, and client environments.",
    description:
      "DashFlow is suited to operational rollouts where visibility matters, branding matters, and license control needs to stay straightforward.",
    items: [
      {
        title: "Customer logo upload",
        description:
          "Use PNG logo upload to adapt the display for customer sites, business units, or plant-specific environments.",
        icon: "inventory_2",
      },
      {
        title: "Offline annual licensing",
        description:
          "Support one-year offline license-key activation today, with room for stricter server-managed control later.",
        icon: "login",
      },
      {
        title: "Control-room and TV use cases",
        description:
          "Fit energy monitoring TVs, KPI walls, plant review displays, customer-facing screens, and utility dashboards.",
        icon: "factory",
      },
      {
        title: "Multi-dashboard flexibility",
        description:
          "Select multiple dashboards and charts with configurable timing and spacing to suit each display context.",
        icon: "warehouse",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions about Procitec DashFlow.",
    description:
      "These answers help buyers understand where DashFlow fits and why it is useful for shared-screen industrial visibility.",
    items: [
      {
        question: "What is Procitec DashFlow used for?",
        answer:
          "DashFlow is used to rotate selected IoT dashboards and widgets automatically in a fullscreen TV-style display for plant, utility, and management visibility.",
      },
      {
        question: "Where does DashFlow fit best?",
        answer:
          "It fits shopfloor displays, energy monitoring screens, control rooms, plant KPI walls, and customer-facing performance screens where live visibility matters.",
      },
      {
        question: "Can DashFlow support customer branding?",
        answer:
          "Yes. DashFlow supports PNG logo upload so each customer, site, or department can run a branded display experience.",
      },
      {
        question: "How does licensing work?",
        answer:
          "DashFlow supports offline license-key activation, with each license valid for one year from activation date. Server-based activation can be added later for more centralized device control.",
      },
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "See how DashFlow can keep your most important dashboards visible without manual screen handling.",
    description:
      "Procitec DashFlow is positioned for industrial teams that want a cleaner way to run TV dashboards, rotating KPIs, and branded monitoring screens across operational spaces.",
    trustLine:
      "Built for reliable shared-screen use, customer branding, and low-friction dashboard rotation in real industrial environments.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform",
    },
    tertiaryCta: {
      label: "View Applications",
      href: "/applications",
    },
  },
};
