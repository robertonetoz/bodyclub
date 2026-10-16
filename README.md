# Body Club — site

Site da academia Body Club (Araguari, MG). Next.js 16 + React 19 + Tailwind CSS 4, animações com Motion e rolagem suave com Lenis.

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde mexer

- **Textos, links, horários, avaliações, modalidades:** `src/data/site.ts`
- **Fotos:** veja `public/images/LEIA-ME.md` (fachada do topo, galeria, posts do Instagram, modalidades)
- **Cores e fontes:** `src/app/globals.css` (bloco `@theme`)
- **Seções:** `src/components/` — a ordem fica em `src/app/page.tsx`
