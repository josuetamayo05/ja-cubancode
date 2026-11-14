import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { siteData } from "../../data/siteData";

const socials = [
  { href: siteData.brand.github, label: "GitHub", Icon: FaGithub },
  { href: siteData.brand.instagram, label: "Instagram", Icon: FaInstagram },
  { href: siteData.brand.facebook, label: "Facebook", Icon: FaFacebook },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {siteData.person.name} · {siteData.brand.name}
        </p>
        <div className="flex gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
