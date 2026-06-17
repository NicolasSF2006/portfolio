import { publicAsset } from "@/lib/public-asset"

import { AboutDescription } from "./AboutDescription"
import { AboutSubtitle } from "./AboutSubtitle"
import { TechStack } from "./TechStack"
import { AboutTitle } from "./AboutTitle"

export function About() {
  return (
    /*
      Seção "Sobre".

      No mobile, a seção fica em coluna e com largura reduzida.
      No tablet, recebe mais largura e padding lateral para não encostar nas bordas.
      No desktop, vira um layout em linha, com texto à esquerda e imagem à direita.
    */
    <section className="mx-auto mt-[160px] flex w-full max-w-[355px] flex-col gap-5 px-0 md:max-w-[720px] md:px-8 lg:mt-[255px] lg:max-w-[1166px] lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-0">
      {/*
        Bloco principal de conteúdo textual.

        Contém título, subtítulo, descrição e lista de tecnologias.
        No desktop, limita a largura para manter boa leitura.
      */}
      <div className="flex flex-col gap-5 lg:max-w-[783px] lg:gap-6">
        {/* Agrupa título e subtítulo para controlar melhor o espaçamento */}
        <div className="flex flex-col gap-1 lg:gap-3">
          <AboutTitle>
            Quem <strong className="font-bold text-[#7EF2FF]">eu sou</strong>?
          </AboutTitle>

          <AboutSubtitle>Menos complexidade. Mais significado.</AboutSubtitle>
        </div>

        {/* Texto de apresentação sobre trajetória, foco profissional e UX */}
        <AboutDescription>
          Na programação, encontrei o potencial de materializar minha
          criatividade e meus sonhos.
          <br />
          Hoje, atuo como desenvolvedor front-end e entusiasta da UX, focado em
          criar interfaces simples, funcionais e acessíveis, sempre priorizando
          o impacto real no usuário.
        </AboutDescription>

        {/* Lista de tecnologias utilizadas/conhecidas */}
        <TechStack />
      </div>

      {/*
        Imagem de perfil exibida apenas no desktop.

        import.meta.env.BASE_URL garante que o caminho da imagem funcione
        tanto localmente quanto no GitHub Pages.
      */}
      <img
        src={publicAsset("images/profile-photo.png")}
        alt="Foto de perfil"
        className="hidden lg:block lg:h-[260px] lg:w-[260px]"
      />
    </section>
  )
}
