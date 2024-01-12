import { anim } from '@/styles/helpers'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { arrow, cardBg, container, contentAnim, contentText } from './anim'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { faq } from '@/constants'

export const Faq = () => {
  const [openAccortion, setOpenAccortion] = useState(null)

  return (
    <div className="my-section-spacing container mx-auto ">
      <h2 className="section-title text-center">Perguntas frequentes</h2>
      <div className="flex flex-col md:max-w-[50%] mx-auto">
        {faq.map((accordion) => (
          <FaqItem
            accordion={accordion}
            setOpenAccortion={setOpenAccortion}
            openAccortion={openAccortion}
            key={accordion.id}
          />
        ))}
      </div>
    </div>
  )
}

const FaqItem = ({ accordion, openAccortion, setOpenAccortion }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 60vh'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.87, 1])

  return (
    <div
      ref={ref}
      className="border-b-2 border-gray-300 last-of-type:border-b-0"
    >
      <motion.div
        className="opacity-0 scale-95 origin-bottom"
        key={accordion.id}
        style={{ opacity, scale }}
      >
        <p className="sr-only">{accordion.title}</p>
        <p className="sr-only">{accordion.contnet}</p>
        <Accortion.root
          open={openAccortion === accordion.id}
          handleOpen={() => setOpenAccortion(accordion.id)}
          handleClose={() => setOpenAccortion(null)}
        >
          <Accortion.title>{accordion.title}</Accortion.title>
          <Accortion.content>{accordion.content}</Accortion.content>
        </Accortion.root>
      </motion.div>
    </div>
  )
}

const AccortionTitle = ({ children }) => {
  return <motion.h2 className="text-xl font-medium">{children}</motion.h2>
}

const AccortionRoot = ({ open, children, handleOpen, handleClose }) => {
  const title = children.find((child) => child.type === AccortionTitle)
  const content = children.find((child) => child.type === AccortionContent)
  const bgAnimation = anim(cardBg, null, {
    opened: 'opened',
    closed: 'closed',
    animate: open ? 'opened' : 'closed',
  })

  const handleClick = () => (open ? handleClose() : handleOpen())

  return (
    <motion.div
      {...anim(container, null, {
        opened: 'opened',
        closed: 'closed',
        animate: open ? 'opened' : 'closed',
      })}
      className="cursor-pointer overflow-hidden transition-colors relative"
    >
      <button
        className="p-8 flex w-full justify-between z-10 relative focus:outline-none focus-visible:outline-none"
        onClick={handleClick}
      >
        {title}
        <motion.div
          {...anim(arrow, null, {
            opened: 'opened',
            closed: 'closed',
            animate: open ? 'opened' : 'closed',
          })}
        >
          <ChevronDownIcon width={24} height={24} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div {...anim(contentAnim)} className="z-10 relative">
            <div className="px-11 pb-11">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        {...bgAnimation}
        className="absolute bg-primary-reverse bottom-0 h-full w-full left-0 pointer-events-none"
      />
      <motion.div
        {...bgAnimation}
        className="absolute z-20 saturate-150 backdrop-invert bottom-0 h-full w-full left-0 pointer-events-none"
      />
    </motion.div>
  )
}

const AccortionContent = ({ children }) => {
  return <motion.div {...anim(contentText)}>{children}</motion.div>
}

const Accortion = {
  root: AccortionRoot,
  title: AccortionTitle,
  content: AccortionContent,
}
