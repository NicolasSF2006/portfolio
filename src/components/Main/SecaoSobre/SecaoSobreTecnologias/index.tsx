const tecnologias = [
  {
    nome: "HTML",
    icon: "/html-icon.svg",
  },
  {
    nome: "CSS",
    icon: "/css-icon.svg",
  },
  {
    nome: "Javascript",
    icon: "/js-icon.svg",
  },
  {
    nome: "Bootstrap",
    icon: "/bootstrap-icon.svg",
  },
  {
    nome: "React.JS",
    icon: "/react-icon.svg",
  },
  {
    nome: "SEO",
    icon: "/seo-icon.svg",
  },
  {
    nome: "Wordpress",
    icon: "/wordpress-icon.svg",
  },
]

export function SecaoSobreTecnologias() {
  return (
    <ul className="flex items-center gap-5 md:gap-6 lg:flex-wrap lg:gap-8">
      {tecnologias.map((tech) => (
        <li key={tech.nome} className="flex items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.nome}
            className="h-5 w-5 md:h-6 md:w-6 lg:hidden"
          />

          <div className="hidden flex-col items-center gap-2 lg:flex">
            <p className="font-['Encode_Sans_Semi_Expanded'] text-xs font-bold">
              {tech.nome}
            </p>

            <img
              src={tech.icon}
              alt={tech.nome}
              className="h-8 w-8 object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
