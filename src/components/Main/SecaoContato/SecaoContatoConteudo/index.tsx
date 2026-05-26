import { Mail, MapPin } from "lucide-react"

import { SecaoContatoTitulo } from "../SecaoContatoTitulo"
import { SecaoContatoDescricao } from "../SecaoContatoDescricao"
import { SecaoContatoInfo } from "../SecaoContatoInfo"

export function SecaoContatoConteudo() {
  return (
    <div className="flex w-full max-w-[300px] flex-col items-center gap-8 lg:max-w-[520px] lg:items-start lg:justify-between lg:gap-32">
      <div className="flex flex-col gap-5 lg:gap-8">
        <SecaoContatoTitulo>
          Vamos construir juntos o seu{" "}
          <strong className="font-bold text-[#B3F7FF]">futuro digital</strong>
        </SecaoContatoTitulo>

        <SecaoContatoDescricao>
          Pronto para alavancar seu projeto? Preencha o formulário ao lado para
          me enviar um email sobre as necessidades do seu negócio e como{" "}
          <strong className="font-light text-[#B3F7FF]">
            posso te ajudar.
          </strong>
        </SecaoContatoDescricao>
      </div>

      <div className="flex hidden w-full flex-col gap-5 lg:flex">
        <SecaoContatoInfo icon={<Mail />} text="nicolasfrazao2020@gmail.com" />

        <SecaoContatoInfo icon={<MapPin />} text="São Paulo - Brasil" />
      </div>
    </div>
  )
}
