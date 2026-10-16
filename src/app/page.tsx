import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Modalidades } from "@/components/Modalidades";
import { Estrutura } from "@/components/Estrutura";
import { Galeria } from "@/components/Galeria";
import { Instagram } from "@/components/Instagram";
import { AppTecnofit } from "@/components/AppTecnofit";
import { Avaliacoes } from "@/components/Avaliacoes";
import { Matricula } from "@/components/Matricula";
import { Horarios } from "@/components/Horarios";
import { Equipe } from "@/components/Equipe";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Modalidades />
        <Estrutura />
        <Galeria />
        <Instagram />
        <AppTecnofit />
        <Avaliacoes />
        <Matricula />
        <Horarios />
        <Equipe />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
