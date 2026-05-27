import type { ReactNode } from "react"

type HeaderNomeProps = {
  children: ReactNode
}

export function HeaderNome({ children }: HeaderNomeProps) {
  return (
    /*
      Texto do nome no header.

      Usa a fonte Inria Sans, cor cyan e tamanhos responsivos:
      - mobile: text-base
      - tablet: sm:text-lg
      - desktop: lg:text-xl
    */
    <p className="font-['Inria_Sans'] text-base font-bold text-[#7EF2FF] sm:text-lg lg:text-xl">
      {children}
    </p>
  )
}
