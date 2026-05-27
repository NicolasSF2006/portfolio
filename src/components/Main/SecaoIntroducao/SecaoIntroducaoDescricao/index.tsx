import type { ReactNode } from "react"

type HeaderNomeProps = {
  children: ReactNode
}

export function SecaoIntroducaoDescricao({ children }: HeaderNomeProps) {
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
