"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./Logo";
import { site } from "@/data/site";

const items = [
  { href: "#modalidades", label: "Modalidades" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#galeria", label: "Galeria" },
  { href: "#instagram", label: "Instagram" },
  { href: "#app", label: "App" },
  { href: "#horarios", label: "Horários" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  // Esconde ao descer, mostra ao subir
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400);
    setSolid(y > 40);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid && !open ? "bg-ferro/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a href="#inicio" aria-label="Body Club, voltar ao início" className="relative z-10">
            <Logo className="h-12" />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {items.map((it) => (
              <li key={it.href}>
                <a href={it.href} className="text-[15px] text-giz/80 transition-colors hover:text-body">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href="#matricula"
              className="hidden bg-body px-5 py-2.5 text-[15px] font-semibold text-ferro transition-colors hover:bg-giz sm:inline-block"
            >
              Matricule-se
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 place-items-center lg:hidden"
            >
              <span className="relative block h-3 w-7">
                <span
                  className={`absolute left-0 h-[2px] w-full transition-all duration-300 ${
                    open ? "top-1/2 rotate-45 bg-ferro" : "top-0 bg-giz"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-full transition-all duration-300 ${
                    open ? "top-1/2 -rotate-45 bg-ferro" : "top-full bg-giz"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-body px-4 pb-8 pt-28 text-ferro"
          >
            <ul className="flex flex-col gap-1">
              {[...items, { href: "#matricula", label: "Matricule-se" }].map((it, i) => (
                <motion.li
                  key={it.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.4 }}
                >
                  <a href={it.href} onClick={() => setOpen(false)} className="display block text-[13vw] sm:text-7xl">
                    {it.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="text-sm">
              {site.address.street}, {site.address.district}, {site.address.city}
              <br />
              {site.phone}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
