type LogoProps = { className?: string };

// Logo oficial (recorte de /public/images/logobodyclub.png). As letras são
// vazadas, então o fundo preto atrás delas mantém o logo legível em qualquer cor.
export function Logo({ className = "h-12" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-recortado.png"
      alt="Body Club"
      width={253}
      height={244}
      className={`w-auto bg-ferro ${className}`}
    />
  );
}
