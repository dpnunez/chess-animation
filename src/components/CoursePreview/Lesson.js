import { anim, cn } from '@/styles/helpers'
import { LockClosedIcon, PlayIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { openIndicator } from './anim'

export const Lesson = ({ name, link, onClick, open }) => {
  const isLocked = !link

  return (
    <button
      onClick={onClick}
      key={name}
      className={cn(
        'p-3 transition-colors flex justify-between items-center w-full relative overflow-hidden',
        {
          'cursor-not-allowed opacity-20 pointer-events-none': isLocked,
          'hover:bg-primary-500/5': !isLocked,
        },
      )}
    >
      <h3 className="text-lg z-10">{name}</h3>
      <div className="z-10">{isLocked ? <LockClosedIcon /> : <PlayIcon />}</div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              {...anim(openIndicator)}
              key="indicator"
              className="bg-primary-reverse absolute w-full h-full top-0, left-0"
            />
            <motion.div
              {...anim(openIndicator)}
              key="inverter"
              className="absolute top-0 left-0 w-full h-full backdrop-invert z-20 saturate-150"
            />
          </>
        )}
      </AnimatePresence>
    </button>
  )
}
