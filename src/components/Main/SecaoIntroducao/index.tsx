import { Button } from "@/components/ui/button"

import { SecaoIntroducaoDescricao } from "./SecaoIntroducaoDescricao"
import { SecaoIntroducaoSubtitulo } from "./SecaoIntroducaoSubtitulo"
import { SecaoIntroducaoTitulo } from "./SecaoIntroducaoTitulo"

import "./secao-introducao.styles.css"

export function SecaoIntroducao() {
  const buttonClasses =
    "btn-gradient-border h-[26px] w-[102px] text-[10px] text-white backdrop-blur-[2px] sm:h-[45px] sm:w-[125px] sm:text-sm"

  return (
    <section className="mx-auto flex w-full max-w-[326px] flex-col items-center gap-5 sm:max-w-[720px] sm:gap-7">
      <div className="flex flex-col gap-1 sm:gap-2">
        <SecaoIntroducaoTitulo>
          Desenvolvedor{" "}
          <strong className="font-bold text-[#7EF2FF]">Front-End</strong>
        </SecaoIntroducaoTitulo>

        <SecaoIntroducaoSubtitulo>
          Transformando lógica em experiências humanas.
        </SecaoIntroducaoSubtitulo>
      </div>

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

      <nav>
        <ul className="flex flex-row items-center gap-3 sm:gap-8">
          <li>
            <Button asChild variant="ghost" className={buttonClasses}>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </li>

          <li>
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
            <Button
              asChild
              variant="ghost"
              className="btn-gradient-border h-[26px] w-[93px] text-[10px] text-white backdrop-blur-[2px] sm:h-[45px] sm:w-[125px] sm:text-sm"
            >
              <a
                href={`${import.meta.env.BASE_URL}curriculo.pdf`}
                download
                className="flex items-center gap-1"
              >
                <img
                  src={`${import.meta.env.BASE_URL}download-icon.svg`}
                  alt=""
                  className="h-3 w-3 sm:h-4 sm:w-4"
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
