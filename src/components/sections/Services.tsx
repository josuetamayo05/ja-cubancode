import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../../data/siteData";
import { reveal } from "../../lib/motion";
import SectionHeader from "../ui/SectionHeader";

export default function Services() {
  return (
    <section id="servicios" className="section border-t border-white/[0.06]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Servicios"
          title="¿Necesitas desarrollar algo? Puedo ayudarte."
          desc="Trabajo con negocios y emprendedores que necesitan una web, una app o una herramienta a medida. Cada proyecto se cotiza según su alcance."
        />

        <motion.div
          {...reveal}
          className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteData.services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/servicios/${s.slug}`}
                className="group relative flex flex-col bg-ink-900 p-7 transition-colors hover:bg-ink-850"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-ink-850 text-accent">
                    <Icon size={18} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-600 transition-colors group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-6 flex items-center gap-2 text-base font-semibold">
                  {s.title}
                  {s.badge && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      {s.badge}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
