import { useRef, useState } from "react"

import emailjs from "@emailjs/browser"
import { AnimatePresence, motion } from "framer-motion"
import { LoaderCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  /*
    Referência direta ao elemento <form>.

    O EmailJS usa essa referência para capturar os campos do formulário
    e enviar os dados para o template configurado na plataforma.
  */
  const formRef = useRef<HTMLFormElement>(null)

  /*
    Estado que controla o carregamento do envio.

    Enquanto isLoading for true, o botão fica desabilitado
    e exibe o spinner de carregamento.
  */
  const [isLoading, setIsLoading] = useState(false)

  /*
    Estado que controla a mensagem de sucesso.

    Quando o email é enviado, a mensagem aparece com fade-in
    e desaparece automaticamente depois de 2 segundos.
  */
  const [successMessage, setSuccessMessage] = useState(false)

  /*
    Classes reutilizadas nos wrappers dos campos.

    No mobile, os campos têm largura fixa de 272px.
    No desktop, ocupam toda a largura do formulário.
  */
  const fieldWrapperClasses = "flex w-[272px] flex-col gap-2 lg:w-full"

  /*
    Classes reutilizadas nos inputs.

    Todos os campos de texto seguem o mesmo visual:
    fundo azul, borda escura, texto escuro e placeholder padronizado.
  */
  const inputClasses =
    "h-[48px] w-full rounded-[8px] border border-[#202020] bg-[#B3F7FF] px-4 text-sm text-[#202020] outline-none placeholder:text-[12px] placeholder:text-[#202020]"

  /*
    Função executada ao enviar o formulário.

    event.preventDefault() impede o recarregamento da página.
    emailjs.sendForm() envia os dados para o serviço configurado.
  */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Garante que o formulário existe antes de tentar enviar
    if (!formRef.current) return

    try {
      setIsLoading(true)
      setSuccessMessage(false)

      /*
        Envia o formulário usando variáveis de ambiente.

        Essas variáveis devem estar no arquivo .env:
        VITE_EMAILJS_SERVICE_ID
        VITE_EMAILJS_TEMPLATE_ID
        VITE_EMAILJS_PUBLIC_KEY
      */
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Limpa os campos após o envio
      formRef.current.reset()

      // Exibe a mensagem de sucesso
      setSuccessMessage(true)

      // Remove a mensagem de sucesso depois de 2 segundos
      setTimeout(() => {
        setSuccessMessage(false)
      }, 2000)
    } catch (error) {
      // Mostra o erro no console para facilitar debug
      console.error(error)
    } finally {
      // Finaliza o estado de carregamento, mesmo se der erro
      setIsLoading(false)
    }
  }

  return (
    /*
      Formulário de contato.

      No mobile, possui tamanho fixo para seguir o layout do Figma.
      No desktop, sua altura se adapta ao conteúdo.
    */
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex h-[497px] w-[320px] min-w-[320px] flex-col items-center justify-center gap-4 rounded-[12px] bg-[#B3F7FF80] p-6 lg:h-auto lg:w-auto lg:min-w-[320px] lg:items-stretch lg:justify-start lg:gap-6"
    >
      {/* Campo de nome */}
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

      {/* Campo de email */}
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

      {/* Campo de assunto */}
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

      {/* Campo de mensagem */}
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

      {/*
        Botão de envio.

        Durante o envio, mostra um ícone animado e desabilita o botão
        para evitar múltiplos envios.
      */}
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

      {/*
        Área reservada para a mensagem de sucesso.

        A div possui altura fixa para evitar que o formulário se mova
        quando a mensagem aparece ou desaparece.
      */}
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
