import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../../data/siteData";

export default function StickyMobileCTA() {
  return (
    <a
      href={whatsappLink("Hola Josué, vi tu web y me gustaría hablar contigo.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-ink-950 shadow-lg shadow-black/40 md:hidden"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
