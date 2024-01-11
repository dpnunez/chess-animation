import { anim } from '@/styles/helpers'
import { AnimatedText } from '../AnimatedText'
import { textAnim } from './anim'
import { motion } from 'framer-motion'

export const HeadeAbout = () => {
  return (
    <div className="max-md:mb-48 flex gap-4 flex-col items-center justify-center mt-20">
      <AnimatedText
        animation={textAnim}
        className="text-md uppercase font-bold text-primary-500"
      >
        Impulsinando o xadrez brasileiro
      </AnimatedText>
      <motion.h1 {...anim(textAnim)} className="text-3xl font-bold">
        Sobre nós
      </motion.h1>
      <motion.h2
        {...anim(textAnim)}
        className="text-2xl md:max-w-[40%] text-center text-gray-500 leading-10"
      >
        Paixão Pelo Xadrez, Compromisso com Seu Crescimento
      </motion.h2>
    </div>
  )
}
