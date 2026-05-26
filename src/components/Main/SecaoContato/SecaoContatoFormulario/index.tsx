import { useRef, useState } from "react"

import emailjs from "@emailjs/browser"
import { AnimatePresence, motion } from "framer-motion"
import { LoaderCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SecaoContatoFormulario() {
  const formRef = useRef<HTMLFormElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const fieldWrapperClasses = "flex w-[272px] flex-col gap-2 lg:w-full"

  const inputClasses =
    "h-[48px] w-full rounded-[8px] border border-[#202020] bg-[#B3F7FF] px-4 text-sm text-[#202020] outline-none placeholder:text-[12px] placeholder:text-[#202020]"

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formRef.current) return

    try {
      setIsLoading(true)
      setSuccessMessage(false)

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      formRef.current.reset()
      setSuccessMessage(true)

      setTimeout(() => {
        setSuccessMessage(false)
      }, 2000)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex h-[497px] w-[320px] min-w-[320px] flex-col items-center justify-center gap-4 rounded-[12px] bg-[#B3F7FF80] p-6 lg:h-auto lg:w-auto lg:min-w-[320px] lg:items-stretch lg:justify-start lg:gap-6"
    >
      <div className={fieldWrapperClasses}>
        <label className="text-sm leading-[140%] font-bold text-white">
          Nome
        </label>

        <input
          type="text"
          name="user_name"
          required
          placeholder="Digite seu nome"
          className={inputClasses}
        />
      </div>

      <div className={fieldWrapperClasses}>
        <label className="text-sm leading-[140%] font-bold text-white">
          Email
        </label>

        <input
          type="email"
          name="user_email"
          required
          placeholder="Digite seu email"
          className={inputClasses}
        />
      </div>

      <div className={fieldWrapperClasses}>
        <label className="text-sm leading-[140%] font-bold text-white">
          Assunto
        </label>

        <input
          type="text"
          name="subject"
          required
          placeholder="Digite o assunto"
          className={inputClasses}
        />
      </div>

      <div className={fieldWrapperClasses}>
        <label className="text-sm leading-[140%] font-bold text-white">
          Mensagem
        </label>

        <textarea
          name="message"
          required
          placeholder="Digite sua mensagem"
          className="min-h-[80px] w-full resize-none rounded-[8px] border border-[#202020] bg-[#B3F7FF] p-4 text-sm text-[#202020] outline-none placeholder:text-[12px] placeholder:text-[#202020] lg:min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-[272px] gap-2 rounded-[8px_0px] bg-[rgba(30,30,30,0.90)] py-5 text-sm font-semibold text-white hover:bg-black lg:w-full"
      >
        {isLoading ? (
          <>
            <LoaderCircle size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar"
        )}
      </Button>

      <div className="relative h-5 w-full">
        <AnimatePresence mode="wait">
          {successMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center text-center text-sm font-medium text-[#B3F7FF]"
            >
              Email enviado com sucesso!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
