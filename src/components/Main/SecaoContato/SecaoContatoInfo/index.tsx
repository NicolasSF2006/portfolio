import type { ReactNode } from "react"

type Props = {
  icon: ReactNode
  text: string
}

export function SecaoContatoInfo({ icon, text }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-white [&_svg]:h-8 [&_svg]:w-8">{icon}</div>

      <p className="text-[14px] leading-[26px] font-normal text-white lg:text-xl lg:leading-6">
        {text}
      </p>
    </div>
  )
}
