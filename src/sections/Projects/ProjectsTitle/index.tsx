import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function ProjectsTitle({ children }: Props) {
  return (
    /*
      Título da seção de projetos.

      Usa fonte personalizada e tamanho responsivo:
      - mobile/tablet: text-base
      - desktop: text-2xl
    */
    <h2 className="font-['Encode_Sans_Semi_Expanded'] text-base font-bold text-white lg:text-2xl">
      {children}
    </h2>
  )
}
