import { AnimatePresence, motion } from 'framer-motion'
import { background } from './anim'
import { anim } from '@/styles/helpers'

export const Background = ({ show }) => {
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
