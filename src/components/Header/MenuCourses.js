import { useState } from 'react'
import { Arrow } from '@/components'
import LinkNext from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { menu, menuItem } from './anim'
import { anim } from '@/styles/helpers'

export const Menu = ({ show, data }) => {
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
          {data && (
            <div className="flex justify-between gap-8">
              {data.map((course, i) => (
                <motion.div
                  {...anim(menuItem, i)}
                  key={course.name}
                  className="py-4 flex-1"
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

const CourseCard = ({ cover, name, slug, externalUrl }) => {
  const [hover, setHover] = useState(false)
  const linkProps = externalUrl
    ? {
        href: externalUrl,
        target: '_blank',
      }
    : {
        href: `/courses/${slug}`,
      }
  return (
    <LinkNext {...linkProps} className="flex flex-col gap-4 group">
      <motion.div
        className="relative"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.data.attributes.url}`}
          className="w-full object-cover h-[200px] rounded-2xl group-hover:brightness-50 transition-all"
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
