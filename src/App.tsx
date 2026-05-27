import "./App.styles.css"

// Componentes estruturais da página
import { Header } from "./components/Header"
import { Footer } from "@/components/Footer"

// Background visual fixo da aplicação
import { BackgroundHero } from "@/components/BackgroundHero"

// Seções principais do conteúdo
import { SecaoIntroducao } from "@/components/Main/SecaoIntroducao"
import { SecaoSobre } from "@/components/Main/SecaoSobre"
import { SecaoSoftSkills } from "@/components/Main/SecaoSoftSkills"
import { SecaoProjetos } from "./components/Main/SecaoProjetos"
import { SecaoContato } from "@/components/Main/SecaoContato"

// Botão flutuante de contato pelo WhatsApp
import { WhatsappButton } from "./components/WhatsappButton"

export function App() {
  return (
    /*
      Container principal da aplicação.

      relative: permite controlar camadas internas com z-index.
      isolate: cria um contexto de empilhamento próprio, evitando conflitos de z-index.
      min-h-screen: garante que o site ocupe no mínimo a altura total da tela.
      overflow-hidden: evita rolagem lateral causada por elementos decorativos.
      bg-[#111]: define a cor base escura do site.
    */
    <div className="relative isolate min-h-dvh bg-[#111]">
      {/* Background decorativo fixo, posicionado atrás do conteúdo */}
      <BackgroundHero />

      {/*
        Conteúdo principal do site.

        z-10: mantém header, main e footer acima do background.
      */}
      <div className="relative z-10 overflow-x-hidden">
        {/* Cabeçalho fixo com nome e saudação */}
        <Header />

        {/*
          Conteúdo principal da página.

          mt-[200px]: cria espaço inicial abaixo do header.
        */}
        <main className="mt-[200px]">
          {/* Seção inicial/apresentação */}
          <SecaoIntroducao />

          {/* Seção sobre o desenvolvedor */}
          <SecaoSobre />

          {/* Seção com soft skills e características profissionais */}
          <SecaoSoftSkills />

          {/* Seção com carousel de projetos */}
          <SecaoProjetos />

          {/* Seção com formulário e informações de contato */}
          <SecaoContato />
        </main>

        {/* Rodapé da página */}
        <Footer />
      </div>

      {/* Botão fixo de WhatsApp, sempre visível no canto da tela */}
      <WhatsappButton />
    </div>
  )
}

export default App
