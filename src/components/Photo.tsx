"use client";

import { useEffect, useRef, useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  /** Texto do espaço reservado enquanto a foto não existir */
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Classes extras para posicionar o aviso do espaço reservado */
  placeholderClassName?: string;
};

/**
 * Mostra a foto se o arquivo existir em /public; se não existir, mostra um
 * espaço reservado com o caminho onde a foto deve ser colocada.
 */
export function Photo({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  priority,
  placeholderClassName = "items-center justify-center",
}: PhotoProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // O erro pode acontecer antes da hidratação; confere o estado da imagem.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {failed && (
        <div className={`placeholder-stripes absolute inset-0 flex flex-col gap-2 p-4 text-center ${placeholderClassName}`}>
          <svg aria-hidden viewBox="0 0 24 24" className="size-7 text-body/70" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <circle cx="9" cy="10" r="1.6" />
            <path d="m4 18 5.5-5 4 3.5L16 14l4 4" />
          </svg>
          {label && <span className="text-sm font-medium text-giz/80">{label}</span>}
          <code className="max-w-full truncate text-[11px] text-aco">public{src}</code>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        onError={() => setFailed(true)}
        className={`absolute inset-0 size-full object-cover ${failed ? "invisible" : ""} ${imgClassName}`}
      />
    </div>
  );
}
