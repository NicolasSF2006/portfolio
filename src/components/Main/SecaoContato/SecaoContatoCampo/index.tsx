type Props = {
  label: string
  textarea?: boolean
}

export function SecaoContatoCampo({ label, textarea = false }: Props) {
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
