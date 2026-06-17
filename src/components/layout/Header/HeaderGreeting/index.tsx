export function HeaderGreeting() {
  return (
    /*
      Texto de saudação do header.

      No desktop/tablet, mostra uma frase maior.
      No mobile, mostra uma versão menor para não quebrar o layout.
    */
    <p className="font-['Inria_Sans'] text-[clamp(.875rem,1.5vw,1.125rem)] text-white">
      {/* Texto exibido a partir de telas médias */}
      <span className="hidden md:inline">
        Bem vindo visitante... Vamos nos conhecer!
      </span>

      {/* Texto exibido apenas no mobile */}
      <span className="md:hidden">Seja bem-vindo!</span>
    </p>
  )
}
