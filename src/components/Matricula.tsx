"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AppleIcon, ArrowIcon, PlayStoreIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/data/site";

const passos = [
  {
    title: "Faça o pré-cadastro",
    text: "Preencha seus dados no formulário. Leva dois minutos.",
    cta: { label: "Abrir pré-cadastro", href: site.links.preCadastro },
  },
  {
    title: "Pague a primeira mensalidade",
    text: "Escolha o plano e faça o primeiro pagamento online, com segurança, pela Tecnofit.",
    cta: { label: "Fazer o primeiro pagamento", href: site.links.primeiroPagamento },
  },
  {
    title: "Baixe o app e venha treinar",
    text: "Entre no app Tecnofit com seu cadastro, veja seu treino e passe na recepção para começar.",
    apps: true,
  },
];

export function Matricula() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <section id="matricula" className="relative bg-grafite py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="display text-[clamp(3rem,8vw,7.5rem)]">Comece a treinar</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-giz/70">
            Três passos e você está dentro. Se preferir, chame a gente no WhatsApp que a recepção ajuda.
          </p>
          <a
            href={site.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-giz/30 px-6 py-4 font-medium transition-colors hover:border-body hover:text-body"
          >
            <WhatsAppIcon />
            Tirar dúvidas no WhatsApp
          </a>

          <div className="mt-12 border-l-4 border-body bg-ferro p-6">
            <p className="text-lg font-semibold">Tem Wellhub?</p>
            <p className="mt-1 text-giz/70">
              A Body Club aceita Wellhub (antigo Gympass) a partir do plano Basic+. Faça o check-in pelo app e venha treinar.
            </p>
            <a
              href={site.links.wellhub}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-body hover:text-giz"
            >
              Ver a Body Club no Wellhub
              <ArrowIcon />
            </a>
          </div>
        </div>

        <ol ref={ref} className="relative">
          <span aria-hidden className="absolute bottom-0 left-[27px] top-0 w-[2px] bg-chumbo md:left-[35px]" />
          <motion.span
            aria-hidden
            style={{ scaleY: fill }}
            className="absolute bottom-0 left-[27px] top-0 w-[2px] origin-top bg-body md:left-[35px]"
          />
          {passos.map((p, i) => (
            <li key={p.title} className="relative flex gap-6 pb-16 last:pb-0 md:gap-10">
              <span className="display relative z-10 grid size-14 shrink-0 place-items-center bg-body text-3xl text-ferro md:size-[72px] md:text-4xl">
                {i + 1}
              </span>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-giz/70 md:text-lg">{p.text}</p>
                {p.cta && (
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block bg-body px-6 py-3.5 font-semibold text-ferro transition-colors hover:bg-giz"
                  >
                    {p.cta.label}
                  </a>
                )}
                {p.apps && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={site.links.appIos}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-body px-5 py-3.5 font-semibold text-ferro hover:bg-giz"
                    >
                      <AppleIcon /> iPhone
                    </a>
                    <a
                      href={site.links.appAndroid}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-body px-5 py-3.5 font-semibold text-ferro hover:bg-giz"
                    >
                      <PlayStoreIcon /> Android
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
