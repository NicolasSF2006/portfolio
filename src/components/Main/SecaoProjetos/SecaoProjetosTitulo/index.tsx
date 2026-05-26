import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoProjetosTitulo({ children }: Props) {
  return (
    <h2 className="font-['Encode_Sans_Semi_Expanded'] text-[14px] font-bold text-white lg:text-2xl">
      {children}
    </h2>
  )
}
