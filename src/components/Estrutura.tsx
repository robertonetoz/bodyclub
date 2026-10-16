"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Photo } from "./Photo";
import { estrutura } from "@/data/site";

export function Estrutura() {
  const reduce = useReducedMotion();
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);
  const reveal = useTransform(scrollYProgress, [0, 0.35], reduce ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"] : ["inset(18% 10% 18% 10%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section id="estrutura" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="display text-[clamp(3rem,7.5vw,7rem)]">
            Tudo que o treino pede, no mesmo lugar.
          </h2>
          <motion.div ref={photoRef} style={{ clipPath: reveal }} className="mt-10 overflow-hidden">
            <motion.div style={{ y, scale: 1.25 }}>
              <Photo
                src="/images/estrutura.jpg"
                alt="Sala de musculação da Body Club"
                label="Foto da estrutura"
                className="aspect-[4/3] w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </motion.div>
        </div>

        <ul className="lg:pt-4">
          {estrutura.map((item, i) => (
            <motion.li
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative py-7 md:py-9"
            >
              <motion.span
                aria-hidden
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-0 h-px origin-left bg-giz/20"
              />
              <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-body md:text-[2rem]">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-giz/65 md:text-lg">{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
