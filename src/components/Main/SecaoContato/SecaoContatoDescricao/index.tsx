import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoContatoDescricao({ children }: Props) {
  return (
    /*
      Descrição da seção de contato.

      O texto muda apenas visualmente:
      - mobile: centralizado e menor;
      - desktop: alinhado à esquerda e maior.
    */
    <p className="text-center text-[14px] leading-[26px] font-normal text-white lg:text-left lg:text-xl lg:font-light">
      {children}
    </p>
  )
}
