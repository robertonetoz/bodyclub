"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AppleIcon, PlayStoreIcon } from "./Icons";
import { site } from "@/data/site";

const recursos = [
  "Veja o treino do dia montado pelo seu instrutor",
  "Registre cargas e acompanhe a evolução",
  "Acumule pontos a cada treino",
  "Pague a mensalidade pelo celular",
];

const treino = [
  { nome: "Supino reto", series: "4 × 10", feito: true },
  { nome: "Crucifixo inclinado", series: "3 × 12", feito: true },
  { nome: "Tríceps corda", series: "4 × 12", feito: false },
  { nome: "Paralelas", series: "3 × falha", feito: false },
];

export function AppTecnofit() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0.1, 0.5], reduce ? [0, 0] : [-14, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [0, 0, 0] : [160, 0, -80]);
  const ghostY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["30%", "-30%"]);

  return (
    <section ref={ref} id="app" className="relative overflow-hidden bg-body py-24 text-ferro md:py-32">
      <motion.p
        aria-hidden
        style={{ y: ghostY }}
        className="display pointer-events-none absolute -right-[4vw] top-0 select-none text-[34vw] leading-none text-ferro/[0.06]"
      >
        App
      </motion.p>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <h2 className="display text-[clamp(3rem,8vw,7.5rem)]">A academia na palma da sua mão</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ferro/75">
            A Body Club usa o app Tecnofit. Baixe, entre com seu cadastro e leve o treino no bolso.
          </p>
          <ul className="mt-8 space-y-3">
            {recursos.map((r) => (
              <li key={r} className="flex items-start gap-3 text-base font-medium md:text-lg">
                <span aria-hidden className="mt-2.5 block h-[3px] w-5 shrink-0 bg-ferro" />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.links.appIos}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-ferro px-6 py-3.5 text-giz transition-colors hover:bg-chumbo"
            >
              <AppleIcon className="size-6" />
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] text-giz/70">Baixar na</span>
                <span className="text-base font-semibold">App Store</span>
              </span>
            </a>
            <a
              href={site.links.appAndroid}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-ferro px-6 py-3.5 text-giz transition-colors hover:bg-chumbo"
            >
              <PlayStoreIcon className="size-6" />
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] text-giz/70">Disponível no</span>
                <span className="text-base font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>

        <motion.div style={{ rotate, y }} className="mx-auto w-[min(300px,78vw)]">
          {/* Celular ilustrativo */}
          <div className="rounded-[44px] bg-ferro p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="relative overflow-hidden rounded-[34px] bg-grafite px-5 pb-8 pt-12 text-giz">
              <span className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-ferro" />
              <p className="text-xs text-aco">Quinta-feira</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">Treino de hoje</p>
              <p className="text-sm text-giz/70">Peito e tríceps</p>

              <div className="mt-5 flex items-center justify-between bg-body px-4 py-3 text-ferro">
                <span className="text-sm font-semibold">Seus pontos</span>
                <span className="display text-3xl">1.240</span>
              </div>

              <ul className="mt-5 divide-y divide-giz/10">
                {treino.map((t) => (
                  <li key={t.nome} className="flex items-center gap-3 py-3">
                    <span
                      className={`grid size-5 shrink-0 place-items-center border ${
                        t.feito ? "border-body bg-body text-ferro" : "border-giz/30"
                      }`}
                    >
                      {t.feito && (
                        <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m2.5 6.5 2.2 2L9.5 3.5" />
                        </svg>
                      )}
                    </span>
                    <span className={`flex-1 text-sm ${t.feito ? "text-giz/50 line-through" : ""}`}>{t.nome}</span>
                    <span className="text-xs tabular-nums text-aco">{t.series}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 h-1.5 w-full bg-chumbo">
                <div className="h-full w-1/2 bg-body" />
              </div>
              <p className="mt-2 text-xs text-aco">2 de 4 exercícios</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
