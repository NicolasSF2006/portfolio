import type { ReactNode } from "react"

type Props = {
  icon: ReactNode
  text: string
}

export function SecaoContatoInfo({ icon, text }: Props) {
  return (
    /*
      Item de informação de contato.

      Recebe um ícone e um texto, permitindo reutilizar o mesmo componente
      para email, localização ou outras informações.
    */
    <div className="flex items-center gap-4">
      {/* Ícone recebido por props. O seletor [&_svg] padroniza o tamanho dos SVGs */}
      <div className="text-white [&_svg]:h-8 [&_svg]:w-8">{icon}</div>

      {/* Texto da informação de contato */}
      <p className="text-[14px] leading-[26px] font-normal text-white lg:text-xl lg:leading-6">
        {text}
      </p>
    </div>
  )
}
