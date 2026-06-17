import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function AboutDescription({ children }: Props) {
  return (
    /*
      Parágrafo descritivo da seção "Sobre".

      A largura é controlada pelo container pai.
      O tamanho e o espaçamento entre linhas aumentam em telas maiores
      para melhorar a leitura.
    */
    <p className="w-full text-sm leading-normal font-normal text-white md:text-[16px] md:leading-[24px] lg:text-xl lg:leading-normal">
      {children}
    </p>
  )
}
