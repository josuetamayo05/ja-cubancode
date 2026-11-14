import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { siteData } from "../../data/siteData";
import type { Project } from "../../data/siteData.types";
import { reveal } from "../../lib/motion";
import SectionHeader from "../ui/SectionHeader";

function TechList({ tech, limit }: { tech: string[]; limit?: number }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      {...reveal}
      className="card group grid overflow-hidden lg:grid-cols-[1.35fr_1fr]"
    >
      <Link
        to={`/proyectos/${project.slug}`}
        className="relative block overflow-hidden border-b border-white/[0.07] bg-ink-850 lg:border-b-0 lg:border-r"
        tabIndex={-1}
        aria-hidden
      >
        {project.cover && (
          <img
            src={project.cover.src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}
      </Link>

      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow">Proyecto destacado</span>
          {project.status && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
              {project.status}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-zinc-500">{project.kind}</p>
        <p className="mt-4 leading-relaxed">{project.summary}</p>

        {project.caseStudy && (
          <ul className="mt-5 space-y-2 text-sm">
            {project.caseStudy.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <TechList tech={project.tech} />
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Link to={`/proyectos/${project.slug}`} className="btn-primary">
            Ver caso de estudio <ArrowRight size={16} />
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              Ver demo <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article {...reveal} className="h-full">
      <Link
        to={`/proyectos/${project.slug}`}
        className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-white/20"
      >
        <div className="aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-ink-850">
          {project.cover && (
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
            {project.client ?? project.kind}
          </p>
          <h3 className="mt-2 flex items-center justify-between gap-3 text-lg font-semibold">
            {project.title}
            <ArrowUpRight
              size={18}
              className="shrink-0 text-zinc-500 transition-colors group-hover:text-accent"
            />
          </h3>
          <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>
          <div className="mt-auto pt-5">
            <TechList tech={project.tech} limit={4} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function OtherProject({ project }: { project: Project }) {
  return (
    <li className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr_auto] sm:items-start sm:gap-8">
      <div>
        <h4 className="font-semibold">{project.title}</h4>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
          {project.kind}
        </p>
      </div>
      <div>
        <p className="text-sm leading-relaxed">{project.summary}</p>
        <div className="mt-3">
          <TechList tech={project.tech} />
        </div>
      </div>
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-accent"
        >
          <FaGithub size={15} /> Código
        </a>
      )}
    </li>
  );
}

export default function Projects() {
  const featured = siteData.projects.filter((p) => p.featured);
  const caseStudies = siteData.projects.filter((p) => !p.featured && p.caseStudy);
  const others = siteData.projects.filter((p) => !p.featured && !p.caseStudy);

  return (
    <section id="proyectos" className="section border-t border-white/[0.06]">
      <div className="container-page">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo real, para negocios reales."
          desc="Una selección de lo que he construido: productos propios, webs para clientes y software a medida."
        />

        <div className="space-y-6">
          {featured.map((p) => (
            <FeaturedProject key={p.slug} project={p} />
          ))}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>

        {others.length > 0 && (
          <motion.div {...reveal} className="mt-20">
            <h3 className="eyebrow">Más proyectos</h3>
            <p className="mt-3 max-w-2xl">
              Apps móviles, automatización y software de escritorio.
            </p>
            <ul className="mt-6 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {others.map((p) => (
                <OtherProject key={p.slug} project={p} />
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
