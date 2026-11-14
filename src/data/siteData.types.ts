import type { LucideIcon } from "lucide-react";

export type FAQItem = { q: string; a: string };

export type Image = { src: string; alt: string };

export type ProjectCategory = "web" | "app" | "software";

export type CaseStudy = {
  /** Situación del cliente / problema a resolver */
  context: string;
  /** Qué se construyó y cómo */
  solution: string;
  /** Funcionalidades o decisiones técnicas destacables */
  highlights: string[];
  /** Qué parte hiciste tú */
  role: string;
  /** Próximos pasos (opcional) */
  next?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Cliente o tipo de negocio, ej: "Inmobiliaria · La Habana" */
  client?: string;
  /** Etiqueta corta del tipo de producto, ej: "SaaS · PWA" */
  kind: string;
  category: ProjectCategory;
  year?: string;
  /** Ej: "En evolución" */
  status?: string;
  summary: string;
  tech: string[];
  cover?: Image;
  gallery?: Image[];
  liveUrl?: string;
  repoUrl?: string;
  /** Proyecto principal (se muestra en grande) */
  featured?: boolean;
  /** Si tiene caso de estudio, se genera la página /proyectos/:slug */
  caseStudy?: CaseStudy;
};

export type ServiceDetails = {
  subtitle: string;
  features: string[];
  deliverables: string[];
  faq?: FAQItem[];
};

export type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  /** Etiqueta opcional, ej: "Nuevo" */
  badge?: string;
  details: ServiceDetails;
};

export type SkillGroup = { title: string; items: string[] };

export type SiteData = {
  person: {
    name: string;
    role: string;
    location: string;
    availability: string;
    photo: Image;
    /** Opcionales: se muestran automáticamente cuando tengan valor */
    email?: string;
    linkedin?: string;
    cvUrl?: string;
  };
  brand: {
    name: string;
    siteUrl: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    instagram: string;
    facebook: string;
    github: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    intro: string;
    stats: { value: string; label: string }[];
  };
  about: {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  skills: SkillGroup[];
  projects: Project[];
  services: Service[];
  process: { step: string; title: string; desc: string }[];
  faq: FAQItem[];
};
