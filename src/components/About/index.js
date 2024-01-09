import { aboutSections } from '@/constants'
import { anim, cn } from '@/styles/helpers'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedText } from '../AnimatedText'
import { backgroundImage, currentImageAnim, textAnim, variants } from './anim'
// import ReactLenis from '@studio-freight/react-lenis'

const HeadeAbout = () => {
  return (
    <div className="max-md:mb-48 flex gap-4 flex-col items-center justify-center mt-20">
      <AnimatedText
        animation={textAnim}
        className="text-md uppercase font-bold text-primary-500"
      >
        Lorem ipsum dolor sit amet
      </AnimatedText>
      <motion.h1 {...anim(textAnim)} className="text-3xl font-bold">
        Sobre
      </motion.h1>
      <motion.h2
        {...anim(textAnim)}
        className="text-2xl md:max-w-[40%] text-center text-gray-500 leading-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae semper
        nisl. Sed euismod, nisl vitae aliquam interdum, nisl velit tincidunt
        elit, vitae.
      </motion.h2>
    </div>
  )
}

const AboutItemWrapper = ({ children, isRight, onViewportEnter }) => {
  return (
    <motion.div
      className={cn(
        'flex flex-col gap-4 justify-center md:w-[45%] md:min-h-[100dvh] items-start max-md:mb-32',
        {
          'mr-auto': isRight,
          'ml-auto': !isRight,
        },
      )}
    >
      {children}
      <motion.div onViewportEnter={onViewportEnter} />
    </motion.div>
  )
}

const ImageGallery = ({ currentImage, imagePosition }) => {
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

const AboutPage = () => {
  const [imagePosition, setImagePosition] = useState('left')
  const [currentImage, setCurrentImage] = useState(aboutSections[0].image)

  return (
    // <ReactLenis root>
    <div className="page-wrapper">
      <HeadeAbout />
      <div className="relative">
        <ImageGallery
          currentImage={currentImage}
          imagePosition={imagePosition}
        />
        {aboutSections.map((section, index) => {
          const right = index % 2 === 1
          return (
            <AboutItemWrapper
              isRight={right}
              key={section.title}
              onViewportEnter={() => {
                setImagePosition(right ? 'right' : 'left')
                setCurrentImage(section.image)
              }}
            >
              <span className="text-primary-500 bg-primary-500/15 p-2 py-1 rounded-md font-bold">
                Item {index}
              </span>
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <p className="mt-2 text-2xl leading-10 text-gray-500">
                {section.description}
              </p>
            </AboutItemWrapper>
          )
        })}
      </div>
    </div>
    // </ReactLenis>
  )
}

export { AboutPage }
