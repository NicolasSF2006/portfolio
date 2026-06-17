import type { ReactNode } from "react"

type HeroSubtitleProps = {
  children: ReactNode
}

export function HeroSubtitle({ children }: HeroSubtitleProps) {
  return (
    /*
      Subtítulo da introdução.

      Mantém o texto centralizado e ajusta o tamanho conforme a tela.
    */
    <h2 className="text-center text-[14px] font-bold sm:text-3xl">
      {children}
    </h2>
  )
}
