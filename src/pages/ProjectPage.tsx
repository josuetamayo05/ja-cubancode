import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { siteData, whatsappLink } from "../data/siteData";
import { fadeUp, reveal } from "../lib/motion";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams();
  const caseStudies = siteData.projects.filter((p) => p.caseStudy);
  const index = caseStudies.findIndex((p) => p.slug === slug);
  const project = caseStudies[index];

  useDocumentTitle(project?.title ?? "Proyecto no encontrado");

  if (!project?.caseStudy) {
    return <NotFound title="Proyecto no encontrado" />;
  }

  const cs = project.caseStudy;
  const next = caseStudies[(index + 1) % caseStudies.length];

  const meta = [
    { label: "Tipo", value: project.kind },
    ...(project.client ? [{ label: "Cliente", value: project.client }] : []),
    ...(project.year ? [{ label: "Año", value: project.year }] : []),
    { label: "Rol", value: cs.role },
  ];

  return (
    <article className="pb-24 pt-28 sm:pt-32">
      <div className="container-page">
        <Link
          to="/#proyectos"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <ArrowLeft size={16} /> Todos los proyectos
        </Link>

        <motion.header initial="hidden" animate="visible" variants={fadeUp} className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow">Caso de estudio</span>
            {project.status && (
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                {project.status}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Ver en vivo <ArrowUpRight size={16} />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <FaGithub size={16} /> Código
              </a>
            )}
          </div>
        </motion.header>

        {project.cover && (
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850"
          >
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              className="w-full"
              fetchPriority="high"
            />
          </motion.figure>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <motion.aside {...reveal} className="lg:sticky lg:top-24 lg:self-start">
            <dl className="card divide-y divide-white/[0.06]">
              {meta.map((m) => (
                <div key={m.label} className="px-6 py-4">
                  <dt className="text-xs text-zinc-500">{m.label}</dt>
                  <dd className="mt-1 text-sm text-zinc-100">{m.value}</dd>
                </div>
              ))}
              <div className="px-6 py-4">
                <dt className="text-xs text-zinc-500">Stack</dt>
                <dd className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </motion.aside>

          <div className="space-y-14">
            <motion.section {...reveal}>
              <h2 className="eyebrow">El reto</h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">{cs.context}</p>
            </motion.section>

            <motion.section {...reveal}>
              <h2 className="eyebrow">La solución</h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">{cs.solution}</p>
            </motion.section>

            <motion.section {...reveal}>
              <h2 className="eyebrow">Lo más destacado</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {cs.highlights.map((h) => (
                  <li key={h} className="card flex gap-3 p-4 text-sm leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.section>

            {cs.next && (
              <motion.section {...reveal}>
                <h2 className="eyebrow">Próximos pasos</h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">{cs.next}</p>
              </motion.section>
            )}

            {project.gallery?.map((img) => (
              <motion.figure
                {...reveal}
                key={img.src}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-4 border-t border-white/[0.07] pt-10 sm:grid-cols-2">
          <a
            href={whatsappLink(`Hola Josué, vi el proyecto ${project.title} y quiero algo parecido.`)}
            target="_blank"
            rel="noreferrer"
            className="card group p-6 transition-colors hover:border-white/20"
          >
            <span className="text-xs text-zinc-500">¿Necesitas algo parecido?</span>
            <span className="mt-2 flex items-center justify-between text-lg font-semibold text-zinc-50">
              Hablemos de tu proyecto
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-accent" />
            </span>
          </a>
          {next && next.slug !== project.slug && (
            <Link
              to={`/proyectos/${next.slug}`}
              className="card group p-6 transition-colors hover:border-white/20"
            >
              <span className="text-xs text-zinc-500">Siguiente proyecto</span>
              <span className="mt-2 flex items-center justify-between text-lg font-semibold text-zinc-50">
                {next.title}
                <ArrowRight size={18} className="text-zinc-500 group-hover:text-accent" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
