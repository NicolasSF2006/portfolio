import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoSoftSkillsTitulo({ children }: Props) {
  return (
    <h5 className="text-right text-[12px] font-bold text-white md:text-[18px] lg:text-2xl">
      {children}
    </h5>
  )
}
