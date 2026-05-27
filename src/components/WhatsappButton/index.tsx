import { FaWhatsapp } from "react-icons/fa"

export function WhatsappButton() {
  return (
    /*
      Botão flutuante do WhatsApp.

      fixed: mantém o botão preso no canto da tela mesmo durante o scroll.
      z-[999]: garante que ele fique acima das seções do site.
      target="_blank": abre o WhatsApp em uma nova aba.
      aria-label: melhora a acessibilidade para leitores de tela.
    */
    <a
      href="https://wa.me/5511998631585"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="max-[426px]: fixed right-5 right-6 bottom-[96px] bottom-[120px] z-[999] flex h-[52px] h-[64px] w-[52px] w-[64px] items-center justify-center rounded-full bg-[#35C7B0] text-white shadow-lg transition-transform duration-300 hover:scale-110"
    >
      {/* Ícone oficial do WhatsApp */}
      <FaWhatsapp className="h-8 w-8 max-[426px]:h-7 max-[426px]:w-7" />
    </a>
  )
}
