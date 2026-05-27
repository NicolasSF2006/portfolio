import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { projetos } from "./projetos"
import { SecaoProjetosTitulo } from "./SecaoProjetosTitulo"
import { ProjetoCard } from "./SecaoProjetosCard"
import { SecaoProjetosModal } from "./SecaoProjetosModal"
import { SecaoProjetosFeitoCom } from "./SecaoProjetosFeitoCom"

/*
  Hook responsável por identificar se a tela está em tamanho desktop.

  Ele é usado porque o carousel possui comportamentos diferentes:
  - desktop: navegação por setas e cards em formato circular/arco;
  - mobile: navegação por arraste horizontal.
*/
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Executa uma vez ao carregar para definir o estado inicial
    handleResize()

    // Atualiza o estado sempre que a tela muda de tamanho
    window.addEventListener("resize", handleResize)

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isDesktop
}

export function SecaoProjetos() {
  /*
    Índice do projeto ativo no carousel.

    O projeto ativo é sempre o card central.
  */
  const [activeIndex, setActiveIndex] = useState(0)

  const isDesktop = useIsDesktop()

  /*
    Avança para o próximo projeto.

    O operador % faz o carousel voltar para o primeiro item
    quando chega ao final da lista.
  */
  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % projetos.length)
  }

  /*
    Volta para o projeto anterior.

    Se estiver no primeiro item, volta para o último,
    mantendo o comportamento de loop infinito.
  */
  function handlePrev() {
    setActiveIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  return (
    /*
      Seção de projetos.

      id="projetos" permite que o botão "Ver Projetos" navegue até esta seção.
      scroll-mt-[120px] evita que o header fixo cubra o início da seção.
    */
    <section
      id="projetos"
      className="mt-[180px] flex scroll-mt-[120px] flex-col items-center gap-8 overflow-hidden lg:mt-[250px] lg:gap-14"
    >
      <SecaoProjetosTitulo>
        Meus <strong className="font-bold text-[#B3F7FF]">projetos</strong>
      </SecaoProjetosTitulo>

      {/*
        Área visual do carousel.

        relative permite posicionar os cards com position absolute.
        A altura muda no desktop para comportar o formato em arco.
      */}
      <div className="relative flex h-[360px] w-full items-center justify-center lg:h-[400px]">
        {/* Seta esquerda exibida apenas no desktop */}
        <button
          onClick={handlePrev}
          className="absolute left-[35%] z-50 hidden text-white transition-opacity hover:opacity-70 lg:block"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Seta direita exibida apenas no desktop */}
        <button
          onClick={handleNext}
          className="absolute right-[35%] z-50 hidden text-white transition-opacity hover:opacity-70 lg:block"
        >
          <ChevronRight size={28} />
        </button>

        {projetos.map((projeto, index) => {
          /*
            Calcula a distância do card atual em relação ao card ativo.

            offset === 0: card central
            offset === -1: card à esquerda
            offset === 1: card à direita
          */
          let offset = index - activeIndex

          /*
            Ajusta o offset para criar o efeito de loop.

            Isso impede que os cards "sumam" quando o usuário passa
            do último para o primeiro projeto.
          */
          if (offset > projetos.length / 2) {
            offset -= projetos.length
          }

          if (offset < -projetos.length / 2) {
            offset += projetos.length
          }

          const isCenter = offset === 0

          /*
            Posições dos cards no desktop.

            O card central fica reto e maior.
            Os laterais ficam deslocados, menores e rotacionados,
            criando o efeito visual de carousel em arco.
          */
          const desktopPositions = {
            [-1]: {
              x: -470,
              y: 120,
              scale: 0.9,
              rotate: -27,
              opacity: 1,
              zIndex: 10,
            },

            [0]: {
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              opacity: 1,
              zIndex: 20,
            },

            [1]: {
              x: 470,
              y: 120,
              scale: 0.9,
              rotate: 27,
              opacity: 1,
              zIndex: 10,
            },
          }

          /*
            Posições dos cards no mobile.

            No mobile, o layout é mais reto/horizontal.
            O card central recebe um leve destaque com scale maior.
          */
          const mobilePositions = {
            [-1]: {
              x: -260,
              y: 0,
              scale: 1,
              rotate: 0,
              opacity: 1,
              zIndex: 5,
            },

            [0]: {
              x: 0,
              y: 0,
              scale: 1.1,
              rotate: 0,
              opacity: 1,
              zIndex: 20,
            },

            [1]: {
              x: 260,
              y: 0,
              scale: 1,
              rotate: 0,
              opacity: 1,
              zIndex: 5,
            },
          }

          /*
            Escolhe quais posições usar de acordo com o tamanho da tela.
          */
          const positions = isDesktop ? desktopPositions : mobilePositions

          const animation = positions[offset as keyof typeof positions]

          /*
            Caso algum projeto fique fora das posições previstas,
            ele não será renderizado.
          */
          if (!animation) return null

          return (
            <motion.div
              key={projeto.titulo}
              /*
                Animação do card.

                Cada card se move, escala e rotaciona conforme sua posição
                em relação ao card ativo.
              */
              animate={{
                x: animation.x,
                y: animation.y,
                scale: animation.scale,
                rotate: animation.rotate,
                opacity: animation.opacity,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              /*
                No mobile, o usuário pode arrastar o card para trocar de projeto.
                No desktop, o drag é desativado porque a navegação acontece por setas.
              */
              drag={!isDesktop ? "x" : false}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (isDesktop) return

                // Arrastou para a esquerda: próximo projeto
                if (info.offset.x < -80) {
                  handleNext()
                }

                // Arrastou para a direita: projeto anterior
                if (info.offset.x > 80) {
                  handlePrev()
                }
              }}
              style={{
                zIndex: animation.zIndex,
                position: "absolute",
              }}
              /*
                Apenas o card central pode receber interação.

                Os cards laterais ficam visíveis, mas não clicáveis,
                evitando abrir o modal do projeto errado.
              */
              className={
                isCenter
                  ? "pointer-events-auto cursor-grab active:cursor-grabbing lg:cursor-pointer"
                  : "pointer-events-none"
              }
            >
              {/*
                Modal de detalhes do projeto.

                O projetoIndex indica ao modal qual projeto deve abrir
                quando o usuário clicar no card central.
              */}
              <SecaoProjetosModal projetoIndex={index}>
                <div>
                  <ProjetoCard
                    titulo={projeto.titulo}
                    imagem={projeto.imagem}
                    tags={projeto.tags}
                    link={projeto.link}
                  />
                </div>
              </SecaoProjetosModal>
            </motion.div>
          )
        })}
      </div>

      {/* Bloco informando as tecnologias usadas para construir este portfólio */}
      <SecaoProjetosFeitoCom />
    </section>
  )
}
