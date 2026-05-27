type Props = {
  label: string
  textarea?: boolean
}

export function SecaoContatoCampo({ label, textarea = false }: Props) {
  /*
    Classes base compartilhadas entre input e textarea.

    Isso evita repetição de estilos caso esse componente seja usado
    para montar campos de formulário de forma mais reutilizável.
  */
  const baseClasses = `
    w-full
    rounded-lg
    border
    border-[#202020]
    bg-[#B3F7FF]
    px-4
    py-3
    text-sm
    text-[#202020]
    outline-none
    placeholder:text-[12px]
    placeholder:text-[#202020]
  `

  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-sm leading-[140%] font-bold text-white">
        {label}
      </label>

      {/*
        Renderiza textarea ou input de acordo com a prop "textarea".

        textarea = true: campo maior para mensagens.
        textarea = false: input comum.
      */}
      {textarea ? (
        <textarea
          placeholder="Digitar"
          className={`${baseClasses} min-h-[120px] resize-none`}
        />
      ) : (
        <input
          type="text"
          placeholder="Digitar"
          className={`${baseClasses} h-[48px]`}
        />
      )}
    </div>
  )
}
