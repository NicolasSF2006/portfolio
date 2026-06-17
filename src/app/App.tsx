import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Background } from "@/components/layout/Background"
import { FloatingWhatsapp } from "@/components/layout/FloatingWhatsapp"

import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { SoftSkills } from "@/sections/SoftSkills"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"

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
      <Background />

      {/*
        Conteúdo principal do site.

        z-10: mantém header, main e footer acima do background.
      */}
      <div className="relative z-10 overflow-x-hidden">
        {/* Cabeçalho fixo com nome e saudação */}
        <Header />

        <main>
          {/* Seção inicial/apresentação */}
          <Hero />

          {/* Seção sobre o desenvolvedor */}
          <About />

          {/* Seção com soft skills e características profissionais */}
          <SoftSkills />

          {/* Seção com carousel de projetos */}
          <Projects />

          {/* Seção com formulário e informações de contato */}
          <Contact />
        </main>

        {/* Rodapé da página */}
        <Footer />
      </div>

      {/* Botão fixo de WhatsApp, sempre visível no canto da tela */}
      <FloatingWhatsapp />
    </div>
  )
}

export default App
