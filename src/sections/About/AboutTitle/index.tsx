import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function AboutTitle({ children }: Props) {
  return (
    /*
      Título principal da seção "Sobre".

      Usa fonte personalizada e tamanhos responsivos:
      - mobile: text-base
      - tablet: 22px
      - desktop: text-3xl
    */
    <h3 className="font-['Encode_Sans_Semi_Expanded'] text-base font-bold text-white md:text-[22px] xl:text-3xl">
      {children}
    </h3>
  )
}
