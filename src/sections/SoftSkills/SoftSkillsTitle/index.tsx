import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SoftSkillsTitle({ children }: Props) {
  return (
    /*
      Título da seção de soft skills.

      O texto fica alinhado à direita para acompanhar o layout da seção.
      O tamanho aumenta progressivamente conforme a tela cresce.
    */
    <h5 className="text-right text-sm font-bold text-white md:text-[18px] lg:text-2xl">
      {children}
    </h5>
  )
}
