# Portfólio | Nicolas Frazão

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades, trajetória e formas de contato. O site foi construído com foco em responsividade, animações suaves, navegação intuitiva e uma identidade visual moderna.

## Sobre o projeto

Este projeto reúne minhas principais informações profissionais em uma aplicação web desenvolvida com React, TypeScript, Vite e Tailwind CSS.

A proposta do portfólio é apresentar minha atuação como desenvolvedor front-end, destacando projetos, tecnologias utilizadas, soft skills e canais de contato.

## Funcionalidades

- Layout responsivo para desktop, tablet e mobile
- Header fixo com efeito glassmorphism
- Seção inicial com apresentação e links principais
- Download de currículo
- Seção sobre com tecnologias utilizadas
- Seção de soft skills
- Carousel de projetos com navegação por setas no desktop
- Carousel com arraste horizontal no mobile
- Modal de detalhes dos projetos
- Navegação entre projetos dentro do modal
- Suporte a imagem e vídeo no modal
- Formulário funcional com envio de email via EmailJS
- Mensagem de sucesso animada após envio do formulário
- Botão flutuante de WhatsApp
- Background decorativo responsivo
- Deploy configurado para GitHub Pages

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- Lucide React
- React Icons
- EmailJS
- GitHub Pages

## Estrutura principal

~~~txt
src/
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   └── providers/
│       └── theme-provider.tsx
├── components/
│   ├── layout/
│   │   ├── Background/
│   │   ├── FloatingWhatsapp/
│   │   ├── Footer/
│   │   └── Header/
│   └── ui/
├── lib/
│   ├── public-asset.ts
│   └── utils.ts
├── sections/
│   ├── About/
│   ├── Contact/
│   ├── Hero/
│   ├── Projects/
│   └── SoftSkills/
└── styles/
    └── index.css

public/
├── documents/
├── icons/
├── images/
└── projects/
~~~

## Como rodar o projeto localmente

Clone o repositório:

~~~bash
git clone https://github.com/NicolasSF2006/portfolio.git
~~~

Acesse a pasta do projeto:

~~~bash
cd portfolio
~~~

Instale as dependências:

~~~bash
npm install
~~~

Inicie o servidor de desenvolvimento:

~~~bash
npm run dev
~~~

## Scripts disponíveis

~~~bash
npm run dev
~~~

Inicia o projeto em ambiente de desenvolvimento.

~~~bash
npm run build
~~~

Gera a versão de produção do projeto.

~~~bash
npm run preview
~~~

Executa localmente a versão gerada para produção.

~~~bash
npm run lint
~~~

Executa a verificação de lint com ESLint.

~~~bash
npm run format
~~~

Formata os arquivos com Prettier.

~~~bash
npm run typecheck
~~~

Executa a verificação de tipos do TypeScript.

## Variáveis de ambiente

O formulário de contato utiliza EmailJS. Para funcionar localmente, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

~~~env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
~~~

## Deploy

O projeto está configurado para deploy no GitHub Pages.

No `vite.config.ts`, o campo `base` deve permanecer alinhado ao nome do repositório:

~~~ts
base: "/portfolio/"
~~~

## Autor

Desenvolvido por Nicolas Frazão.
