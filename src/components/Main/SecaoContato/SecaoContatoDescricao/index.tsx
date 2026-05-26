import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoContatoDescricao({ children }: Props) {
  return (
    <p className="text-center text-[14px] leading-[26px] font-normal text-white lg:text-left lg:text-xl lg:font-light">
      {children}
    </p>
  )
}
