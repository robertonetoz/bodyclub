"use client";

import { useEffect, useState } from "react";
import { hours } from "@/data/site";

export type OpenStatus = { open: boolean; text: string; today: number };

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const fmt = (t: string) => t.replace(":00", "h").replace(":", "h");

// Calcula "aberto agora" no horário de Araguari (America/Sao_Paulo).
function compute(): OpenStatus {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
  );
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const todayHours = hours.find((h) => h.day === day)!;

  if (minutes >= toMinutes(todayHours.open) && minutes < toMinutes(todayHours.close)) {
    return { open: true, text: `Aberta agora, fecha às ${fmt(todayHours.close)}`, today: day };
  }
  if (minutes < toMinutes(todayHours.open)) {
    return { open: false, text: `Fechada agora, abre às ${fmt(todayHours.open)}`, today: day };
  }
  const next = hours.find((h) => h.day === (day + 1) % 7)!;
  return { open: false, text: `Fechada agora, abre amanhã às ${fmt(next.open)}`, today: day };
}

export function useOpenStatus() {
  const [status, setStatus] = useState<OpenStatus | null>(null);
  useEffect(() => {
    const update = () => setStatus(compute());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}
