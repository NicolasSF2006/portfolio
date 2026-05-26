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

export const projetos: Projeto[] = [
  {
    titulo: "Serenatto",
    subtitulo: "Site institucional / vitrine para cafeteria",

    imagem: "/serenatto-card.png",

    modal: {
      imagemTopoDireita: "/serenatto-background-introducao.svg",
      imagemInferiorEsquerda: "/serenatto-background-pages.svg",
      imagemInferiorDireita: "/serenatto-background-mobile-previa.svg",

      descricao: [
        "O Serenatto precisava de uma página para conquistar clientes e fornecer as informações necessárias: modalidades de trabalho, horários, cardápio, localização, contato, entre outras...",

        "Analisada a demanda, construímos um projeto que transmite a identidade da marca. O site se adapta às necessidades do usuário (dispõe opção de tema escuro, ou claro; Para celular, ou computador), apresenta a marca e seus serviços e possibilita o contato entre cliente e empresa através de um formulário.",
      ],

      codigoUrl: "https://github.com/seu-usuario/serenatto",
    },

    link: "https://seudominio.com",

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

    imagem: "/fokus-card.png",

    modal: {
      imagemTopoDireita: "/fokus-background-introducao.svg",
      imagemInferiorEsquerda: "/fokus-demo.mp4",
      imagemInferiorDireita: "/fokus-background-previa.png",

      descricao: [
        "O Fokus precisava de uma página para auxiliar estudantes que utilizam o método Pomodoro, que alterna entre pausas e foco, com tempo cronometrado.",

        "O site foi construído com design e animações modernos, trazendo identidade jovem. Entre as funcionalidades estão a organização de tarefas, tempo e música ambiente para auxiliar a concentração.",
      ],

      codigoUrl: "https://github.com/seu-usuario/fokus",
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

    imagem: "/memoteca-card.png",

    modal: {
      imagemTopoDireita: "/memoteca-background-introducao.svg",
      imagemInferiorEsquerda: "/memoteca-background-codigo.svg",
      imagemInferiorDireita: "/memoteca-background-previa.png",

      descricao: [
        "A Memoteca é um site para catalogar ideias e citações, com postagens públicas que ficam armazenadas, ou podem ser excluídas.",

        "Para tornar isso possível, implementei uma API fictícia, utilizando Javascript e JSON, que possibilita o armazenamento, busca e exclusão dos “pensamentos” dos usuários.",
      ],

      codigoUrl: "https://github.com/seu-usuario/memoteca",
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
