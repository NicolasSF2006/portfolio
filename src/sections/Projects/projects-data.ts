import { publicAsset } from "@/lib/public-asset"

/*
  Tipo que representa a estrutura de cada projeto exibido no carousel.

  Cada projeto possui:
  - dados principais do card;
  - tags de tecnologias;
  - dados completos usados dentro do modal.
*/
export type Project = {
  title: string
  subtitle: string
  image: string
  link: string

  tags: {
    name: string
    backgroundColor: string
    textColor?: string
  }[]

  modal: {
    topRightImage: string
    bottomLeftMedia: string
    bottomRightImage: string
    description: string[]
    codeUrl: string
  }
}

/*
  Lista de projetos do portfólio.

  Esse array alimenta tanto:
  - os cards do carousel;
  - quanto o conteúdo detalhado exibido no modal.
*/
export const projects: Project[] = [
  {
    title: "Serenatto",
    subtitle: "Site institucional / vitrine para cafeteria",

    // Imagem principal exibida no card do carousel
    image: publicAsset("projects/serenatto/cover.png"),

    modal: {
      // Imagens usadas dentro do modal de detalhes
      topRightImage: publicAsset("projects/serenatto/hero-preview.svg"),
      bottomLeftMedia: publicAsset("projects/serenatto/pages-preview.svg"),
      bottomRightImage: publicAsset("projects/serenatto/mobile-preview.svg"),

      // Parágrafos da descrição exibida no modal
      description: [
        "O Serenatto precisava de uma página para conquistar clientes e fornecer as informações necessárias: modalidades de trabalho, horários, cardápio, localização, contato, entre outras...",

        "Analisada a demanda, construímos um projeto que transmite a identidade da marca. O site se adapta às necessidades do usuário (dispõe opção de tema escuro, ou claro; Para celular, ou computador), apresenta a marca e seus serviços e possibilita o contato entre cliente e empresa através de um formulário.",
      ],

      // Link do repositório/código do projeto
      codeUrl: "https://github.com/NicolasSF2006/cafeSerenatto",
    },

    // Link externo do projeto, caso seja usado posteriormente
    link: "https://seudominio.com",

    // Tecnologias utilizadas no projeto
    tags: [
      {
        name: "HTML",
        backgroundColor: "#FF7D5F",
        textColor: "#FFF",
      },
      {
        name: "CSS",
        backgroundColor: "#2196F3",
        textColor: "#FFF",
      },
      {
        name: "Bootstrap",
        backgroundColor: "#B079E1",
        textColor: "#FFF",
      },
    ],
  },

  {
    title: "Fokus",
    subtitle: "Site para organização e método de estudo",

    image: publicAsset("projects/fokus/cover.png"),

    modal: {
      topRightImage: publicAsset("projects/fokus/hero-preview.svg"),

      /*
        Neste projeto, o conteúdo inferior esquerdo é um vídeo.
        O modal identifica isso pela extensão ".mp4" e renderiza uma tag <video>.
      */
      bottomLeftMedia: publicAsset("projects/fokus/demo.mp4"),

      bottomRightImage: publicAsset("projects/fokus/app-preview.png"),

      description: [
        "O Fokus precisava de uma página para auxiliar estudantes que utilizam o método Pomodoro, que alterna entre pausas e foco, com tempo cronometrado.",

        "O site foi construído com design e animações modernos, trazendo identidade jovem. Entre as funcionalidades estão a organização de tarefas, tempo e música ambiente para auxiliar a concentração.",
      ],

      codeUrl: "https://github.com/NicolasSF2006/fokus/",
    },

    link: "https://google.com",

    tags: [
      {
        name: "HTML",
        backgroundColor: "#FF7D5F",
        textColor: "#FFF",
      },
      {
        name: "CSS",
        backgroundColor: "#2196F3",
        textColor: "#FFF",
      },
      {
        name: "Javascript",
        backgroundColor: "#FFDF00",
        textColor: "#353535",
      },
    ],
  },

  {
    title: "Memoteca",
    subtitle: "Site para catalogar ideias e citações",

    image: publicAsset("projects/memoteca/cover.png"),

    modal: {
      topRightImage: publicAsset("projects/memoteca/hero-preview.svg"),
      bottomLeftMedia: publicAsset("projects/memoteca/code-preview.svg"),
      bottomRightImage: publicAsset("projects/memoteca/app-preview.png"),

      description: [
        "A Memoteca é um site para catalogar ideias e citações, com postagens públicas que ficam armazenadas, ou podem ser excluídas.",

        "Para tornar isso possível, implementei uma API fictícia, utilizando Javascript e JSON, que possibilita o armazenamento, busca e exclusão dos “pensamentos” dos usuários.",
      ],

      codeUrl: "https://github.com/NicolasSF2006/memoteca",
    },

    link: "https://github.com",

    tags: [
      {
        name: "HTML",
        backgroundColor: "#FF7D5F",
        textColor: "#FFF",
      },
      {
        name: "CSS",
        backgroundColor: "#2196F3",
        textColor: "#FFF",
      },
      {
        name: "Javascript",
        backgroundColor: "#FFDF00",
        textColor: "#353535",
      },
      {
        name: "JSON",
        backgroundColor: "#E4E4E4",
        textColor: "#353535",
      },
    ],
  },
]
