import type { ReactNode } from "react"

type HeaderNomeProps = {
  children: ReactNode
}

export function SecaoIntroducaoTitulo({ children }: HeaderNomeProps) {
  return (
    <h1 className="mt-[211px] text-center font-['Encode_Sans_Semi_Expanded'] text-[20px] font-bold sm:mt-[100px] sm:text-4xl">
      {children}
    </h1>
  )
}
