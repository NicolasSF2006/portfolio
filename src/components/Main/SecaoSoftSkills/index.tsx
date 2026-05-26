import { SecaoSoftSkillsDescricao } from "./SecaoSoftSkillsDescricao"
import { SecaoSoftSkillsLista } from "./SecaoSoftSkillsLista"
import { SecaoSoftSkillsTitulo } from "./SecaoSoftSkillsTitulo"

export function SecaoSoftSkills() {
  return (
    <section className="mx-auto mt-[180px] flex w-full max-w-[355px] flex-col items-end gap-5 md:max-w-[720px] md:px-8 lg:mt-[232px] lg:mr-[138px] lg:ml-auto lg:max-w-[931px] lg:gap-8 lg:px-0">
      <SecaoSoftSkillsTitulo>
        Feedback não é crítica, é ferramenta.
      </SecaoSoftSkillsTitulo>

      <SecaoSoftSkillsDescricao>
        {/* MOBILE/TABLET */}
        <span className="lg:hidden">
          Sou amante de filosofia e muito <strong>empático</strong>,
          características que me permitem bom{" "}
          <strong>trabalho em equipe</strong>. Como alguém{" "}
          <strong>proativo</strong>, possuo espírito de liderança e almejo{" "}
          <strong>evoluir em minha carreira</strong>, trabalhando{" "}
          <strong>
            com resiliência, resolvendo problemas e aprendendo sempre
          </strong>
          .
        </span>

        {/* DESKTOP */}
        <span className="hidden lg:inline">
          Sou amante de filosofia e uma pessoa muito empática, características
          que me permitem bom trabalho em equipe. Possuo espírito de liderança e
          almejo evoluir em minha carreira, trabalhando com resiliência e
          resolvendo problemas.
        </span>
      </SecaoSoftSkillsDescricao>

      {/* desktop only */}
      <div className="hidden lg:block">
        <SecaoSoftSkillsLista />
      </div>
    </section>
  )
}
