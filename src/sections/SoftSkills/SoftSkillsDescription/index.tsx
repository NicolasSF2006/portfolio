import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SoftSkillsDescription({ children }: Props) {
  return (
    /*
      Texto descritivo da seção.

      Mantém alinhamento à direita e ajusta tamanho/line-height
      para melhorar a leitura em mobile, tablet e desktop.
    */
    <p className="text-right text-sm leading-normal font-normal text-white md:text-[16px] md:leading-[24px] xl:max-w-[783px] xl:text-xl xl:leading-normal">
      {children}
    </p>
  )
}
