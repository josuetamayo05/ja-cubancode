import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";
import { reveal } from "../../lib/motion";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  const { about, skills } = siteData;

  return (
    <section id="sobre-mi" className="section border-t border-white/[0.06]">
      <div className="container-page">
        <SectionHeader eyebrow="Sobre mí" title="Del problema del negocio al producto en producción." />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.div {...reveal} className="space-y-5 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <motion.dl {...reveal} className="card divide-y divide-white/[0.06] self-start">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 px-6 py-4">
                <dt className="text-sm text-zinc-500">{f.label}</dt>
                <dd className="text-right text-sm font-medium text-zinc-100">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div {...reveal} className="mt-16">
          <h3 className="eyebrow">Stack</h3>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div key={group.title} className="bg-ink-900 p-6">
                <h4 className="text-sm font-semibold">{group.title}</h4>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
