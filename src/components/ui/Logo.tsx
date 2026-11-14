import { siteData } from "../../data/siteData";

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-ink-900 font-mono text-xs font-bold text-accent">
        JT
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-zinc-50">{siteData.person.name}</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          {siteData.brand.name}
        </span>
      </span>
    </span>
  );
}
