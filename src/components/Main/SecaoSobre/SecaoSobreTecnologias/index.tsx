/*
  Função auxiliar para montar caminhos de arquivos públicos.

  Isso evita problemas no GitHub Pages, onde o site fica dentro da rota /portfolio/.
*/
const publicAsset = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`
}

/*
  Lista de tecnologias exibidas na seção "Sobre".

  Cada item possui um nome e o caminho do ícone correspondente.
*/
const tecnologias = [
  {
    nome: "HTML",
    icon: publicAsset("html-icon.svg"),
  },
  {
    nome: "CSS",
    icon: publicAsset("css-icon.svg"),
  },
  {
    nome: "Javascript",
    icon: publicAsset("js-icon.svg"),
  },
  {
    nome: "Bootstrap",
    icon: publicAsset("bootstrap-icon.svg"),
  },
  {
    nome: "React.JS",
    icon: publicAsset("react-icon.svg"),
  },
  {
    nome: "SEO",
    icon: publicAsset("seo-icon.svg"),
  },
  {
    nome: "Wordpress",
    icon: publicAsset("wordpress-icon.svg"),
  },
]

export function SecaoSobreTecnologias() {
  return (
    /*
      Lista visual de tecnologias.

      No mobile/tablet, exibe apenas os ícones.
      No desktop, exibe o nome da tecnologia acima do ícone.
    */
    <ul className="flex items-center gap-5 md:gap-6 lg:flex-wrap lg:gap-8">
      {tecnologias.map((tech) => (
        <li key={tech.nome} className="flex items-center justify-center">
          {/* Ícone exibido apenas no mobile e tablet */}
          <img
            src={tech.icon}
            alt={tech.nome}
            className="h-5 w-5 md:h-6 md:w-6 lg:hidden"
          />

          {/* Versão desktop: nome da tecnologia + ícone */}
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
