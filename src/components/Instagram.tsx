"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { InstagramIcon } from "./Icons";
import { site } from "@/data/site";

export function Instagram() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xA = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-35%"]);
  const xB = useTransform(scrollYProgress, [0, 1], reduce ? ["-35%", "-35%"] : ["-35%", "0%"]);

  const handle = `@${site.instagramHandle}`;
  const repeated = Array.from({ length: 6 }, () => handle);

  return (
    <section ref={ref} id="instagram" className="relative overflow-hidden bg-grafite py-24 md:py-36">
      <div aria-hidden className="select-none">
        <motion.p style={{ x: xA }} className="display whitespace-nowrap text-[clamp(5rem,15vw,14rem)] text-body">
          {repeated.join("  ")}
        </motion.p>
        <motion.p
          style={{ x: xB }}
          className="display whitespace-nowrap text-[clamp(5rem,15vw,14rem)] text-transparent [-webkit-text-stroke:1.5px_var(--color-giz)]"
        >
          {repeated.join("  ")}
        </motion.p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] gap-10 px-4 md:mt-24 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
        <h2 className="text-[clamp(2.2rem,4.4vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          Dicas de treino, bastidores e novidades. Tudo sai primeiro no Instagram.
        </h2>
        <div>
          <p className="max-w-md text-lg leading-relaxed text-giz/70">
            São {site.instagramFollowers} pessoas acompanhando os treinos, os eventos, os convênios e o dia a dia da equipe. Siga e treine junto com a gente fora da academia também.
          </p>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-3 bg-body px-7 py-4 text-base font-semibold text-ferro transition-colors hover:bg-giz"
          >
            <InstagramIcon className="size-5" />
            Seguir {handle}
          </a>
        </div>
      </div>
    </section>
  );
}
