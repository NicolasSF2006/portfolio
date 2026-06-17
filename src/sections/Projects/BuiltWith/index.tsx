/*
  Tecnologias usadas para construir este próprio portfólio.

  Essas tags aparecem abaixo do carousel de projetos.
*/
const technologies = [
  {
    name: "HTML",
    backgroundColor: "#FF7D5F",
    textColor: "#FFF",
  },
  {
    name: "React",
    backgroundColor: "#47B5C8",
    textColor: "#FFF",
  },
  {
    name: "Javascript",
    backgroundColor: "#FFDF00",
    textColor: "#202020",
  },
  {
    name: "Shadcn",
    backgroundColor: "#747474",
    textColor: "#FFF",
  },
  {
    name: "Typescript",
    backgroundColor: "#1D5EB8",
    textColor: "#FFF",
  },
]

export function BuiltWith() {
  return (
    /*
      Bloco informativo abaixo do carousel.

      No mobile, limita a largura para manter as tags organizadas.
      No desktop, remove essa limitação para ocupar melhor o espaço disponível.
    */
    <div className="mt-40 flex max-w-[330px] flex-col items-center gap-5 lg:max-w-none">
      <p className="text-center text-[16px] font-bold text-white lg:text-[24px]">
        Oi visitante! este site foi feito com:
      </p>

      {/* Lista de technologies usadas no desenvolvimento do portfólio */}
      <ul className="flex flex-wrap items-center justify-center gap-3 lg:gap-2">
        {technologies.map((tech) => (
          <li key={tech.name}>
            <span
              className="inline-flex h-[30px] items-center justify-center rounded-[25px] px-4 font-['Encode_Sans_Semi_Expanded'] text-[14px] font-bold lg:h-[20px] lg:px-3 lg:text-xs"
              style={{
                backgroundColor: tech.backgroundColor,
                color: tech.textColor,
              }}
            >
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
