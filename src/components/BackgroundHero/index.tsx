export function BackgroundHero() {
  return (
    /*
      Background fixo da aplicação.

      A primeira div cria uma base com gradiente escuro para evitar
      espaços pretos secos durante o scroll no mobile.
      Os círculos por cima criam os brilhos decorativos.
    */
    <div className="pointer-events-none fixed top-[-30vh] right-0 bottom-[-30vh] left-0 z-0 overflow-hidden bg-[#111]">
      {/* Base de gradiente para cobrir toda a viewport */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_45%,rgba(168,85,247,0.18),transparent_35%),linear-gradient(180deg,#111_0%,#121827_45%,#111_100%)]" />

      {/* Topo esquerdo */}
      <div className="absolute top-[-120px] left-[-160px] h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[100px] sm:top-[-160px] sm:left-[-220px] sm:h-[520px] sm:w-[520px] sm:blur-[140px] lg:top-[-200px] lg:left-[-300px] lg:h-[800px] lg:w-[800px] lg:blur-[180px]" />

      {/* Topo direito */}
      <div className="absolute top-[180px] right-[-180px] h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[110px] sm:top-[120px] sm:right-[-240px] sm:h-[500px] sm:w-[500px] sm:blur-[150px] lg:top-[100px] lg:right-[-300px] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />

      {/* Brilho inferior esquerdo no mobile */}
      <div className="absolute bottom-[-120px] left-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/15 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px] lg:bottom-[-300px] lg:left-[10%] lg:h-[700px] lg:w-[700px] lg:bg-violet-400/10 lg:blur-[200px]" />

      {/* Brilho inferior direito no mobile */}
      <div className="absolute right-[-160px] bottom-[120px] h-[360px] w-[360px] rounded-full bg-violet-500/15 blur-[120px] sm:right-[-80px] sm:h-[520px] sm:w-[520px] sm:blur-[180px] lg:top-[1800px] lg:right-[10%] lg:bottom-auto lg:h-[800px] lg:w-[800px] lg:bg-cyan-300/10 lg:blur-[220px]" />
    </div>
  )
}
