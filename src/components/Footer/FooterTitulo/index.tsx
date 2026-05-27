import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function FooterTitulo({ children }: Props) {
  return (
    /*
      Título do rodapé.

      Usa a fonte Lato, alinhamento central e tamanho responsivo:
      - mobile: 14px
      - telas maiores: text-xl
    */
    <h6 className="text-center font-['Lato'] text-[14px] leading-[120%] font-bold tracking-[-0.28px] text-white sm:text-xl sm:tracking-[-0.4px]">
      {children}
    </h6>
  )
}
