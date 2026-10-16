"use client";

import { ArrowIcon, MailIcon, WhatsAppIcon } from "./Icons";
import { useOpenStatus } from "./useOpenStatus";
import { hours, site } from "@/data/site";

export function Horarios() {
  const status = useOpenStatus();
  const { address } = site;

  return (
    <section id="horarios" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="display text-[clamp(3rem,8vw,7.5rem)]">Aberta todos os dias</h2>
          <p className="mt-6 flex items-center gap-2 text-lg text-giz/80">
            <span className={`size-2.5 rounded-full ${status?.open ? "bg-[#3ddc84]" : "bg-aco"}`} />
            {status?.text ?? "Confira os horários abaixo"}
          </p>

          <table className="mt-10 w-full max-w-lg text-lg">
            <caption className="sr-only">Horário de funcionamento</caption>
            <tbody>
              {hours.map((h) => {
                const today = status?.today === h.day;
                return (
                  <tr
                    key={h.day}
                    className={`border-b border-giz/10 ${today ? "text-body" : "text-giz/80"}`}
                    aria-current={today ? "date" : undefined}
                  >
                    <th scope="row" className="py-3.5 text-left font-medium">
                      {h.label}
                      {today && <span className="ml-3 text-sm font-normal text-body/80">hoje</span>}
                    </th>
                    <td className="py-3.5 text-right tabular-nums">
                      {h.open} às {h.close}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-4 max-w-lg text-sm text-aco">
            Funcionamos também nos feriados, com horário especial. Confira no Instagram antes de vir.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-grafite lg:aspect-auto lg:flex-1">
            <iframe
              title="Mapa da Body Club"
              src={site.links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
            />
          </div>

          <address className="grid gap-6 not-italic sm:grid-cols-2">
            <div>
              <p className="text-sm text-aco">Endereço</p>
              <p className="mt-1 text-lg leading-snug">
                {address.street}, {address.district}
                <br />
                {address.city}, {address.state}, {address.zip}
              </p>
              <a
                href={site.links.directions}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-body hover:text-giz"
              >
                Traçar rota
                <ArrowIcon />
              </a>
            </div>
            <div>
              <p className="text-sm text-aco">Contato</p>
              <a href={site.links.whatsapp} target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-2 text-lg hover:text-body">
                <WhatsAppIcon /> {site.phone}
              </a>
              <a href={site.links.email} className="mt-2 flex items-center gap-2 text-lg hover:text-body">
                <MailIcon /> {site.email}
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
