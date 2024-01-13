import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { card, container } from './anim'
import { CTAButton } from '@/components'

export const Hero = () => {
  return (
    <motion.div className="container mx-auto h-screen pt-header-height flex flex-col gap-10 md:flex-row">
      <motion.div
        {...anim(container)}
        className="flex-[1] flex flex-col justify-center gap-16 items-center md:items-start my-10 max-md:text-center"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Treine com os melhores</h1>
          <h2 className="text-xl leading-8">
            Aprimore suas habilidades no xadrez com a expertise de alguns dos
            melhores jogadores brasileiros. Aprenda e evolua no jogo junto
            conosco. Venha fazer parte dessa jornada de crescimento!
          </h2>
        </div>
        {/* <button className="bg-primary-500 text-xl text-white rounded-md py-4 px-9 font-bold">
          Comece agora
        </button> */}
        <CTAButton.root>Comece agora</CTAButton.root>
      </motion.div>
      <div className="flex-[2] items-center justify-center overflow-visible hidden md:flex">
        <HeroImage />
      </div>
    </motion.div>
  )
}

const HeroImage = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <motion.div
          {...anim(card, 0)}
          className="md:h-96 md:w-96 w-72 h-72 bg-black rounded-3xl overflow-hidden"
        >
          {/* Image 1 */}
          <motion.img
            src="https://chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com/pexels_cottonbro_studio_8859414_b80ff927ea.jpg"
            className="h-full w-full object-cover bg-slate-100"
            alt=""
          />
        </motion.div>
        <motion.div
          {...anim(card, 1)}
          className="md:h-96 md:w-96 w-72 h-72 rounded-3xl flex items-center justify-center "
        >
          <div className="h-[85%] aspect-square bg-black rounded-3xl" />
        </motion.div>
      </div>
      <div className="flex gap-1">
        <motion.div
          {...anim(card, 3)}
          className="md:h-96 md:w-96 w-72 h-72 relative"
        >
          <div className="h-[75%] aspect-square absolute bg-black rounded-3xl top-6 right-6" />
        </motion.div>
        <motion.div
          {...anim(card, 2)}
          className="md:h-96 md:w-96 w-72 h-72 bg-black rounded-3xl relative overflow-hidden"
        >
          {/* Image 2 */}
          <img
            src="https://chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com/pexels_vlada_karpovich_6114965_82fc604cde.jpg"
            alt=""
            className="h-full w-full object-cover bg-slate-100"
          />
        </motion.div>
      </div>
    </div>
  )
}
