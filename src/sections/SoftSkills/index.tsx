import { SoftSkillsDescription } from "./SoftSkillsDescription"
import { SoftSkillsList } from "./SoftSkillsList"
import { SoftSkillsTitle } from "./SoftSkillsTitle"

export function SoftSkills() {
  return (
    /*
      Seção de soft skills.

      No mobile/tablet, a seção fica em coluna, alinhada à direita.
      No desktop, ela mantém alinhamento à direita e recebe margem lateral
      para ficar posicionada visualmente do lado oposto da seção "Sobre".
    */
    <section className="mx-auto mt-[180px] flex w-full max-w-[355px] flex-col items-end gap-5 md:max-w-[720px] md:px-8 lg:mt-[232px] lg:mr-[138px] lg:ml-auto lg:max-w-[931px] lg:gap-8 lg:px-0">
      {/* Título da seção */}
      <SoftSkillsTitle>Feedback não é crítica, é ferramenta.</SoftSkillsTitle>

      {/*
        Descrição da seção.

        Existem dois textos diferentes:
        - mobile/tablet: texto mais direto e com palavras em destaque.
        - desktop: texto mais corrido, seguindo o layout original.
      */}
      <SoftSkillsDescription>
        {/* Texto exibido no mobile e tablet */}
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

        {/* Texto exibido apenas no desktop */}
        <span className="hidden lg:inline">
          Sou amante de filosofia e uma pessoa muito empática, características
          que me permitem bom trabalho em equipe. Possuo espírito de liderança e
          almejo evoluir em minha carreira, trabalhando com resiliência e
          resolvendo problemas.
        </span>
      </SoftSkillsDescription>

      {/*
        Lista de soft skills.

        A lista aparece apenas no desktop para manter o mobile mais limpo
        e evitar excesso de informação visual em telas menores.
      */}
      <div className="hidden lg:block">
        <SoftSkillsList />
      </div>
    </section>
  )
}
