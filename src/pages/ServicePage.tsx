import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteData, whatsappLink } from "../data/siteData";
import { fadeUp, reveal } from "../lib/motion";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import { FAQList } from "../components/sections/FAQ";
import NotFound from "./NotFound";

/** Enlaces antiguos que ahora apuntan a otro servicio. */
const legacySlugs: Record<string, string> = {
  ecommerce: "web",
  restaurantes: "web",
};

export default function ServicePage() {
  const { slug = "" } = useParams();
  const service = siteData.services.find((s) => s.slug === slug);

  useDocumentTitle(service?.title ?? "Servicio no encontrado");

  if (legacySlugs[slug]) {
    return <Navigate to={`/servicios/${legacySlugs[slug]}`} replace />;
  }

  if (!service) {
    return <NotFound title="Servicio no encontrado" />;
  }

  const Icon = service.icon;
  const { details } = service;
  const relatedProjects = siteData.projects.filter((p) => p.caseStudy).slice(0, 3);

  return (
    <article className="pb-24 pt-28 sm:pt-32">
      <div className="container-page">
        <Link
          to="/#servicios"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <ArrowLeft size={16} /> Todos los servicios
        </Link>

        <motion.header initial="hidden" animate="visible" variants={fadeUp} className="mt-8 max-w-3xl">
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.08] bg-ink-900 text-accent">
            <Icon size={22} />
          </span>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{service.title}</h1>
          <p className="mt-5 text-lg leading-relaxed">{details.subtitle}</p>
          <a
            href={whatsappLink(`Hola Josué, me interesa el servicio de ${service.title}.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 px-6 py-3.5"
          >
            <FaWhatsapp size={18} /> Hablemos de tu proyecto
          </a>
        </motion.header>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.section {...reveal} className="card p-7">
            <h2 className="eyebrow">Qué puedo hacer</h2>
            <ul className="mt-5 space-y-3">
              {details.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section {...reveal} className="card p-7">
            <h2 className="eyebrow">Qué recibes</h2>
            <ul className="mt-5 space-y-3">
              {details.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {details.faq && details.faq.length > 0 && (
          <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
            <FAQList items={details.faq} />
          </section>
        )}

        <section className="mt-20">
          <h2 className="eyebrow">Trabajos recientes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/proyectos/${p.slug}`}
                className="card group overflow-hidden transition-colors hover:border-white/20"
              >
                {p.cover && (
                  <img
                    src={p.cover.src}
                    alt={p.cover.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full border-b border-white/[0.07] object-cover object-top"
                  />
                )}
                <div className="p-4">
                  <p className="font-medium text-zinc-100">{p.title}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{p.kind}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="eyebrow">Otros servicios</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteData.services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-zinc-50"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </article>
  );
}
