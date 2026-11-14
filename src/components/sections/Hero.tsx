import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { siteData, whatsappLink } from "../../data/siteData";
import { fadeUp } from "../../lib/motion";

export default function Hero() {
  const { person, hero, brand } = siteData;
  const featured = siteData.projects.find((p) => p.featured);

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      {/* Fondo: rejilla sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </p>

          <p className="mt-8 font-mono text-sm text-accent">
            {person.name} — {person.role}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">{hero.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/#proyectos" className="btn-primary">
              Ver proyectos <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappLink("Hola Josué, vi tu web y me gustaría hablar contigo.")}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Hablemos
            </a>
            {person.cvUrl && (
              <a href={person.cvUrl} download className="btn-ghost">
                <Download size={16} /> Descargar CV
              </a>
            )}
            <a
              href={brand.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn-ghost px-3"
            >
              <FaGithub size={18} />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.07] pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold text-zinc-50 sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-850">
            <img
              src={person.photo.src}
              alt={person.photo.alt}
              className="h-full w-full object-cover object-top"
              width={927}
              height={1055}
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/80 to-transparent" />
          </div>

          {featured && (
            <Link
              to={`/proyectos/${featured.slug}`}
              className="group absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink-900/90 p-4 backdrop-blur-md transition-colors hover:border-accent/40 sm:left-6 sm:right-auto sm:min-w-[18rem]"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Ahora construyendo
                </span>
                <span className="mt-1 block text-sm font-medium text-zinc-100">
                  {featured.title} · {featured.kind}
                </span>
              </span>
              <ArrowRight
                size={16}
                className="text-accent transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
