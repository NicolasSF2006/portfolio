import { Mail, MapPin } from "lucide-react"

import { ContactTitle } from "../ContactTitle"
import { ContactDescription } from "../ContactDescription"
import { ContactInfo } from "../ContactInfo"

export function ContactContent() {
  return (
    /*
      Bloco textual da seção de contato.

      No mobile, fica centralizado e mostra apenas título/descrição.
      No desktop, também exibe email e localização abaixo do texto.
    */
    <div className="flex w-full max-w-[300px] flex-col items-center gap-8 lg:max-w-[520px] lg:items-start lg:justify-between lg:gap-32">
      <div className="flex flex-col gap-5 lg:gap-8">
        <ContactTitle>
          Vamos construir juntos o seu{" "}
          <strong className="font-bold text-[#B3F7FF]">futuro digital</strong>
        </ContactTitle>

        <ContactDescription>
          Pronto para alavancar seu projeto? Preencha o formulário ao lado para
          me enviar um email sobre as necessidades do seu negócio e como{" "}
          <strong className="font-light text-[#B3F7FF]">
            posso te ajudar.
          </strong>
        </ContactDescription>
      </div>

      {/*
        Informações de contato exibidas apenas no desktop.

        No mobile, essas informações são renderizadas no index.tsx da seção,
        abaixo do formulário, para seguir a ordem visual do layout mobile.
      */}
      <div className="flex hidden w-full flex-col gap-5 lg:flex">
        <ContactInfo icon={<Mail />} text="nicolasfrazao2020@gmail.com" />

        <ContactInfo icon={<MapPin />} text="São Paulo - Brasil" />
      </div>
    </div>
  )
}
