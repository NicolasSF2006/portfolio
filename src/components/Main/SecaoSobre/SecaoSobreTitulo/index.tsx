import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoSobreTitulo({ children }: Props) {
  return (
    <h3 className="font-['Encode_Sans_Semi_Expanded'] text-[14px] font-bold text-white md:text-[22px] lg:text-3xl">
      {children}
    </h3>
  )
}
