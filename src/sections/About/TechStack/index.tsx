import { publicAsset } from "@/lib/public-asset"

/*
  Lista de technologies exibidas na seção "Sobre".

  Cada item possui um name e o caminho do ícone correspondente.
*/
const technologies = [
  {
    name: "HTML",
    icon: publicAsset("icons/html.svg"),
  },
  {
    name: "CSS",
    icon: publicAsset("icons/css.svg"),
  },
  {
    name: "Javascript",
    icon: publicAsset("icons/javascript.svg"),
  },
  {
    name: "Bootstrap",
    icon: publicAsset("icons/bootstrap.svg"),
  },
  {
    name: "React.JS",
    icon: publicAsset("icons/react.svg"),
  },
  {
    name: "SEO",
    icon: publicAsset("icons/seo.svg"),
  },
  {
    name: "Wordpress",
    icon: publicAsset("icons/wordpress.svg"),
  },
  {
    name: "Shadcn",
    icon: publicAsset("icons/shadcn.svg"),
  },
  {
    name: "Claude",
    icon: publicAsset("icons/claude.svg"),
  },
  {
    name: "Lovable",
    icon: publicAsset("icons/lovable.svg"),
  },
]

export function TechStack() {
  return (
    /*
      Lista visual de technologies.

      No mobile/tablet, exibe apenas os ícones.
      No desktop, exibe o name da tecnologia acima do ícone.
    */
    <ul className="flex items-center gap-5 md:gap-6 lg:flex-wrap lg:gap-8">
      {technologies.map((tech) => (
        <li key={tech.name} className="flex items-center justify-center">
          {/* Ícone exibido apenas no mobile e tablet */}
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-5 w-5 md:h-6 md:w-6 lg:hidden"
          />

          {/* Versão desktop: name da tecnologia + ícone */}
          <div className="hidden flex-col items-center gap-2 lg:flex">
            <p className="font-['Encode_Sans_Semi_Expanded'] text-xs font-bold">
              {tech.name}
            </p>

            <img
              src={tech.icon}
              alt={tech.name}
              className="h-8 w-8 object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
