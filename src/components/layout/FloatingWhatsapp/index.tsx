import { FaWhatsapp } from "react-icons/fa"

export function FloatingWhatsapp() {
  return (
    /*
      Botão flutuante do WhatsApp.

      fixed: mantém o botão preso no canto da tela mesmo durante o scroll.
      z-999: garante que ele fique acima das seções do site.
      target="_blank": abre o WhatsApp em uma nova aba.
      aria-label: melhora a acessibilidade para leitores de tela.
    */
    <a
      href="https://wa.me/5511998631585"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="fixed right-6 bottom-30 z-999 flex h-16 w-16 items-center justify-center rounded-full bg-[#35C7B0] text-white shadow-lg transition-transform duration-300 hover:scale-110 max-[426px]:right-5 max-[426px]:bottom-24 max-[426px]:h-13 max-[426px]:w-13"
    >
      {/* Ícone oficial do WhatsApp */}
      <FaWhatsapp className="h-8 w-8 max-[426px]:h-7 max-[426px]:w-7" />
    </a>
  )
}
