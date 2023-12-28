import { anim, cn } from '@/styles/helpers'
import { motion } from 'framer-motion'
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
      <motion.svg
        {...anim(icon)}
        style={{ width: '30%' }}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <rect width="100" height="100" fill="#000" />
      </motion.svg>
    </motion.div>
  )
}
