import { useState } from "react"

import { motion, type PanInfo } from "framer-motion"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProjetoTag } from "../SecaoProjetosTag"
import { projetos } from "../projetos"

type ProjetoModalProps = {
  children: React.ReactNode
  projetoIndex: number
}

export function SecaoProjetosModal({
  children,
  projetoIndex,
}: ProjetoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(projetoIndex)

  const projeto = projetos[currentIndex]

  const midiaInferiorEsquerda = projeto.modal.imagemInferiorEsquerda
  const isVideo = midiaInferiorEsquerda.endsWith(".mp4")

  function handleNextProject() {
    setCurrentIndex((prev) => (prev + 1) % projetos.length)
  }

  function handlePrevProject() {
    setCurrentIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const swipeDistance = info.offset.x
    const swipeVelocity = info.velocity.x

    if (swipeDistance < -80 || swipeVelocity < -500) {
      handleNextProject()
    }

    if (swipeDistance > 80 || swipeVelocity > 500) {
      handlePrevProject()
    }
  }

  function handleOpenChange(open: boolean) {
    if (open) {
      setCurrentIndex(projetoIndex)
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[calc(100vw-32px)] max-w-[576px] overflow-x-hidden overflow-y-auto rounded-[16px] border border-white/15 bg-[rgba(32,32,32,0.95)] p-6 text-white shadow-2xl sm:max-w-[576px] lg:h-[750px] lg:w-[1220px] lg:max-w-none lg:overflow-visible lg:rounded-[32px_0px] lg:p-[50px]">
        {/* MOBILE */}
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.18}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          className="flex w-full cursor-grab [touch-action:pan-y] flex-col items-center overflow-x-hidden active:cursor-grabbing lg:hidden"
        >
          <h2 className="text-center font-['Encode_Sans_Semi_Expanded'] text-[16px] leading-normal font-bold text-[#B3F7FF]">
            {projeto.titulo}
          </h2>

          <h3 className="mt-2 text-center text-[14px] leading-normal font-bold text-white">
            {projeto.subtitulo}
          </h3>

          <div className="mt-6 flex w-full max-w-[330px] flex-col gap-4">
            {projeto.modal.descricao.map((paragrafo) => (
              <p
                key={paragrafo}
                className="text-center text-[12px] leading-normal font-normal text-white"
              >
                {paragrafo}
              </p>
            ))}
          </div>

          <div className="mt-8 flex w-full max-w-[330px] items-center justify-center gap-[3px] overflow-hidden">
            <img
              src={projeto.modal.imagemTopoDireita}
              alt={projeto.titulo}
              className="h-[153.393px] min-w-0 flex-[0_0_63%] object-cover"
            />

            <img
              src={projeto.modal.imagemInferiorDireita}
              alt={`${projeto.titulo} mobile`}
              className="h-[153.493px] min-w-0 flex-[0_0_36%] object-cover"
            />
          </div>

          <div className="mt-2 w-full max-w-[330px] overflow-hidden">
            {isVideo ? (
              <video
                key={midiaInferiorEsquerda}
                src={midiaInferiorEsquerda}
                className="h-[185.886px] w-full object-cover"
                muted
                playsInline
                controls
              />
            ) : (
              <img
                src={midiaInferiorEsquerda}
                alt={`${projeto.titulo} desktop`}
                className="h-[185.886px] w-full object-cover"
              />
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {projeto.tags.map((tag) => (
              <ProjetoTag
                key={tag.nome}
                nome={tag.nome}
                cor={tag.cor}
                cor_texto={tag.cor_texto}
              />
            ))}
          </div>

          <Button
            asChild
            className="mt-6 h-[40px] max-w-full rounded-[8px] bg-[#B3F7FF]/60 px-6 text-[14px] font-bold text-white hover:bg-[#B3F7FF]/80"
          >
            <a
              href={projeto.modal.codigoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar código
            </a>
          </Button>
        </motion.div>

        {/* DESKTOP */}
        <div className="relative hidden h-full w-full lg:block">
          <button
            type="button"
            onClick={handlePrevProject}
            className="absolute top-1/2 left-[-85px] z-50 -translate-y-1/2 text-white transition-opacity hover:opacity-70"
          >
            <ChevronLeft size={38} />
          </button>

          <button
            type="button"
            onClick={handleNextProject}
            className="absolute top-1/2 right-[-85px] z-50 -translate-y-1/2 text-white transition-opacity hover:opacity-70"
          >
            <ChevronRight size={38} />
          </button>

          <div className="grid h-full w-full grid-cols-[520px_37px_69px_9px_274px] grid-rows-[260px_7px_352px_15px_42px] justify-center">
            <div className="col-start-1 row-start-1 flex w-[520px] flex-col">
              <h2 className="font-['Encode_Sans_Semi_Expanded'] text-[24px] leading-none font-bold text-[#B3F7FF]">
                {projeto.titulo}
              </h2>

              <h3 className="mt-2 text-[16px] leading-none font-bold text-white">
                {projeto.subtitulo}
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {projeto.modal.descricao.map((paragrafo) => (
                  <p
                    key={paragrafo}
                    className="text-[14px] leading-[16px] font-normal text-white"
                  >
                    {paragrafo}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {projeto.tags.map((tag) => (
                  <ProjetoTag
                    key={tag.nome}
                    nome={tag.nome}
                    cor={tag.cor}
                    cor_texto={tag.cor_texto}
                  />
                ))}
              </div>
            </div>

            <img
              src={projeto.modal.imagemTopoDireita}
              alt={projeto.titulo}
              className="col-span-3 col-start-3 row-start-1 h-[260px] w-[352px] object-cover"
            />

            {isVideo ? (
              <video
                key={midiaInferiorEsquerda}
                src={midiaInferiorEsquerda}
                className="col-span-3 col-start-1 row-start-3 h-[352px] w-[626px] object-cover"
                muted
                playsInline
                controls
              />
            ) : (
              <img
                src={midiaInferiorEsquerda}
                alt={`${projeto.titulo} desktop`}
                className="col-span-3 col-start-1 row-start-3 h-[352px] w-[626px] object-cover"
              />
            )}

            <img
              src={projeto.modal.imagemInferiorDireita}
              alt={`${projeto.titulo} mobile`}
              className="col-start-5 row-start-3 h-[352px] w-[274px] object-cover"
            />

            <Button
              asChild
              className="col-start-5 row-start-5 h-[42px] justify-self-end rounded-[8px] bg-[#B3F7FF]/60 px-6 text-[16px] font-bold text-white hover:bg-[#B3F7FF]/80"
            >
              <a
                href={projeto.modal.codigoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar código
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
