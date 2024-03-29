import { InternalHeader } from '@/components'
import { Whatsapp } from '@/components/Icons'
import { anim, cn } from '@/styles/helpers'
import { CheckIcon, Cross1Icon, Half2Icon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import ky from 'ky'
import { useEffect, useMemo, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { buttonContent, buttonsContainer, image } from './anim'

export function Contact() {
  return (
    <section className="page-wrapper">
      <InternalHeader.Root className="mb-10">
        <InternalHeader.Title>Entre em contato</InternalHeader.Title>
        <InternalHeader.Subtitle>
          Preencha o formulário abaixo para entrar em contato com a nossa
          equipe.
        </InternalHeader.Subtitle>
      </InternalHeader.Root>

      <div className="flex max-md:flex-col gap-9">
        <Form />
        <ExtraContactWays />
      </div>
    </section>
  )
}

const Form = () => {
  const { register, handleSubmit, formState, reset } = useForm()
  const [messageStatus, setMessageStatus] = useState(null)
  const [recapToken, setRecapToken] = useState(null)
  const recapRef = useRef()

  const renderButtonContent = useMemo(() => {
    switch (messageStatus) {
      case 'loading':
        return (
          <motion.div key="loading" {...anim(buttonContent)}>
            <Half2Icon className="w-6 h-6 mx-auto animate-spin" />
          </motion.div>
        )
      case 'success':
        return (
          <motion.div key="success" {...anim(buttonContent)}>
            <CheckIcon className="w-6 h-6 mx-auto" />
          </motion.div>
        )
      case 'error':
        return (
          <motion.div
            key="error"
            {...anim(buttonContent)}
            className="flex items-center"
          >
            Ocorreu um erro
            <Cross1Icon className="w-4 h-4 ml-2" />
          </motion.div>
        )
      default:
        return (
          <motion.div key="default" {...anim(buttonContent)}>
            Enviar
          </motion.div>
        )
    }
  }, [messageStatus])

  useEffect(() => {
    if (messageStatus === 'success' || messageStatus === 'error') {
      setTimeout(() => {
        setMessageStatus(null)
      }, 3000)
    }
  }, [messageStatus])

  const onSubmit = async (data) => {
    if (!recapToken) return
    try {
      setMessageStatus('loading')

      await ky.post('/api/contact', { json: data })
      reset({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setMessageStatus('success')
    } catch (err) {
      setMessageStatus('error')
    }
  }
  return (
    <motion.form
      {...anim(buttonsContainer)}
      onSubmit={handleSubmit(onSubmit)}
      className="flex-[3] flex flex-col"
    >
      <div className="flex gap-4 max-md:flex-col">
        <div class="mb-5 flex-1">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Nome
            <span className="text-red-700">*</span>
          </label>
          <input
            {...register('name', { required: true })}
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vasily"
          />
          {formState.errors.name && (
            <span className="text-red-500">Campo Obrigatório</span>
          )}
        </div>
        <div class="mb-5 flex-1">
          <label
            for="lastname"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Sobrenome
            <span className="text-red-700">*</span>
          </label>
          <input
            {...register('lastname', { required: true })}
            type="text"
            id="lastname"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vasily Smyslov"
          />
          {formState.errors.lastname && (
            <span className="text-red-500">Campo Obrigatório</span>
          )}
        </div>
      </div>
      <div className="flex gap-4 max-md:flex-col">
        <div className="mb-5 flex-1">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
            <span className="text-red-700">*</span>
          </label>
          <input
            {...register('email', { required: true })}
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="capa@blanca.com"
          />
          {formState.errors.email && (
            <span className="text-red-500">Campo Obrigatório</span>
          )}
        </div>
        <div className="mb-5 flex-1">
          <label for="phone" class="block mb-2 text-sm font-medium">
            Telefone
          </label>
          <input
            {...register('phone')}
            type="text"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
          />
        </div>
      </div>
      <div className="mb-5 flex-1">
        <label for="subject" class="block mb-2 text-sm font-medium">
          Assunto
          <span className="text-red-700">*</span>
        </label>
        <input
          {...register('subject', { required: true })}
          type="text"
          id="subject"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder=""
        />
        {formState.errors.subject && (
          <span className="text-red-500">Campo Obrigatório</span>
        )}
      </div>
      <div className="mb-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Mensagem
          <span className="text-red-700">*</span>
        </label>
        <textarea
          {...register('message', { required: true })}
          id="message"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          rows="3"
        ></textarea>
        {formState.errors.message && (
          <span className="text-red-500">Campo Obrigatório</span>
        )}
      </div>
      <motion.div
        {...anim(buttonsContainer)}
        className="flex justify-between mt-16 items-center max-md:flex-col gap-4"
      >
        <button
          disabled={messageStatus || !recapToken}
          type="submit"
          className={cn(
            'max-md:w-full bg-primary-500 text-white font-bold p-4 min-w-64 flex justify-center rounded-md disabled:cursor-not-allowed transition-all',
            {
              'bg-red-700': messageStatus === 'error',
              'bg-green-700': messageStatus === 'success',
            },
          )}
        >
          <AnimatePresence mode="wait">{renderButtonContent}</AnimatePresence>
        </button>
        <ReCAPTCHA
          ref={recapRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}
          onChange={setRecapToken}
        />
      </motion.div>
    </motion.form>
  )
}

const ExtraContactWays = () => {
  return (
    <div className="flex-1 flex items-center px-14">
      <div className="flex flex-col items-center gap-3">
        <motion.div
          {...anim(image)}
          className="bg-black/5 p-6 rounded-md text-xl "
        >
          <Whatsapp className="w-10 h-10" />
        </motion.div>
        <motion.h3 {...anim(image, 1)} className="text-xl text-black font-bold">
          Whatsapp:
        </motion.h3>
        <motion.span
          {...anim(image, 2)}
          className="text-lg text-gray-400 text-center"
        >
          Entre em contato enviando mensagem para o número abaixo <br />
        </motion.span>
        <motion.a
          {...anim(image, 3)}
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE.replace(
            /[^0-9]/g,
            '',
          )}`}
          className="text-primary-500 font-medium"
        >
          {process.env.NEXT_PUBLIC_PHONE}
        </motion.a>
      </div>
    </div>
  )
}
