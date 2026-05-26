import { FooterDescricao } from "./FooterDescricao"
import { FooterTitulo } from "./FooterTitulo"

export function Footer() {
  return (
    <footer className="mx-auto mt-[120px] flex h-[42px] w-full max-w-[346px] flex-col items-center gap-[10px] py-20 sm:mt-[205px] sm:h-auto sm:max-w-none sm:gap-5 sm:py-20">
      <FooterTitulo>Vamos conversar!</FooterTitulo>

      <FooterDescricao>
        Se tem um projeto, dúvidas ou se interessou pelo meu trabalho, entre em
        contato
      </FooterDescricao>
    </footer>
  )
}
