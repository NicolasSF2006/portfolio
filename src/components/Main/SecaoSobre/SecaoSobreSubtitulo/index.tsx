import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoSobreSubtitulo({ children }: Props) {
  return (
    <h4 className="text-sm font-bold text-white md:text-[18px] lg:text-2xl">
      {children}
    </h4>
  )
}
