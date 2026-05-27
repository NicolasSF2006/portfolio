import { HeaderNome } from "@/components/Header/HeaderNome"
import { HeaderSaudacao } from "@/components/Header/HeaderSaudacao"

export function Header() {
  return (
    /*
      Cabeçalho fixo no topo da página.

      fixed: mantém o header sempre visível durante o scroll.
      z-50: garante que ele fique acima das outras seções.
      px/pt responsivos: criam espaçamento lateral e superior em diferentes telas.
    */
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-5 sm:px-6 lg:px-8">
      {/*
        Container visual do header.

        max-w-[1164px]: limita a largura máxima no desktop.
        mx-auto: centraliza o conteúdo.
        bg com linear-gradient: cria o efeito translúcido.
        backdrop-blur: aplica o efeito de vidro/glassmorphism.
      */}
      <div className="mx-auto flex w-full max-w-[1164px] items-center justify-between rounded-[20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.10)_0%,rgba(153,153,153,0.10)_100%)] px-5 py-3 backdrop-blur-[7.5px] sm:px-6 sm:py-4 lg:px-8">
        {/* Nome exibido no lado esquerdo do header */}
        <HeaderNome>Nicolas Frazão</HeaderNome>

        {/* Saudação exibida no lado direito do header */}
        <HeaderSaudacao />
      </div>
    </header>
  )
}
