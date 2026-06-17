import { FooterDescription } from "./FooterDescription"
import { FooterTitle } from "./FooterTitle"

export function Footer() {
  return (
    /*
      Rodapé do site.

      No mobile, tem largura máxima menor e espaçamento reduzido.
      Em telas maiores, ocupa a largura total disponível e aumenta o espaçamento.
    */
    <footer className="mx-auto mt-[120px] flex h-[42px] w-full max-w-[346px] flex-col items-center gap-[10px] py-20 sm:mt-[205px] sm:h-auto sm:max-w-none sm:gap-5 sm:py-20">
      {/* Título principal do rodapé */}
      <FooterTitle>Vamos conversar!</FooterTitle>

      {/* Texto complementar convidando o visitante a entrar em contato */}
      <FooterDescription>
        Se tem um projeto, dúvidas ou se interessou pelo meu trabalho, entre em
        contato
      </FooterDescription>
    </footer>
  )
}
