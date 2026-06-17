import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function ContactTitle({ children }: Props) {
  return (
    /*
      Título principal da seção de contato.

      No mobile, fica centralizado.
      No desktop, fica alinhado à esquerda para acompanhar o layout em duas colunas.
    */
    <h2 className="text-center font-[Inria_Sans] text-[26px] leading-normal font-bold text-white lg:text-left lg:text-4xl">
      {children}
    </h2>
  )
}
