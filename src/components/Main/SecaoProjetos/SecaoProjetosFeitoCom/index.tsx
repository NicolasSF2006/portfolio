const tecnologias = [
  {
    nome: "HTML",
    cor: "#FF7D5F",
    cor_texto: "#FFF",
  },
  {
    nome: "React",
    cor: "#47B5C8",
    cor_texto: "#FFF",
  },
  {
    nome: "Javascript",
    cor: "#FFDF00",
    cor_texto: "#202020",
  },
  {
    nome: "Shadcn",
    cor: "#747474",
    cor_texto: "#FFF",
  },
  {
    nome: "Typescript",
    cor: "#1D5EB8",
    cor_texto: "#FFF",
  },
]

export function SecaoProjetosFeitoCom() {
  return (
    <div className="mt-40 flex max-w-[330px] flex-col items-center gap-5 lg:max-w-none">
      <p className="text-center text-[16px] font-bold text-white lg:text-[24px]">
        Oi visitante! este site foi feito com:
      </p>

      <ul className="flex flex-wrap items-center justify-center gap-3 lg:gap-2">
        {tecnologias.map((tech) => (
          <li key={tech.nome}>
            <span
              className="inline-flex h-[30px] items-center justify-center rounded-[25px] px-4 font-['Encode_Sans_Semi_Expanded'] text-[14px] font-bold lg:h-[20px] lg:px-3 lg:text-xs"
              style={{
                backgroundColor: tech.cor,
                color: tech.cor_texto,
              }}
            >
              {tech.nome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
