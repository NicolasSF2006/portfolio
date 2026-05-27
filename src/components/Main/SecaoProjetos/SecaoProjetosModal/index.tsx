import { useEffect, useRef, useState } from "react"

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

    Esse índice define qual projeto será exibido primeiro
    quando o modal for aberto.
  */
  projetoIndex: number
}

export function SecaoProjetosModal({
  children,
  projetoIndex,
}: ProjetoModalProps) {
  /*
    Controla se o modal está aberto ou fechado.

    Esse estado é necessário porque o modal precisa interagir
    com o histórico do navegador no mobile.
  */
  const [open, setOpen] = useState(false)

  /*
    Controla qual projeto está sendo exibido dentro do modal.

    Isso permite navegar entre projetos usando as setas no desktop
    ou arrastando no mobile.
  */
  const [currentIndex, setCurrentIndex] = useState(projetoIndex)

  /*
    Guarda se o modal adicionou uma entrada falsa no histórico.

    Essa referência evita que o site saia da página quando o usuário
    aperta o botão de voltar do celular com o modal aberto.
  */
  const pushedModalHistoryRef = useRef(false)

  // Projeto atualmente exibido no modal
  const projeto = projetos[currentIndex]

  /*
    Mídia exibida na parte inferior esquerda do modal.

    Alguns projetos usam imagem.
    O projeto Fokus usa vídeo .mp4.
  */
  const midiaInferiorEsquerda = projeto.modal.imagemInferiorEsquerda

  /*
    Verifica se a mídia inferior esquerda é um vídeo.

    Se for .mp4, o componente renderiza <video>.
    Caso contrário, renderiza <img>.
  */
  const isVideo = midiaInferiorEsquerda.endsWith(".mp4")

  /*
    Avança para o próximo projeto dentro do modal.

    O operador % faz o modal voltar para o primeiro projeto
    quando chega ao final da lista.
  */
  function handleNextProject() {
    setCurrentIndex((prev) => (prev + 1) % projetos.length)
  }

  /*
    Volta para o projeto anterior dentro do modal.

    Se estiver no primeiro projeto, volta para o último.
  */
  function handlePrevProject() {
    setCurrentIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  /*
    Controla o gesto de arrastar no mobile.

    Arrastar para a esquerda avança para o próximo projeto.
    Arrastar para a direita volta para o projeto anterior.

    A velocidade do gesto também é considerada para deixar
    a experiência mais natural.
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
    Controla abertura e fechamento do modal.

    Quando o modal abre:
    - define o projeto atual com base no card clicado;
    - abre o modal;
    - adiciona uma entrada no histórico do navegador.

    Essa entrada no histórico faz com que o botão "voltar" do celular
    feche o modal antes de sair do site.
  */
  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setCurrentIndex(projetoIndex)
      setOpen(true)

      window.history.pushState(
        {
          modal: "projeto",
        },
        "",
        window.location.href
      )

      pushedModalHistoryRef.current = true

      return
    }

    /*
      Quando o modal é fechado pelo botão X, pelo clique fora ou pelo Esc,
      removemos a entrada falsa do histórico usando history.back().
    */
    if (pushedModalHistoryRef.current) {
      window.history.back()
      return
    }

    setOpen(false)
  }

  /*
    Escuta o evento de voltar do navegador.

    No celular, isso cobre:
    - botão físico/virtual de voltar;
    - gesto de voltar pela lateral da tela.

    Se o modal estiver aberto, o evento fecha o modal
    em vez de deixar o usuário sair do site imediatamente.
  */
  useEffect(() => {
    function handlePopState() {
      if (open && pushedModalHistoryRef.current) {
        pushedModalHistoryRef.current = false
        setOpen(false)
      }
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [open])

  return (
    /*
      Modal controlado pelo estado "open".

      Isso é essencial para permitir que o botão/gesto de voltar
      do navegador feche o modal corretamente.
    */
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* Elemento que dispara a abertura do modal */}
      <DialogTrigger asChild>{children}</DialogTrigger>

      {/*
        Conteúdo do modal.

        Mobile:
        - largura baseada na viewport;
        - scroll vertical habilitado;
        - layout em coluna;
        - navegação por arraste horizontal.

        Desktop:
        - tamanho maior;
        - overflow visível para permitir setas laterais;
        - layout em grid.
      */}
      <DialogContent className="max-h-[90vh] w-[calc(100vw-32px)] max-w-[576px] overflow-x-hidden overflow-y-auto rounded-[16px] border border-white/15 bg-[rgba(32,32,32,0.95)] p-6 text-white shadow-2xl sm:max-w-[576px] lg:h-[675px] lg:w-[1000px] lg:max-w-none lg:overflow-visible lg:rounded-[32px_0px]">
        {/*
          Layout mobile.

          O motion.div permite arrastar o conteúdo para os lados
          e trocar de projeto sem fechar o modal.
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
          {/* Título do projeto */}
          <h2 className="text-center font-['Encode_Sans_Semi_Expanded'] text-[16px] leading-normal font-bold text-[#B3F7FF]">
            {projeto.titulo}
          </h2>

          {/* Subtítulo do projeto */}
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

          {/* Imagens superiores do layout mobile */}
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

          {/* Tags das tecnologias usadas no projeto */}
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

          {/* Botão para acessar o repositório/código do projeto */}
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

          Fica escondido no mobile e aparece apenas em telas grandes.
          Usa grid para posicionar texto, imagens/vídeo, tags e botão.
        */}
        <div className="relative hidden h-full w-full lg:block lg:p-1 xl:p-4">
          {/* Seta para voltar ao projeto anterior */}
          <button
            type="button"
            onClick={handlePrevProject}
            className="absolute top-1/2 left-[-25px] z-50 -translate-y-1/2 text-white transition-opacity hover:opacity-70"
          >
            <ChevronLeft size={38} />
          </button>

          {/* Seta para avançar ao próximo projeto */}
          <button
            type="button"
            onClick={handleNextProject}
            className="absolute top-1/2 right-[-25px] z-50 -translate-y-1/2 text-white transition-opacity hover:opacity-70"
          >
            <ChevronRight size={38} />
          </button>

          {/*
            Grid principal do modal desktop.

            Os valores fixos das colunas e linhas foram definidos
            para reproduzir o layout visual planejado no Figma.
          */}
          <div className="grid h-full w-full grid-cols-[480px_60px_29px_9px_234px] grid-rows-[220px_20px_312px_15px_42px] items-center justify-center">
            {/* Bloco textual do modal */}
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

            {/* Imagem superior direita do modal */}
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

            {/* Imagem inferior direita do modal */}
            <img
              src={projeto.modal.imagemInferiorDireita}
              alt={`${projeto.titulo} mobile`}
              className="col-start-5 row-start-3 h-[312px] w-[234px] object-cover"
            />

            {/* Botão para acessar o código do projeto */}
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
