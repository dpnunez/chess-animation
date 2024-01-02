import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { container, divider } from './anim'

export const Divider = () => {
  return (
    <motion.div
      {...anim(container)}
      className="container mx-auto overflow-hidden"
    >
      <motion.hr {...anim(divider)} className="w-full" />
    </motion.div>
  )
}
