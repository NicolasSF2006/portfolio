import { SecaoSobreDescricao } from "./SecaoSobreDescricao"
import { SecaoSobreSubtitulo } from "./SecaoSobreSubtitulo"
import { SecaoSobreTecnologias } from "./SecaoSobreTecnologias"
import { SecaoSobreTitulo } from "./SecaoSobreTitulo"

export function SecaoSobre() {
  return (
    <section className="mx-auto mt-[160px] flex w-full max-w-[355px] flex-col gap-5 px-0 md:max-w-[720px] md:px-8 lg:mt-[255px] lg:max-w-[1166px] lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-0">
      <div className="flex flex-col gap-5 lg:max-w-[783px] lg:gap-6">
        <div className="flex flex-col gap-1 lg:gap-3">
          <SecaoSobreTitulo>
            Quem <strong className="font-bold text-[#7EF2FF]">eu sou</strong>?
          </SecaoSobreTitulo>

          <SecaoSobreSubtitulo>
            Menos complexidade. Mais significado.
          </SecaoSobreSubtitulo>
        </div>

        <SecaoSobreDescricao>
          Na programação, encontrei o potencial de materializar minha
          criatividade e meus sonhos.
          <br />
          Hoje, atuo como desenvolvedor front-end e entusiasta da UX, focado em
          criar interfaces simples, funcionais e acessíveis, sempre priorizando
          o impacto real no usuário.
        </SecaoSobreDescricao>

        <SecaoSobreTecnologias />
      </div>

      <img
        src={`${import.meta.env.BASE_URL}eu.png`}
        alt="Foto de perfil"
        className="hidden lg:block lg:h-[260px] lg:w-[260px]"
      />
    </section>
  )
}
