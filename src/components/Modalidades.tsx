"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Photo } from "./Photo";
import { modalidades } from "@/data/site";

export function Modalidades() {
  const reduce = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Quanto a faixa precisa andar para mostrar o último card
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const bar = useSpring(useTransform(scrollYProgress, [0.05, 0.95], [0, 1]), { stiffness: 200, damping: 40 });

  if (reduce) {
    return (
      <section id="modalidades" className="py-24">
        <Header />
        <div className="mx-auto mt-12 grid max-w-[1400px] gap-6 px-4 md:grid-cols-2 md:px-8">
          {modalidades.map((m, i) => (
            <Card key={m.title} m={m} i={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={section}
      id="modalidades"
      className="relative"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden py-20">
        <Header />
        <motion.div ref={track} style={{ x }} className="mt-10 flex w-max gap-5 px-4 md:mt-14 md:gap-8 md:px-8">
          {modalidades.map((m, i) => (
            <Card key={m.title} m={m} i={i} />
          ))}
          <div aria-hidden className="w-[10vw] shrink-0" />
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-[1400px] px-4 md:px-8">
          <div className="h-[3px] w-full bg-chumbo">
            <motion.div style={{ scaleX: bar }} className="h-full origin-left bg-body" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between md:px-8">
      <h2 className="display text-[clamp(3.2rem,9vw,8.5rem)]">
        Modalidades
      </h2>
      <p className="max-w-sm text-base leading-relaxed text-giz/70 md:pb-3 md:text-lg">
        Musculação e circuitos sem hora marcada. Avaliação, personal e nutrição para quem quer ir mais longe.
      </p>
    </div>
  );
}

function Card({ m, i }: { m: (typeof modalidades)[number]; i: number }) {
  return (
    <article className="group relative flex w-[82vw] shrink-0 flex-col bg-grafite sm:w-[60vw] lg:w-[34vw]">
      <Photo
        src={m.image}
        alt={m.title}
        label={`Foto: ${m.title}`}
        className="h-[32svh] w-full md:h-[38svh]"
        imgClassName="transition-transform duration-700 ease-[var(--ease-plate)] group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-4xl md:text-5xl">{m.title}</h3>
          <span className="text-sm tabular-nums text-aco">
            {i + 1}/{modalidades.length}
          </span>
        </div>
        <p className="max-w-[46ch] text-[15px] leading-relaxed text-giz/70 md:text-base">{m.text}</p>
      </div>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-body transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}
