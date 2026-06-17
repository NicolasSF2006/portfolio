import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function FooterDescription({ children }: Props) {
  return (
    /*
      Descrição do rodapé.

      Texto curto de apoio ao título, com tamanho menor no mobile
      e maior em telas a partir do breakpoint sm.
    */
    <p className="text-center text-sm leading-[120%] font-normal tracking-[-0.2px] text-white sm:text-base sm:tracking-[-0.32px]">
      {children}
    </p>
  )
}
