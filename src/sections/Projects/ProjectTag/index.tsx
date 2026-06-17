type Props = {
  name: string
  backgroundColor: string

  /*
    textColor é opcional.

    Quando não for informada, o texto da tag será branco por padrão.
  */
  textColor?: string
}

export function ProjectTag({
  name,
  backgroundColor,
  textColor = "#FFF",
}: Props) {
  return (
    /*
      Tag visual usada para representar uma tecnologia.

      As cores vêm dos dados do projeto, permitindo reutilizar
      o componente com diferentes tecnologias.
    */
    <span
      className="inline-flex h-[20px] items-center justify-center rounded-[25px] px-3 text-xs font-bold"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {name}
    </span>
  )
}
