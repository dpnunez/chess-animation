import { anim, cn } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { circleAnim, icon } from './anim'

export const Arrow = ({ className }) => {
  return (
    <motion.div
      className={cn(
        'absolute bg-primary-500 flex items-center justify-center rounded-full overflow-hidden h-14 w-14',
        className,
      )}
      {...anim(circleAnim)}
    >
      <motion.div {...anim(icon)} className="text-white">
        <ArrowRightIcon />
      </motion.div>
    </motion.div>
  )
}
