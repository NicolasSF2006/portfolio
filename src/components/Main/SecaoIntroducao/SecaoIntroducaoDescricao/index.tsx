import type { ReactNode } from "react"

type HeaderNomeProps = {
  children: ReactNode
}

export function SecaoIntroducaoDescricao({ children }: HeaderNomeProps) {
  return (
    <p className="text-center text-sm leading-[18px] font-light sm:text-xl sm:leading-normal">
      {children}
    </p>
  )
}
