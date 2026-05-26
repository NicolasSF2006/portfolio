import { HeaderNome } from "@/components/Header/HeaderNome"
import { HeaderSaudacao } from "@/components/Header/HeaderSaudacao"

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1164px] items-center justify-between rounded-[20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.10)_0%,rgba(153,153,153,0.10)_100%)] px-5 py-3 backdrop-blur-[7.5px] sm:px-6 sm:py-4 lg:px-8">
        <HeaderNome>Nicolas Frazão</HeaderNome>

        <HeaderSaudacao />
      </div>
    </header>
  )
}
