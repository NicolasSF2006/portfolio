import { Button } from "@/components/ui/button"

import { SecaoIntroducaoDescricao } from "./SecaoIntroducaoDescricao"
import { SecaoIntroducaoSubtitulo } from "./SecaoIntroducaoSubtitulo"
import { SecaoIntroducaoTitulo } from "./SecaoIntroducaoTitulo"

import "./secao-introducao.styles.css"

export function SecaoIntroducao() {
  /*
    Classe reutilizada nos três botões da seção.

    btn-gradient-border: classe CSS personalizada responsável pela borda em gradiente.
    Tamanhos responsivos:
    - mobile: h-[34px] w-[110px]
    - desktop/tablet: sm:h-[45px] sm:w-[125px]
  */
  const buttonClasses =
    "btn-gradient-border h-[34px] w-[110px] text-sm text-white backdrop-blur-[2px] sm:h-[45px] sm:w-[125px] sm:text-sm"

  return (
    /*
      Seção de introdução do portfólio.

      max-w-[326px]: largura pensada para mobile.
      sm:max-w-[720px]: aumenta a largura em telas maiores.
      gap responsivo: controla o espaçamento entre título, descrição e botões.
    */
    <section className="mx-auto flex w-full max-w-[326px] flex-col items-center gap-5 sm:max-w-[720px] sm:gap-7">
      {/* Agrupa título e subtítulo para controlar o espaçamento entre eles */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <SecaoIntroducaoTitulo>
          Desenvolvedor{" "}
          <strong className="font-bold text-[#7EF2FF]">Front-End</strong>
        </SecaoIntroducaoTitulo>

        <SecaoIntroducaoSubtitulo>
          Transformando lógica em experiências humanas.
        </SecaoIntroducaoSubtitulo>
      </div>

      {/* Texto principal da introdução, com palavras-chave destacadas */}
      <SecaoIntroducaoDescricao>
        Meu trabalho é{" "}
        <strong className="font-light text-[#B3F7FF]">desenvolver sites</strong>{" "}
        que facilitem o cotidiano de pessoas comuns. Observo como pequenas
        decisões impactam a{" "}
        <strong className="font-light text-[#B3F7FF]">
          experiência do usuário
        </strong>{" "}
        e busco otimizar o{" "}
        <strong className="font-light text-[#B3F7FF]">
          alcance, a conversão e a carga
        </strong>{" "}
        do seu site.
      </SecaoIntroducaoDescricao>

      {/* Navegação principal da introdução */}
      <nav>
        <ul className="flex flex-row items-center gap-3 sm:gap-8">
          <li>
            {/* Link interno que leva até a seção de projetos */}
            <Button asChild variant="ghost" className={buttonClasses}>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </li>

          <li>
            {/* Link externo para o LinkedIn */}
            <Button asChild variant="ghost" className={buttonClasses}>
              <a
                href="https://www.linkedin.com/in/nicolas-fraz%C3%A3o-028bb7315/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </li>

          <li>
            {/*
              Download do currículo.

              import.meta.env.BASE_URL garante que o caminho funcione tanto
              localmente quanto no GitHub Pages, onde o site fica dentro de /portfolio/.
            */}
            <Button asChild variant="ghost" className={buttonClasses}>
              <a
                href={`${import.meta.env.BASE_URL}curriculo.pdf`}
                download="curriculo-nicolas-frazao.pdf"
                className="flex items-center gap-1"
              >
                <img
                  src={`${import.meta.env.BASE_URL}download-icon.svg`}
                  alt=""
                  className="h-4 w-4 sm:h-4 sm:w-4"
                />
                Currículo
              </a>
            </Button>
          </li>
        </ul>
      </nav>
    </section>
  )
}
