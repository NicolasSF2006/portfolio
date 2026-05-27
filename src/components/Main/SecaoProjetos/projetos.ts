/*
  Função auxiliar para montar caminhos de arquivos da pasta public.

  Isso é importante porque no GitHub Pages o site fica dentro de /portfolio/.
  Então, em vez de usar caminhos como "/imagem.png", usamos BASE_URL para
  garantir que os assets carreguem corretamente tanto localmente quanto no deploy.
*/
const publicAsset = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`
}

/*
  Tipo que representa a estrutura de cada projeto exibido no carousel.

  Cada projeto possui:
  - dados principais do card;
  - tags de tecnologias;
  - dados completos usados dentro do modal.
*/
export type Projeto = {
  titulo: string
  subtitulo: string
  imagem: string
  link: string

  tags: {
    nome: string
    cor: string
    cor_texto?: string
  }[]

  modal: {
    imagemTopoDireita: string
    imagemInferiorEsquerda: string
    imagemInferiorDireita: string
    descricao: string[]
    codigoUrl: string
  }
}

/*
  Lista de projetos do portfólio.

  Esse array alimenta tanto:
  - os cards do carousel;
  - quanto o conteúdo detalhado exibido no modal.
*/
export const projetos: Projeto[] = [
  {
    titulo: "Serenatto",
    subtitulo: "Site institucional / vitrine para cafeteria",

    // Imagem principal exibida no card do carousel
    imagem: publicAsset("serenatto-card.png"),

    modal: {
      // Imagens usadas dentro do modal de detalhes
      imagemTopoDireita: publicAsset("serenatto-background-introducao.svg"),
      imagemInferiorEsquerda: publicAsset("serenatto-background-pages.svg"),
      imagemInferiorDireita: publicAsset(
        "serenatto-background-mobile-previa.svg"
      ),

      // Parágrafos da descrição exibida no modal
      descricao: [
        "O Serenatto precisava de uma página para conquistar clientes e fornecer as informações necessárias: modalidades de trabalho, horários, cardápio, localização, contato, entre outras...",

        "Analisada a demanda, construímos um projeto que transmite a identidade da marca. O site se adapta às necessidades do usuário (dispõe opção de tema escuro, ou claro; Para celular, ou computador), apresenta a marca e seus serviços e possibilita o contato entre cliente e empresa através de um formulário.",
      ],

      // Link do repositório/código do projeto
      codigoUrl: "https://github.com/NicolasSF2006/cafeSerenatto",
    },

    // Link externo do projeto, caso seja usado posteriormente
    link: "https://seudominio.com",

    // Tecnologias utilizadas no projeto
    tags: [
      {
        nome: "HTML",
        cor: "#FF7D5F",
        cor_texto: "#FFF",
      },
      {
        nome: "CSS",
        cor: "#2196F3",
        cor_texto: "#FFF",
      },
      {
        nome: "Bootstrap",
        cor: "#B079E1",
        cor_texto: "#FFF",
      },
    ],
  },

  {
    titulo: "Fokus",
    subtitulo: "Site para organização e método de estudo",

    imagem: publicAsset("fokus-card.png"),

    modal: {
      imagemTopoDireita: publicAsset("fokus-background-introducao.svg"),

      /*
        Neste projeto, o conteúdo inferior esquerdo é um vídeo.
        O modal identifica isso pela extensão ".mp4" e renderiza uma tag <video>.
      */
      imagemInferiorEsquerda: publicAsset("fokus-demo.mp4"),

      imagemInferiorDireita: publicAsset("fokus-background-previa.png"),

      descricao: [
        "O Fokus precisava de uma página para auxiliar estudantes que utilizam o método Pomodoro, que alterna entre pausas e foco, com tempo cronometrado.",

        "O site foi construído com design e animações modernos, trazendo identidade jovem. Entre as funcionalidades estão a organização de tarefas, tempo e música ambiente para auxiliar a concentração.",
      ],

      codigoUrl: "https://github.com/NicolasSF2006/fokus/",
    },

    link: "https://google.com",

    tags: [
      {
        nome: "HTML",
        cor: "#FF7D5F",
        cor_texto: "#FFF",
      },
      {
        nome: "CSS",
        cor: "#2196F3",
        cor_texto: "#FFF",
      },
      {
        nome: "Javascript",
        cor: "#FFDF00",
        cor_texto: "#353535",
      },
    ],
  },

  {
    titulo: "Memoteca",
    subtitulo: "Site para catalogar ideias e citações",

    imagem: publicAsset("memoteca-card.png"),

    modal: {
      imagemTopoDireita: publicAsset("memoteca-background-introducao.svg"),
      imagemInferiorEsquerda: publicAsset("memoteca-background-codigo.svg"),
      imagemInferiorDireita: publicAsset("memoteca-background-previa.png"),

      descricao: [
        "A Memoteca é um site para catalogar ideias e citações, com postagens públicas que ficam armazenadas, ou podem ser excluídas.",

        "Para tornar isso possível, implementei uma API fictícia, utilizando Javascript e JSON, que possibilita o armazenamento, busca e exclusão dos “pensamentos” dos usuários.",
      ],

      codigoUrl: "https://github.com/NicolasSF2006/memoteca",
    },

    link: "https://github.com",

    tags: [
      {
        nome: "HTML",
        cor: "#FF7D5F",
        cor_texto: "#FFF",
      },
      {
        nome: "CSS",
        cor: "#2196F3",
        cor_texto: "#FFF",
      },
      {
        nome: "Javascript",
        cor: "#FFDF00",
        cor_texto: "#353535",
      },
      {
        nome: "JSON",
        cor: "#E4E4E4",
        cor_texto: "#353535",
      },
    ],
  },
]
