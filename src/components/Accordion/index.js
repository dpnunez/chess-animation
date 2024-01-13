import { motion, AnimatePresence } from 'framer-motion'
import { arrow, cardBg, container, contentAnim, contentText } from './anim'
import { anim, cn } from '@/styles/helpers'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { cloneElement } from 'react'

const AccortionTitle = ({ children, onClick, className, open }) => {
  return (
    <button
      className={cn(
        'p-8 flex w-full justify-between z-10 relative focus:outline-none focus-visible:outline-none',
        className,
      )}
      onClick={onClick}
    >
      <motion.h2 className="text-xl font-medium">{children}</motion.h2>
      <motion.div
        {...anim(arrow, null, {
          opened: 'opened',
          closed: 'closed',
          animate: open ? 'opened' : 'closed',
        })}
      >
        <ChevronDownIcon width={24} height={24} />
      </motion.div>
    </button>
  )
}

const AccortionRoot = ({
  open,
  children,
  handleOpen,
  handleClose,
  hasBgAnimation = true,
}) => {
  const handleClick = () => (open ? handleClose() : handleOpen())
  const title = cloneElement(
    children.find((child) => child.type === AccortionTitle),
    {
      onClick: handleClick,
      open,
    },
  )
  const content = children.find((child) => child.type === AccortionContent)
  const bgAnimation = anim(cardBg, null, {
    opened: 'opened',
    closed: 'closed',
    animate: open ? 'opened' : 'closed',
  })

  return (
    <motion.div
      {...anim(container, null, {
        opened: 'opened',
        closed: 'closed',
        animate: open ? 'opened' : 'closed',
      })}
      className="cursor-pointer overflow-hidden transition-colors relative"
    >
      {title}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div {...anim(contentAnim)} className="z-10 relative">
            <div className="px-11 pb-11">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
      {hasBgAnimation && (
        <>
          <motion.div
            {...bgAnimation}
            className="absolute bg-primary-reverse bottom-0 h-full w-full left-0 pointer-events-none"
          />
          <motion.div
            {...bgAnimation}
            className="absolute z-20 saturate-150 backdrop-invert bottom-0 h-full w-full left-0 pointer-events-none"
          />
        </>
      )}
    </motion.div>
  )
}

const AccortionContent = ({ children }) => {
  return <motion.div {...anim(contentText)}>{children}</motion.div>
}

export const Accortion = {
  root: AccortionRoot,
  title: AccortionTitle,
  content: AccortionContent,
}
