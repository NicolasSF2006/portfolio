import type { ReactNode } from "react"

type HeaderNomeProps = {
  children: ReactNode
}

export function HeaderNome({ children }: HeaderNomeProps) {
  return (
    <p className="font-['Inria_Sans'] text-base font-bold text-[#7EF2FF] sm:text-lg lg:text-xl">
      {children}
    </p>
  )
}
