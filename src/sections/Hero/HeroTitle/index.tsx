import type { ReactNode } from "react"

type HeroTitleProps = {
  children: ReactNode
}

export function HeroTitle({ children }: HeroTitleProps) {
  return (
    /*
      Título principal da introdução.

      Usa fonte personalizada e tamanhos responsivos:
      - mobile: 20px
      - telas maiores: text-4xl
    */
    <h1 className="text-center font-['Encode_Sans_Semi_Expanded'] text-[20px] font-bold sm:text-4xl">
      {children}
    </h1>
  )
}
