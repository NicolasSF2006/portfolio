import type { ReactNode } from "react"

type HeaderNomeProps = {
  children: ReactNode
}

export function SecaoIntroducaoSubtitulo({ children }: HeaderNomeProps) {
  return (
    /*
      Subtítulo da introdução.

      Mantém o texto centralizado e ajusta o tamanho conforme a tela.
    */
    <h2 className="text-center text-[14px] font-bold sm:text-3xl">
      {children}
    </h2>
  )
}
