import { useState } from 'react'
import { Arrow } from '@/components'
import LinkNext from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { menu, menuItem } from './anim'
import { anim } from '@/styles/helpers'

export const Menu = ({ show }) => {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="overflow-hidden container mx-auto font-medium"
          {...anim(menu)}
        >
          <div className="py-7">
            <h2 className="text-md text-black">Escolha seu curso</h2>
          </div>

          <div className="flex justify-between gap-8">
            {courseList.map((course, i) => (
              <motion.div
                {...anim(menuItem, i)}
                key={course.name}
                className="py-4 flex-1"
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

const CourseCard = ({ image, name, href }) => {
  const [hover, setHover] = useState(false)

  return (
    <LinkNext href={href} className="flex flex-col gap-4">
      <motion.div
        className="relative"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <img
          src={image}
          className="w-full object-cover h-[200px] rounded-2xl"
          alt=""
        />
        <AnimatePresence>
          {hover && <Arrow className="bottom-4 right-4" />}
        </AnimatePresence>
      </motion.div>
      <div className="text-black font-semibold">{name}</div>
    </LinkNext>
  )
}

const courseList = [
  {
    name: 'Curso de Xadrez',
    image: 'https://via.placeholder.com/150',
    href: '/#',
  },
  {
    name: 'Curso de Xadrez2',
    image: 'https://via.placeholder.com/150',
    href: '/#',
  },
  {
    name: 'Curso de Xadrez3',
    image: 'https://via.placeholder.com/150',
    href: '/#',
  },
  {
    name: 'Curso de Xadre4',
    image: 'https://via.placeholder.com/150',
    href: '/#',
  },
]
