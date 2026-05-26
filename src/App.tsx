import "./App.styles.css"

import { Footer } from "@/components/Footer"

import { BackgroundHero } from "@/components/BackgroundHero"

import { SecaoIntroducao } from "@/components/Main/SecaoIntroducao"
import { SecaoSobre } from "@/components/Main/SecaoSobre"
import { SecaoSoftSkills } from "@/components/Main/SecaoSoftSkills"
import { SecaoContato } from "@/components/Main/SecaoContato"
import { SecaoProjetos } from "./components/Main/SecaoProjetos"
import { Header } from "./components/Header"
import { WhatsappButton } from "./components/WhatsappButton"

export function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#111]">
      <BackgroundHero />

      <div className="relative z-10">
        <Header />

        <main className="mt-[200px]">
          <SecaoIntroducao />
          <SecaoSobre />
          <SecaoSoftSkills />
          <SecaoProjetos />
          <SecaoContato />
        </main>

        <Footer />
      </div>

      <WhatsappButton />
    </div>
  )
}

export default App
