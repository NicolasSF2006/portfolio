import { ProjectTag } from "../ProjectTag"

import type { Project } from "../projects-data"

type Props = {
  title: string
  image: string
  link: string

  /*
    Reutiliza o tipo das tags definido em Projeto.

    Assim, se a estrutura das tags mudar no projects-data.ts,
    o card acompanha automaticamente.
  */
  tags: Project["tags"]
}

export function ProjectCard({ title, image, tags }: Props) {
  return (
    /*
      Card visual do projeto exibido dentro do carousel.

      No mobile, o card é menor.
      No desktop, aumenta de tamanho para acompanhar o carousel em arco.
    */
    <article className="flex h-[297px] w-[207px] flex-col items-center justify-center gap-3 rounded-[8px] bg-[rgba(255,255,255,0.08)] p-3 transition-transform duration-300 hover:scale-[1.02] lg:h-[452px] lg:w-[314px] lg:gap-5">
      {/* Imagem principal do projeto */}
      <img
        src={image}
        alt={title}
        className="h-[198px] w-[182px] rounded-[25px_0px] object-cover lg:h-[313px] lg:w-full"
      />

      {/* Nome do projeto */}
      <p className="font-encode text-center text-[12px] font-bold text-white lg:text-base">
        {title}
      </p>

      {/* Tags das tecnologias usadas no projeto */}
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <ProjectTag
            key={tag.name}
            name={tag.name}
            backgroundColor={tag.backgroundColor}
            textColor={tag.textColor}
          />
        ))}
      </div>
    </article>
  )
}
