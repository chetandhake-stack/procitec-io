import { cn } from "@/lib/utils";

type MaterialSymbolProps = {
  name: string;
  className?: string;
};

const availableIcons = new Set([
  "admin_panel_settings",
  "analytics",
  "assignment",
  "checklist",
  "desktop_windows",
  "event_repeat",
  "factory",
  "history",
  "inventory_2",
  "login",
  "phone_iphone",
  "security",
  "warehouse",
  "work",
]);

const iconAliases: Record<string, string> = {
  account_tree: "inventory_2",
  bolt: "analytics",
  business: "work",
  electrical_services: "inventory_2",
  event_busy: "event_repeat",
  install_mobile: "phone_iphone",
  manufacturing: "factory",
  precision_manufacturing: "factory",
  shield_lock: "security",
  warning: "factory",
};

export default function MaterialSymbol({
  name,
  className,
}: MaterialSymbolProps) {
  const resolvedName = iconAliases[name] ?? name;
  const iconName = availableIcons.has(resolvedName) ? resolvedName : "work";
  const iconUrl = `/icons/material/${iconName}.svg`;

  return (
    <span
      aria-hidden="true"
      className={cn("inline-block h-5 w-5 shrink-0 bg-current", className)}
      style={{
        WebkitMaskImage: `url(${iconUrl})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url(${iconUrl})`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}
