import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function AboutSubtitle({ children }: Props) {
  return (
    /*
      Subtítulo da seção.

      Mantém uma hierarquia menor que o título principal,
      com ajuste progressivo de tamanho conforme a largura da tela.
    */
    <h4 className="text-sm font-bold text-white md:text-[18px] lg:text-2xl">
      {children}
    </h4>
  )
}
