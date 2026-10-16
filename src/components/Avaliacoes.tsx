"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowIcon, StarIcon } from "./Icons";
import { avaliacoes, site } from "@/data/site";

type Review = (typeof avaliacoes)[number];

export function Avaliacoes() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xA = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["4%", "-30%"]);
  const xB = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-30%", "4%"]);

  const rowA = avaliacoes.filter((_, i) => i % 2 === 0);
  const rowB = avaliacoes.filter((_, i) => i % 2 === 1);

  return (
    <section ref={ref} id="avaliacoes" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex items-end gap-5">
          <span className="display text-[clamp(6rem,16vw,13rem)] text-body">{site.rating.google.score}</span>
          <div className="pb-[1.2em]">
            <div className="flex gap-1 text-body">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-5 md:size-6" />
              ))}
            </div>
            <p className="mt-2 text-base text-giz/75 md:text-lg">
              {site.rating.google.count} avaliações no Google
            </p>
            <p className="text-sm text-aco">
              {site.rating.wellhub.score} no Wellhub, {site.rating.wellhub.count} avaliações
            </p>
          </div>
        </div>
        <div className="max-w-sm md:pb-6">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            Quem treina aqui fala da estrutura e, principalmente, da equipe.
          </h2>
          <a
            href={site.links.googleReviews}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 border-b border-body pb-1 text-base text-body hover:text-giz"
          >
            Ver avaliações no Google
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-5 md:mt-24">
        <motion.ul style={{ x: xA }} className="flex w-max gap-5 pl-4 md:pl-8">
          {rowA.map((r) => (
            <Card key={r.name} r={r} />
          ))}
        </motion.ul>
        <motion.ul style={{ x: xB }} className="flex w-max gap-5 pl-4 md:pl-[20vw]">
          {rowB.map((r) => (
            <Card key={r.name} r={r} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <li className="flex w-[82vw] shrink-0 flex-col justify-between gap-8 border-l-4 border-body bg-grafite p-6 sm:w-[440px] md:p-8">
      <p className="text-lg leading-relaxed text-giz/90">“{r.text}”</p>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold">{r.name}</p>
          <p className="text-sm text-aco">{r.when}</p>
        </div>
        <div className="flex gap-0.5 text-body" aria-label="5 estrelas">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-3.5" />
          ))}
        </div>
      </div>
    </li>
  );
}
