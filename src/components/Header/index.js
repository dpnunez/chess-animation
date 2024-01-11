import { motion } from 'framer-motion'
import { action, line, menuDirection } from './anim'
import useSWR from 'swr'
import { useState } from 'react'
import { anim } from '@/styles/helpers'
import { Background } from './Background'
import { Menu } from './MenuCourses'
import { Logo } from './Logo'
import { ButtonAction } from './ButtonAction'
import { Navigation } from './Navigation'
import { useScrollDirection } from '@/hooks'
import { strapi } from '@/api'

const getCourses = async () => {
  const response = await strapi.get('courses', {
    searchParams: {
      populate: '*',
      'pagination[pageSize]': 4,
    },
  })
  const _res = await response.json()

  return _res.data.map((e) => e.attributes)
}

export const Header = () => {
  const [menuActive, setMenuActive] = useState(null)
  const dir = useScrollDirection()
  const showStatus = dir === 'up' ? 'show' : 'hide'

  const { data: courses } = useSWR('coursesPreview', getCourses)

  return (
    <>
      <motion.div
        {...anim(menuDirection, null, { animate: showStatus })}
        className="fixed w-screen top-0 z-50 bg-white"
        onHoverEnd={() => setMenuActive(false)}
      >
        <motion.div
          className="bg-primary-500 h-[6px] absolute"
          {...anim(line)}
        />
        <div className="container mx-auto h-header-height flex items-center justify-between">
          <div className="flex gap-24 items-center max-sm:flex-1 max-sm:justify-between">
            <Logo />
            <Navigation courses={courses} handleMenu={setMenuActive} />
          </div>
          <motion.div {...anim(action)} className="max-sm:hidden">
            <ButtonAction>Acessar Conteúdo</ButtonAction>
          </motion.div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full" />
        <Menu show={Boolean(menuActive)} data={courses} />
      </motion.div>
      <Background show={Boolean(menuActive)} />
    </>
  )
}
