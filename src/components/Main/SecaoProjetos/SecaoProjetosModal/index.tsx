import { useState } from "react"

import { motion, type PanInfo } from "framer-motion"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProjetoTag } from "../SecaoProjetosTag"
import { projetos } from "../projetos"

type ProjetoModalProps = {
  children: React.ReactNode

  /*
    Índice do projeto clicado no carousel.

    Esse valor define qual projeto será exibido primeiro
    quando o modal abrir.
  */
  projetoIndex: number
}

export function SecaoProjetosModal({
  children,
  projetoIndex,
}: ProjetoModalProps) {
  /*
    Estado interno do modal.

    Permite navegar entre projetos dentro do próprio modal,
    sem precisar fechar e abrir outro card.
  */
  const [currentIndex, setCurrentIndex] = useState(projetoIndex)

  // Projeto atualmente exibido no modal
  const projeto = projetos[currentIndex]

  /*
    Mídia principal inferior esquerda do modal.

    Em alguns projetos, esse conteúdo é uma imagem.
    No projeto Fokus, esse conteúdo é um vídeo .mp4.
  */
  const midiaInferiorEsquerda = projeto.modal.imagemInferiorEsquerda
  const isVideo = midiaInferiorEsquerda.endsWith(".mp4")

  /*
    Avança para o próximo projeto.

    O operador % garante loop infinito:
    depois do último projeto, volta para o primeiro.
  */
  function handleNextProject() {
    setCurrentIndex((prev) => (prev + 1) % projetos.length)
  }

  /*
    Volta para o projeto anterior.

    Se estiver no primeiro projeto, volta para o último.
  */
  function handlePrevProject() {
    setCurrentIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  /*
    Controla o gesto de arrastar no mobile.

    Arrastar para a esquerda avança.
    Arrastar para a direita volta.
    A velocidade também é considerada para deixar o gesto mais natural.
  */
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

  /*
    Sempre que o modal abre, reseta o projeto exibido
    para o card que o usuário clicou no carousel.
  */
  function handleOpenChange(open: boolean) {
    if (open) {
      setCurrentIndex(projetoIndex)
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      {/* Elemento que dispara a abertura do modal */}
      <DialogTrigger asChild>{children}</DialogTrigger>

      {/*
        Conteúdo do modal.

        Mobile:
        - largura baseada na viewport;
        - scroll vertical habilitado;
        - layout em coluna.

        Desktop:
        - tamanho fixo maior;
        - overflow visível para permitir setas laterais;
        - layout em grid.
      */}
      <DialogContent className="max-h-[90vh] w-[calc(100vw-32px)] max-w-[576px] overflow-x-hidden overflow-y-auto rounded-[16px] border border-white/15 bg-[rgba(32,32,32,0.95)] p-6 text-white shadow-2xl sm:max-w-[576px] lg:h-[675px] lg:w-[1000px] lg:max-w-none lg:overflow-visible lg:rounded-[32px_0px]">
        {/*
          Layout mobile.

          Usa motion.div para permitir arrastar horizontalmente
          e trocar o projeto exibido dentro do modal.
        */}
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

          {/* Descrição do projeto */}
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

          {/* Duas imagens superiores do layout mobile */}
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

          {/* Imagem ou vídeo inferior do layout mobile */}
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

          {/* Tags do projeto */}
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

          {/* Botão para acessar o código do projeto */}
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

        {/*
          Layout desktop.

          Fica escondido no mobile e aparece apenas a partir de lg.
          Usa grid para posicionar texto, imagens, vídeo e botão.
        */}
        <div className="relative hidden h-full w-full lg:block lg:p-1 xl:p-4">
          {/* Setas laterais para navegar entre projetos no desktop */}
          <button
            type="button"
            onClick={handlePrevProject}
            className="absolute top-1/2 left-[-25px] z-50 -translate-y-1/2 text-white transition-opacity hover:opacity-70"
          >
            <ChevronLeft size={38} />
          </button>

          <button
            type="button"
            onClick={handleNextProject}
            className="absolute top-1/2 right-[-25px] z-50 -translate-y-1/2 text-white transition-opacity hover:opacity-70"
          >
            <ChevronRight size={38} />
          </button>

          {/*
            Grid principal do modal desktop.

            As colunas e linhas têm valores fixos para reproduzir
            o layout visual do Figma.
          */}
          <div className="grid h-full w-full grid-cols-[480px_60px_29px_9px_234px] grid-rows-[220px_20px_312px_15px_42px] items-center justify-center">
            {/* Texto principal do modal */}
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

            {/* Imagem superior direita */}
            <img
              src={projeto.modal.imagemTopoDireita}
              alt={projeto.titulo}
              className="col-span-3 col-start-3 row-start-1 h-[220px] w-[312px] object-cover"
            />

            {/* Imagem ou vídeo inferior esquerdo */}
            {isVideo ? (
              <video
                key={midiaInferiorEsquerda}
                src={midiaInferiorEsquerda}
                className="col-span-3 col-start-1 row-start-3 h-[312px] w-[586px] object-cover"
                muted
                playsInline
                controls
              />
            ) : (
              <img
                src={midiaInferiorEsquerda}
                alt={`${projeto.titulo} desktop`}
                className="col-span-3 col-start-1 row-start-3 h-[312px] w-[586px] object-cover"
              />
            )}

            {/* Imagem inferior direita */}
            <img
              src={projeto.modal.imagemInferiorDireita}
              alt={`${projeto.titulo} mobile`}
              className="col-start-5 row-start-3 h-[312px] w-[234px] object-cover"
            />

            {/* Botão de acesso ao código */}
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
