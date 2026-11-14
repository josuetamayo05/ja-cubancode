import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import type { ComponentType } from "react";
import { siteData, whatsappLink } from "../../data/siteData";
import { reveal } from "../../lib/motion";

type Channel = {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
};

export default function Contact() {
  const { person, brand } = siteData;

  const channels: Channel[] = [
    {
      label: "WhatsApp",
      value: brand.whatsappDisplay,
      href: whatsappLink("Hola Josué, vi tu web y me gustaría hablar contigo."),
      Icon: FaWhatsapp,
    },
    ...(person.email
      ? [{ label: "Email", value: person.email, href: `mailto:${person.email}`, Icon: Mail }]
      : []),
    ...(person.linkedin
      ? [{ label: "LinkedIn", value: "Ver perfil", href: person.linkedin, Icon: FaLinkedin }]
      : []),
    { label: "GitHub", value: "@josuetamayo05", href: brand.github, Icon: FaGithub },
    { label: "Instagram", value: "@jacubancode", href: brand.instagram, Icon: FaInstagram },
  ];

  return (
    <section id="contacto" className="section border-t border-white/[0.06]">
      <div className="container-page">
        <motion.div
          {...reveal}
          className="card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                ¿Tienes un proyecto o una oferta?
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed sm:text-lg">
                Cuéntame qué necesitas: un producto nuevo, mejorar uno existente o sumar a
                alguien a tu equipo. Respondo normalmente en menos de 24 horas.
              </p>
              <a
                href={whatsappLink("Hola Josué, vi tu web y me gustaría hablar contigo.")}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8 px-6 py-3.5"
              >
                <FaWhatsapp size={18} /> Escribir por WhatsApp
              </a>
            </div>

            <ul className="divide-y divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-ink-950/50">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03]"
                  >
                    <Icon size={18} className="text-zinc-400 group-hover:text-accent" />
                    <span className="flex-1">
                      <span className="block text-xs text-zinc-500">{label}</span>
                      <span className="block text-sm font-medium text-zinc-100">{value}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
