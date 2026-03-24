import { cn } from "@/lib/utils";

type MaterialSymbolProps = {
  name: string;
  className?: string;
};

const iconAliases: Record<string, string> = {
  manufacturing: "factory",
  shield_lock: "security",
};

export default function MaterialSymbol({
  name,
  className,
}: MaterialSymbolProps) {
  const iconName = iconAliases[name] ?? name;
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
