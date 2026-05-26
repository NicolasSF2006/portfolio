import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoSoftSkillsDescricao({ children }: Props) {
  return (
    <p className="text-right text-[12px] leading-normal font-normal text-white md:text-[16px] md:leading-[24px] lg:max-w-[783px] lg:text-xl lg:leading-normal">
      {children}
    </p>
  )
}
