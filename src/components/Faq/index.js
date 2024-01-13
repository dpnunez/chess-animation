import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { faq } from '@/constants'
import { Accortion } from '@/components'

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
