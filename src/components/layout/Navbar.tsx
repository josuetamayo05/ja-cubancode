import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "../../data/siteData";
import Logo from "../ui/Logo";

const navItems = [
  { label: "Sobre mí", hash: "sobre-mi" },
  { label: "Proyectos", hash: "proyectos" },
  { label: "Servicios", hash: "servicios" },
  { label: "Contacto", hash: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const activeHash = location.pathname === "/" ? location.hash.slice(1) : "";
  const isOnProject = location.pathname.startsWith("/proyectos");
  const isOnService = location.pathname.startsWith("/servicios");

  const isActive = (hash: string) =>
    activeHash === hash ||
    (hash === "proyectos" && isOnProject) ||
    (hash === "servicios" && isOnService);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || isOpen
          ? "border-white/[0.07] bg-ink-950/85 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" onClick={close} aria-label="Ir al inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to={`/#${item.hash}`}
              className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                isActive(item.hash)
                  ? "text-zinc-50"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink("Hola Josué, vi tu web y me gustaría hablar contigo.")}
          target="_blank"
          rel="noreferrer"
          className="btn-primary hidden py-2 md:inline-flex"
        >
          Hablemos
        </a>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-100 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="h-[calc(100dvh-4rem)] border-t border-white/[0.07] bg-ink-950 md:hidden">
          <nav className="container-page flex flex-col py-6" aria-label="Principal">
            {navItems.map((item) => (
              <Link
                key={item.hash}
                to={`/#${item.hash}`}
                onClick={close}
                className="border-b border-white/[0.06] py-4 text-2xl font-medium text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hola Josué, vi tu web y me gustaría hablar contigo.")}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="btn-primary mt-8 py-3.5"
            >
              Escribir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
