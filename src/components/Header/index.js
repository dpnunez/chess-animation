import { motion } from 'framer-motion'
import { action, line } from './anim'

import { useState } from 'react'
import { anim } from '@/styles/helpers'
import { Background } from './Background'
import { Menu } from './Menu'
import { Logo } from './Logo'
import { ButtonAction } from './ButtonAction'
import { Navigation } from './Navigation'

export const Header = () => {
  const [menuActive, setMenuActive] = useState(null)

  return (
    <>
      <motion.div
        className="fixed w-screen top-0 z-10 bg-white"
        onHoverEnd={() => setMenuActive(false)}
      >
        <motion.div
          className="bg-primary-500 h-[6px] absolute"
          {...anim(line)}
        />
        <div className="container mx-auto h-header-height flex items-center justify-between">
          <div className="flex gap-24 items-center max-sm:flex-1 max-sm:justify-between">
            <Logo />
            <Navigation handleMenu={setMenuActive} />
          </div>
          <motion.div {...anim(action)} className="max-sm:hidden">
            <ButtonAction>Acessar Conteúdo</ButtonAction>
          </motion.div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full" />
        <Menu show={Boolean(menuActive)} />
      </motion.div>
      <Background show={Boolean(menuActive)} />
    </>
  )
}
