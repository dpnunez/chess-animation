import { motion } from 'framer-motion'
import { PersonIcon } from '@radix-ui/react-icons'
import { anim } from '@/styles/helpers'
import { Whatsapp } from '../Icons'
import { testimonials } from '@/constants'
import { card } from './anim'
import { useDraggable } from 'react-use-draggable-scroll'
import { useCallback, useRef, useState } from 'react'

const Testimonial = () => {
  const containerScroll = useRef()
  const { events } = useDraggable(containerScroll)
  const [marginContainer, setMarginContainer] = useState(null)

  const title = useCallback((e) => {
    if (e) {
      const { x } = e.getBoundingClientRect()
      setMarginContainer(x)
    }
  }, [])

  return (
    <div className="flex flex-col w-full bg-black py-16 text-white relative">
      <h2
        ref={title}
        className="max-md:text-center container mx-auto section-title"
      >
        Depoimentos
      </h2>
      <h3 className="max-md:text-center text-2xl text-gray-500 font-normal container mx-auto">
        Veja o que nossos alunos estão falando sobre nós
      </h3>
      <div
        {...events}
        ref={containerScroll}
        className="flex w-full overflow-scroll py-3 px-4 mt-10 scrollbar-none"
      >
        {testimonials.map((item, i) => {
          return (
            <motion.div
              {...anim(card, null, { viewport: { once: false } })}
              key={i}
              style={{
                marginLeft: i === 0 ? marginContainer : 0,
              }}
              className="min-w-96 max-w-[100vw] h-96 ring-1 ring-gray-700 rounded-3xl mx-6 p-6 flex flex-col gap-8"
            >
              {item.image ? (
                <img
                  src={item.image}
                  className="w-16 aspect-square rounded-full object-cover"
                  alt=""
                />
              ) : (
                <PersonIcon className="w-16 h-16 p-4 bg-white/15 rounded-full text-white/35" />
              )}
              <span className="font-mono">&quot;{item.text}&quot;</span>

              <div className="flex items-center gap-4">
                <Whatsapp className="w-8 h-8 fill-white" />
                <span>{item.name}</span>
              </div>
            </motion.div>
          )
        })}
      </div>
      <span className="text-[800px] top-0 leading-[0.9] right-24 opacity-10 absolute font-serif pointer-events-none">
        ”
      </span>
    </div>
  )
}

export { Testimonial }
