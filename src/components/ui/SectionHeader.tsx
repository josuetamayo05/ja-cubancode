import { motion } from "framer-motion";
import { reveal } from "../../lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  desc?: string;
};

export default function SectionHeader({ eyebrow, title, desc }: Props) {
  return (
    <motion.div {...reveal} className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed sm:text-lg">{desc}</p>}
    </motion.div>
  );
}
