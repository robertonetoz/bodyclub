"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Photo } from "./Photo";
import { StarIcon, WhatsAppIcon } from "./Icons";
import { useOpenStatus } from "./useOpenStatus";
import { site } from "@/data/site";

const manifesto =
  "Qualidade de vida, mais perto de você. Tem dia que o treino não é sobre performance, é sobre você. Às vezes, quarenta minutos de movimento fazem mais pela cabeça do que a gente imagina.";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return reduce ? <HeroStatic /> : <HeroScroll />;
}

function HeroScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Foto da fachada aproxima e escurece
  const photoScale = useTransform(p, [0, 0.4], [1.04, 1.3]);
  // Conteúdo inicial sobe e some
  const introY = useTransform(p, [0, 0.14], [0, -120]);
  const introOpacity = useTransform(p, [0, 0.11], [1, 0]);
  // Placa amarela cresce do centro até cobrir a tela
  const inset = useTransform(p, [0.08, 0.4], [50, 0]);
  const radius = useTransform(p, [0.08, 0.38, 0.4], [24, 24, 0]);
  const clipPath = useTransform(
    [inset, radius] as MotionValue<number>[],
    ([i, r]: number[]) => `inset(${i}% ${i}% ${i}% ${i}% round ${r}px)`,
  );
  // "BODY CLUB" dentro da placa
  const wordScale = useTransform(p, [0.08, 0.4], [0.35, 1]);
  const wordOpacity = useTransform(p, [0.42, 0.5], [1, 0]);
  const wordY = useTransform(p, [0.42, 0.5], [0, -60]);
  const hintOpacity = useTransform(p, [0, 0.05], [1, 0]);

  const words = manifesto.split(" ");

  return (
    <section ref={ref} id="inicio" className="relative h-[380vh]" aria-label="Body Club">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={{ scale: photoScale }} className="absolute inset-0">
          <Photo
            src="/images/fachada.jpg"
            alt="Fachada da Body Club em Araguari"
            label="Foto da fachada (fundo do topo)"
            priority
            placeholderClassName="items-end justify-start pt-28 md:pr-10"
            className="size-full"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ferro via-ferro/50 to-ferro/30" />

        <motion.div
          style={{ y: introY, opacity: introOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-20 md:px-8 md:pb-24"
        >
          <HeroIntro />
        </motion.div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-giz/70 md:flex"
        >
          Role para entrar
          <span className="relative block h-10 w-px overflow-hidden bg-giz/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[drop_1.6s_ease-in-out_infinite] bg-body" />
          </span>
        </motion.div>

        {/* A placa */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-body text-ferro"
        >
          <motion.p
            aria-hidden
            style={{ scale: wordScale, opacity: wordOpacity, y: wordY }}
            className="display absolute text-center text-[34vw] leading-[0.78] md:text-[24vw]"
          >
            Body
            <br />
            Club
          </motion.p>

          <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-8">
            <p className="max-w-[20ch] text-[clamp(2rem,5.4vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.03em] [font-stretch:88%]">
              {words.map((w, i) => (
                <Word key={i} progress={p} range={[0.5 + (i / words.length) * 0.38, 0.5 + ((i + 1) / words.length) * 0.38]}>
                  {w}
                </Word>
              ))}
            </p>
            <Signoff progress={p} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
}

function Signoff({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.88, 0.94], [0, 1]);
  const x = useTransform(progress, [0.88, 0.96], [-40, 0]);
  return (
    <motion.p style={{ opacity, x }} className="display mt-8 text-[clamp(2.4rem,7vw,6.5rem)] md:mt-12">
      Muito mais do que puxar peso.
    </motion.p>
  );
}

function HeroIntro() {
  const status = useOpenStatus();
  const lines = ["O seu jeito", "de treinar."];

  return (
    <>
      <h1 className="display text-[clamp(4.2rem,15vw,15rem)]">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.04em]">
            <motion.span
              className="block"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.15 + i * 0.12, duration: 1, ease }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.8, ease }}
        className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between"
      >
        <div className="max-w-md space-y-4">
          <p className="text-lg leading-relaxed text-giz/85 md:text-xl">
            Academia completa em Araguari. Musculação, circuitos funcionais e avaliação física, todos os dias da semana.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-giz/75">
            <span className="inline-flex items-center gap-2">
              <span
                className={`size-2 rounded-full ${status?.open ? "bg-[#3ddc84]" : status ? "bg-aco" : "bg-transparent"}`}
              />
              {status?.text ?? " "}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <StarIcon className="size-4 text-body" />
              {site.rating.google.score} no Google, {site.rating.google.count} avaliações
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={site.links.preCadastro}
            target="_blank"
            rel="noreferrer"
            className="bg-body px-7 py-4 text-base font-semibold text-ferro transition-colors hover:bg-giz"
          >
            Fazer pré-cadastro
          </a>
          <a
            href={site.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-giz/30 px-6 py-4 text-base font-medium text-giz transition-colors hover:border-body hover:text-body"
          >
            <WhatsAppIcon className="size-5" />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </>
  );
}

// Versão sem animação de rolagem (para quem prefere movimento reduzido)
function HeroStatic() {
  return (
    <>
      <section id="inicio" className="relative min-h-svh" aria-label="Body Club">
        <Photo
          src="/images/fachada.jpg"
          alt="Fachada da Body Club em Araguari"
          label="Foto da fachada (fundo do topo)"
          priority
          placeholderClassName="items-end justify-start pt-28 md:pr-10"
          className="!absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ferro via-ferro/50 to-ferro/30" />
        <div className="relative mx-auto flex min-h-svh max-w-[1400px] flex-col justify-end px-4 pb-20 pt-32 md:px-8">
          <HeroIntro />
        </div>
      </section>
      <section className="bg-body py-28 text-ferro">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8">
          <p className="max-w-[20ch] text-[clamp(2rem,5.4vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            {manifesto}
          </p>
          <p className="display mt-10 text-[clamp(2.4rem,7vw,6.5rem)]">Muito mais do que puxar peso.</p>
        </div>
      </section>
    </>
  );
}
