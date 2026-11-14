import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";
import { reveal } from "../../lib/motion";
import SectionHeader from "../ui/SectionHeader";

export default function Process() {
  return (
    <section id="proceso" className="section border-t border-white/[0.06]">
      <div className="container-page">
        <SectionHeader eyebrow="Cómo trabajo" title="Un proceso claro, sin sorpresas." />

        <motion.ol {...reveal} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.process.map((p) => (
            <li key={p.step} className="border-t border-white/10 pt-6">
              <span className="font-mono text-sm text-accent">{p.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
