import { aboutSections } from '@/constants'
import { anim, cn } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { HeadeAbout } from './Header'
import { ImageGallery } from './ImageGallery'
import { itemText } from './anim'
// import ReactLenis from '@studio-freight/react-lenis'

const AboutItemWrapper = ({ children, isRight, onViewportEnter, active }) => {
  return (
    <motion.div
      initial="hidden"
      {...anim(itemText, active)}
      className={cn(
        'flex flex-col gap-4 justify-center md:w-[45%] md:min-h-[100dvh] items-start max-md:mb-32',
        {
          'mr-auto origin-bottom-left': isRight,
          'ml-auto origin-bottom-right': !isRight,
        },
      )}
    >
      {children}
      <motion.div onViewportEnter={onViewportEnter} />
    </motion.div>
  )
}

const AboutPage = () => {
  const [imagePosition, setImagePosition] = useState('left')
  const [currentImage, setCurrentImage] = useState(aboutSections[0].image)
  const [currentItem, setCurrentItem] = useState(0)

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
              active={currentItem === index}
              key={section.title}
              onViewportEnter={() => {
                setImagePosition(right ? 'right' : 'left')
                setCurrentImage(section.image)
                setCurrentItem(index)
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
