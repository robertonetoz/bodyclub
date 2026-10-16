"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FacebookIcon, InstagramIcon, MailIcon, WhatsAppIcon, YoutubeIcon } from "./Icons";
import { site } from "@/data/site";

const sociais = [
  { label: "Instagram", href: site.links.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: site.links.whatsapp, Icon: WhatsAppIcon },
  { label: "YouTube", href: site.links.youtube, Icon: YoutubeIcon },
  { label: "Facebook", href: site.links.facebook, Icon: FacebookIcon },
  { label: "E-mail", href: site.links.email, Icon: MailIcon },
];

const atalhos = [
  { label: "Pré-cadastro", href: site.links.preCadastro },
  { label: "Primeiro pagamento", href: site.links.primeiroPagamento },
  { label: "App Tecnofit para iPhone", href: site.links.appIos },
  { label: "App Tecnofit para Android", href: site.links.appAndroid },
  { label: "Trabalhe conosco", href: site.links.trabalheConosco },
  { label: "Body Club no Wellhub", href: site.links.wellhub },
];

export function Footer() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0.2, 1], reduce ? ["0%", "0%"] : ["70%", "0%"]);

  return (
    <footer ref={ref} className="relative mt-24 overflow-hidden border-t border-giz/10 pt-16 md:mt-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-tight">{site.bio}</p>
          <p className="mt-3 text-giz/60">
            {site.address.street}, {site.address.district}
            <br />
            {site.address.city}, {site.address.state}
          </p>
        </div>

        <nav aria-label="Links úteis">
          <p className="mb-3 text-sm text-aco">Links úteis</p>
          <ul className="space-y-2">
            {atalhos.map((a) => (
              <li key={a.label}>
                <a href={a.href} target="_blank" rel="noreferrer" className="text-giz/80 hover:text-body">
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm text-aco">Redes</p>
          <ul className="flex flex-wrap gap-2">
            {sociais.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-12 place-items-center border border-giz/20 transition-colors hover:border-body hover:bg-body hover:text-ferro"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col gap-2 px-4 text-sm text-aco md:flex-row md:justify-between md:px-8">
        <p>© Body Club Araguari. Todos os direitos reservados.</p>
        <a href="#inicio" className="hover:text-body">Voltar ao topo</a>
      </div>

      <div aria-hidden className="mt-6 overflow-hidden">
        <motion.p
          style={{ y }}
          className="display -mb-[0.12em] whitespace-nowrap text-center text-[25vw] leading-[0.8] text-body"
        >
          Body Club
        </motion.p>
      </div>
    </footer>
  );
}
