import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoContatoTitulo({ children }: Props) {
  return (
    <h2 className="text-center font-[Inria_Sans] text-[26px] leading-normal font-bold text-white lg:text-left lg:text-4xl">
      {children}
    </h2>
  )
}
