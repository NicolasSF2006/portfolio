export function BackgroundHero() {
  return (
    /*
      Background decorativo fixo do site.

      fixed inset-0: ocupa toda a tela e permanece parado durante o scroll.
      z-0: fica atrás do conteúdo principal, que usa z-10 no App.tsx.
      pointer-events-none: impede que o background bloqueie cliques em botões/links.
      overflow-hidden: evita que os círculos desfocados criem rolagem lateral.
    */
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/*
        Círculo luminoso no topo esquerdo.

        Os tamanhos e posições mudam por breakpoint:
        - mobile: menor e mais próximo da tela;
        - tablet: intermediário;
        - desktop: maior, criando um efeito mais amplo.
      */}
      <div className="absolute top-[-120px] left-[-160px] h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[100px] sm:top-[-160px] sm:left-[-220px] sm:h-[520px] sm:w-[520px] sm:blur-[140px] lg:top-[-200px] lg:left-[-300px] lg:h-[800px] lg:w-[800px] lg:blur-[180px]" />

      {/* Círculo luminoso no topo direito, com tom violeta */}
      <div className="absolute top-[180px] right-[-180px] h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[110px] sm:top-[120px] sm:right-[-240px] sm:h-[500px] sm:w-[500px] sm:blur-[150px] lg:top-[100px] lg:right-[-300px] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />

      {/* Círculo azul posicionado na região central da página */}
      <div className="absolute top-[780px] left-[-120px] h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-[120px] sm:top-[850px] sm:left-[10%] sm:h-[500px] sm:w-[500px] sm:blur-[160px] lg:top-[900px] lg:left-[20%] lg:h-[700px] lg:w-[700px] lg:blur-[200px]" />

      {/* Círculo cyan suave para iluminar a região inferior/intermediária */}
      <div className="absolute top-[1450px] right-[-160px] h-[360px] w-[360px] rounded-full bg-cyan-300/10 blur-[120px] sm:top-[1650px] sm:right-[-80px] sm:h-[520px] sm:w-[520px] sm:blur-[180px] lg:top-[1800px] lg:right-[10%] lg:h-[800px] lg:w-[800px] lg:blur-[220px]" />

      {/* Círculo final no rodapé, reforçando a profundidade visual do fundo */}
      <div className="absolute bottom-[-160px] left-[-120px] h-[360px] w-[360px] rounded-full bg-violet-400/10 blur-[120px] sm:bottom-[-220px] sm:left-[5%] sm:h-[500px] sm:w-[500px] sm:blur-[160px] lg:bottom-[-300px] lg:left-[10%] lg:h-[700px] lg:w-[700px] lg:blur-[200px]" />
    </div>
  )
}
