export const mainNavigation = [
  { label: "Applications", href: "/applications" },
  { label: "Platform", href: "/platform" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = [...mainNavigation] as const;

export const productNavigation = [
  { label: "EAM", href: "https://eam.procitec.io/" },
  { label: "EMS", href: "/products/ems" },
  { label: "IBM", href: "/products/ibm" },
] as const;
