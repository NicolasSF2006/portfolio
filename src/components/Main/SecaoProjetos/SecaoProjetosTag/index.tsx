type Props = {
  nome: string
  cor: string
  cor_texto?: string
}

export function ProjetoTag({ nome, cor, cor_texto = "#FFF" }: Props) {
  return (
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
