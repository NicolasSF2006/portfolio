import { Mail, MapPin } from "lucide-react"
import { SecaoContatoConteudo } from "./SecaoContatoConteudo"
import { SecaoContatoFormulario } from "./SecaoContatoFormulario"
import { SecaoContatoInfo } from "./SecaoContatoInfo"

export function SecaoContato() {
  return (
    <section className="mx-auto mt-[250px] flex h-[878px] w-[358px] flex-col items-center justify-center gap-8 rounded-xl bg-[rgba(242,242,242,0.08)] px-5 py-0 lg:h-auto lg:w-full lg:max-w-[1076px] lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-16">
      <SecaoContatoConteudo />
      <SecaoContatoFormulario />
      <div className="block flex w-full flex-col gap-5 lg:hidden lg:gap-6">
        <SecaoContatoInfo icon={<Mail />} text="nicolasfrazao2020@gmail.com" />

        <SecaoContatoInfo icon={<MapPin />} text="São Paulo - Brasil" />
      </div>
    </section>
  )
}
