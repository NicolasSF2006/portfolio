import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { projetos } from "./projetos"
import { SecaoProjetosTitulo } from "./SecaoProjetosTitulo"
import { ProjetoCard } from "./SecaoProjetosCard"
import { SecaoProjetosModal } from "./SecaoProjetosModal"
import { SecaoProjetosFeitoCom } from "./SecaoProjetosFeitoCom"

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isDesktop
}

export function SecaoProjetos() {
  const [activeIndex, setActiveIndex] = useState(0)

  const isDesktop = useIsDesktop()

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % projetos.length)
  }

  function handlePrev() {
    setActiveIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  return (
    <section
      id="projetos"
      className="mt-[180px] flex scroll-mt-[120px] flex-col items-center gap-8 overflow-hidden lg:mt-[250px] lg:gap-14"
    >
      <SecaoProjetosTitulo>
        Meus <strong className="font-bold text-[#B3F7FF]">projetos</strong>
      </SecaoProjetosTitulo>

      <div className="relative flex h-[360px] w-full items-center justify-center lg:h-[400px]">
        <button
          onClick={handlePrev}
          className="absolute left-[26%] z-50 hidden text-white transition-opacity hover:opacity-70 lg:block"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-[26%] z-50 hidden text-white transition-opacity hover:opacity-70 lg:block"
        >
          <ChevronRight size={28} />
        </button>

        {projetos.map((projeto, index) => {
          let offset = index - activeIndex

          if (offset > projetos.length / 2) {
            offset -= projetos.length
          }

          if (offset < -projetos.length / 2) {
            offset += projetos.length
          }

          const isCenter = offset === 0

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

          const positions = isDesktop ? desktopPositions : mobilePositions

          const animation = positions[offset as keyof typeof positions]

          if (!animation) return null

          return (
            <motion.div
              key={projeto.titulo}
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
              drag={!isDesktop ? "x" : false}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (isDesktop) return

                if (info.offset.x < -80) {
                  handleNext()
                }

                if (info.offset.x > 80) {
                  handlePrev()
                }
              }}
              style={{
                zIndex: animation.zIndex,
                position: "absolute",
              }}
              className={
                isCenter
                  ? "pointer-events-auto cursor-grab active:cursor-grabbing lg:cursor-pointer"
                  : "pointer-events-none"
              }
              onClick={() => {
                if (!isCenter) return
              }}
            >
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

      <SecaoProjetosFeitoCom />
    </section>
  )
}
