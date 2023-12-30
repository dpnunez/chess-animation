import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { card } from './anim'

export const Hero = () => {
  return (
    <motion.div className="container mx-auto h-screen pt-header-height flex gap-10">
      <div className="flex-[1] flex flex-col justify-center gap-16 items-start">
        <h1 className="text-5xl font-bold">
          Lorem Ipsum <br />
          Dolor imet
        </h1>
        <h2 className="text-xl leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu
          convallis, facilisis enim eu, blandit nunc.
        </h2>
        <button className="bg-primary-500 text-xl text-white rounded-full py-4 px-9">
          Lorem ipsum
        </button>
      </div>
      <div className="flex-[2] flex  items-center justify-center overflow-visible">
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
          className="h-96 w-96 bg-black rounded-3xl overflow-hidden"
        >
          {/* Image 1 */}
          <motion.img
            src="https://source.unsplash.com/random"
            className="h-full w-full object-cover"
            alt=""
          />
        </motion.div>
        <motion.div
          {...anim(card, 1)}
          className="h-96 w-96 rounded-3xl flex items-center justify-center "
        >
          <div className="h-[85%] aspect-square bg-black rounded-3xl" />
        </motion.div>
      </div>
      <div className="flex gap-1">
        <motion.div {...anim(card, 2)} className="h-96 w-96 relative">
          <div className="h-[75%] aspect-square absolute bg-black rounded-3xl top-6 right-6" />
        </motion.div>
        <motion.div
          {...anim(card, 3)}
          className="h-96 w-96 bg-black rounded-3xl relative overflow-hidden"
        >
          {/* Image 2 */}
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}
