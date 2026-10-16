"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useLenis } from "lenis/react";
import { Photo } from "./Photo";
import { galeria } from "@/data/site";

type Item = (typeof galeria)[number] & { index: number };

export function Galeria() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Três colunas andando em velocidades diferentes
  const speeds = reduce ? [0, 0, 0] : [-8, 14, -18];
  const y0 = useTransform(scrollYProgress, [0, 1], [`${-speeds[0]}%`, `${speeds[0]}%`]);
  const y1 = useTransform(scrollYProgress, [0, 1], [`${-speeds[1]}%`, `${speeds[1]}%`]);
  const y2 = useTransform(scrollYProgress, [0, 1], [`${-speeds[2]}%`, `${speeds[2]}%`]);

  const items: Item[] = galeria.map((g, index) => ({ ...g, index }));
  const cols = [0, 1, 2].map((c) => items.filter((_, i) => i % 3 === c));

  return (
    <section ref={ref} id="galeria" className="relative overflow-hidden pb-48 pt-24 md:pb-64 md:pt-36">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <h2 className="display text-[clamp(3.2rem,9vw,8.5rem)]">Galeria</h2>
        <p className="max-w-sm text-base leading-relaxed text-giz/70 md:pb-3 md:text-lg">
          Por dentro da Body Club. Toque em uma foto para ampliar.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-2 gap-3 px-4 md:mt-20 md:grid-cols-3 md:gap-5 md:px-8">
        <Column items={cols[0]} y={y0} onOpen={setActive} />
        <Column items={cols[1]} y={y1} onOpen={setActive} className="mt-16 md:mt-28" />
        <Column items={cols[2]} y={y2} onOpen={setActive} className="hidden md:flex" />
        {/* No celular a terceira coluna vira continuação das duas primeiras */}
        {cols[2].map((it) => (
          <Tile key={it.src} item={it} onOpen={setActive} className="md:hidden" />
        ))}
      </div>

      <Lightbox index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}

function Column({
  items,
  y,
  onOpen,
  className = "flex",
}: {
  items: Item[];
  y: MotionValue<string>;
  onOpen: (i: number) => void;
  className?: string;
}) {
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-3 md:gap-5 ${className}`}>
      {items.map((it) => (
        <Tile key={it.src} item={it} onOpen={onOpen} />
      ))}
    </motion.div>
  );
}

function Tile({ item, onOpen, className = "" }: { item: Item; onOpen: (i: number) => void; className?: string }) {
  const tall = item.index % 4 === 0 || item.index % 4 === 3;
  return (
    <button
      type="button"
      onClick={() => onOpen(item.index)}
      aria-label={`Ampliar ${item.alt}`}
      className={`group relative block w-full overflow-hidden text-left ${className}`}
    >
      <Photo
        src={item.src}
        alt={item.alt}
        label={`Galeria ${item.index + 1}`}
        className={`w-full ${tall ? "aspect-[3/4]" : "aspect-square"}`}
        sizes="(min-width: 768px) 33vw, 50vw"
        imgClassName="transition-transform duration-700 ease-[var(--ease-plate)] group-hover:scale-[1.06]"
      />
      <span className="pointer-events-none absolute inset-0 bg-body/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-body/25" />
    </button>
  );
}

function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const total = galeria.length;
  const lenis = useLenis();
  const go = useCallback(
    (d: number) => index !== null && onChange((index + d + total) % total),
    [index, onChange, total],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [index, onClose, go, lenis]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ferro/95 p-4 md:p-12"
          onClick={onClose}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[78svh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Photo
              src={galeria[index].src}
              alt={galeria[index].alt}
              label={`Galeria ${index + 1}`}
              className="size-full"
              imgClassName="!object-contain"
            />
          </motion.div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 md:bottom-8" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => go(-1)} className="border border-giz/30 px-5 py-3 text-sm hover:border-body hover:text-body">
              Anterior
            </button>
            <span className="min-w-16 text-center text-sm tabular-nums text-aco">
              {index + 1} de {total}
            </span>
            <button type="button" onClick={() => go(1)} className="border border-giz/30 px-5 py-3 text-sm hover:border-body hover:text-body">
              Próxima
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="absolute right-4 top-4 bg-body px-4 py-2 text-sm font-semibold text-ferro md:right-8 md:top-8"
          >
            Fechar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
