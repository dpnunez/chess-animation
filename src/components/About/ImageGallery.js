import { motion, AnimatePresence } from 'framer-motion'
import { backgroundImage, currentImageAnim, variants } from './anim'
import { anim } from '@/styles/helpers'

export const ImageGallery = ({ currentImage, imagePosition }) => {
  return (
    <div className="absolute w-full h-full max-md:hidden">
      <motion.div
        initial="left"
        variants={variants}
        animate={imagePosition}
        className="sticky h-[60dvh] top-header-height flex items-center justify-center w-[50%] my-[20dvh]"
        style={{
          perspective: 1800,
        }}
      >
        <motion.div
          initial="left"
          variants={backgroundImage}
          animate={imagePosition}
          className="origin-center h-[40dvh] w-[90%] bg-slate-200 rounded-3xl"
        >
          <AnimatePresence>
            {currentImage && (
              <>
                <motion.div
                  className="w-full h-full absolute overflow-hidden rounded-3xl grayscale brightness-50"
                  style={{
                    background: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${currentImage})`,
                  }}
                />
                <motion.img
                  className="absolute w-[80%] h-[90%] rounded-2xl "
                  src={currentImage}
                  key={currentImage}
                  {...anim(currentImageAnim, imagePosition)}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}
