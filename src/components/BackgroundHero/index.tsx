export function BackgroundHero() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Topo esquerdo */}
      <div className="absolute top-[-200px] left-[-300px] h-[800px] w-[800px] rounded-full bg-cyan-400/20 blur-[180px]" />

      {/* Topo direito */}
      <div className="absolute top-[100px] right-[-300px] h-[700px] w-[700px] rounded-full bg-violet-500/20 blur-[180px]" />

      {/* Meio */}
      <div className="absolute top-[900px] left-[20%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[200px]" />

      {/* Meio inferior */}
      <div className="absolute top-[1800px] right-[10%] h-[800px] w-[800px] rounded-full bg-cyan-300/10 blur-[220px]" />

      {/* Final */}
      <div className="absolute bottom-[-300px] left-[10%] h-[700px] w-[700px] rounded-full bg-violet-400/10 blur-[200px]" />
    </div>
  )
}
