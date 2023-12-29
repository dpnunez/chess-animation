import { motion, AnimatePresence } from 'framer-motion'
import { background, line, menu, menuItem } from './anim'
import { Link, AnimatedLogo, Arrow } from '@/components'
import LinkNext from 'next/link'
import { useState } from 'react'
import { anim } from '@/styles/helpers'

export const Header = () => {
  const [menuActive, setMenuActive] = useState(null)

  return (
    <>
      <motion.div
        className="fixed w-screen top-0 z-10 bg-white"
        onHoverEnd={() => setMenuActive(false)}
      >
        <motion.div className="bg-primary-500 h-[6px]" {...anim(line)} />
        <div className="container mx-auto h-[100px] flex items-center justify-between">
          <div className="flex gap-24 items-center">
            <Logo />
            <nav className="flex gap-20">
              {items.map((item) => (
                <motion.div
                  key={item.label}
                  onHoverStart={() => setMenuActive(item.showMenu || null)}
                >
                  <Link
                    href={item.href}
                    className="text-black font-semibold text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <div>actions</div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full" />
        <Menu show={Boolean(menuActive)} />
      </motion.div>
      <Background show={Boolean(menuActive)} />
    </>
  )
}

const Menu = ({ show }) => {
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

const Background = ({ show }) => {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          {...anim(background)}
          className="opacity-45 bg-black fixed w-screen h-screen top-0"
        />
      ) : null}
    </AnimatePresence>
  )
}

const Logo = () => (
  <LinkNext className="flex gap-2" href="/">
    <AnimatedLogo className="w-12 h-12" />
    <div className="text-black text-2xl font-bold leading-6">
      Chess
      <br />
      Name
    </div>
  </LinkNext>
)

const items = [
  {
    label: 'Home',
    href: '/',
  },
  {
    showMenu: 'cursos',
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

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
