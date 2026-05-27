type Props = {
  nome: string
  cor: string

  /*
    cor_texto é opcional.

    Quando não for informada, o texto da tag será branco por padrão.
  */
  cor_texto?: string
}

export function ProjetoTag({ nome, cor, cor_texto = "#FFF" }: Props) {
  return (
    /*
      Tag visual usada para representar uma tecnologia.

      A cor de fundo e a cor do texto vêm dos dados do projeto,
      permitindo reutilizar o componente com diferentes tecnologias.
    */
    <span
      className="inline-flex h-[20px] items-center justify-center rounded-[25px] px-3 text-xs font-bold"
      style={{
        backgroundColor: cor,
        color: cor_texto,
      }}
    >
      {nome}
    </span>
  )
}
