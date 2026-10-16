"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { WhatsAppIcon } from "./Icons";
import { site } from "@/data/site";

export function WhatsAppButton() {
  const { scrollY } = useScroll();
  // Aparece depois que o visitante sai do topo
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const scale = useTransform(scrollY, [300, 500], [0.6, 1]);
  const pointerEvents = useTransform(opacity, (o) => (o > 0.5 ? "auto" : "none"));

  return (
    <motion.a
      href={site.links.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Body Club no WhatsApp"
      style={{ opacity, scale, pointerEvents }}
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="size-7" />
    </motion.a>
  );
}
