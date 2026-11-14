import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQItem } from "../../data/siteData.types";
import { reveal } from "../../lib/motion";

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <motion.div {...reveal} className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((it) => (
        <details key={it.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-zinc-100 [&::-webkit-details-marker]:hidden">
            <span className="font-medium">{it.q}</span>
            <Plus
              size={18}
              className="shrink-0 text-zinc-500 transition-transform group-open:rotate-45 group-open:text-accent"
            />
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed">{it.a}</p>
        </details>
      ))}
    </motion.div>
  );
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="section border-t border-white/[0.06]">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Antes de empezar</h2>
        </div>
        <FAQList items={items} />
      </div>
    </section>
  );
}
