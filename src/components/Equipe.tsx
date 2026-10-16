"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/data/site";

export function Equipe() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"] : ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <section ref={ref} aria-labelledby="equipe-titulo" className="px-4 md:px-8">
      <motion.div style={{ clipPath }} className="mx-auto max-w-[1400px] bg-body text-ferro">
        <div className="flex flex-col gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-14">
          <div>
            <h2 id="equipe-titulo" className="display text-[clamp(2.6rem,6vw,5.5rem)]">
              Trabalhe com a gente
            </h2>
            <p className="mt-4 max-w-lg text-lg text-ferro/75">
              Instrutores, personais, recepção. Se você quer transformar vidas pelo treino, preencha o formulário e faça parte da equipe Body Club.
            </p>
          </div>
          <a
            href={site.links.trabalheConosco}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-ferro px-7 py-4 text-center font-semibold text-giz transition-colors hover:bg-chumbo"
          >
            Enviar meu currículo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
