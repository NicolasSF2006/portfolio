import type { ReactNode } from "react"

type HeroDescriptionProps = {
  children: ReactNode
}

export function HeroDescription({ children }: HeroDescriptionProps) {
  return (
    /*
      Parágrafo descritivo da introdução.

      No mobile usa fonte menor e line-height controlado para facilitar leitura.
      Em telas maiores, aumenta para text-xl.
    */
    <p className="text-center text-sm leading-[18px] font-light sm:text-xl sm:leading-normal">
      {children}
    </p>
  )
}
