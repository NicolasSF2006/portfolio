import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export function SecaoSobreDescricao({ children }: Props) {
  return (
    <p className="w-full text-sm leading-normal font-normal text-white md:text-[16px] md:leading-[24px] lg:text-xl lg:leading-normal">
      {children}
    </p>
  )
}
