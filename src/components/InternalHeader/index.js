import { anim, cn } from '@/styles/helpers'
import { subtitleAnim, titleAnim } from './anim'
import { motion } from 'framer-motion'

const Title = ({ children, className }) => (
  <motion.h1
    {...anim(titleAnim)}
    className={cn('text-3xl font-medium text-center my-5', className)}
  >
    {children}
  </motion.h1>
)

const Badge = ({ children, className }) => (
  <motion.h2
    {...anim(subtitleAnim)}
    className={cn(
      'text-center font-medium text-xl max-w-3xl mx-auto text-gray-400',
      className,
    )}
  >
    <div className="flex gap-4 items-center justify-center">{children}</div>
  </motion.h2>
)

const Subtitle = ({ children, className }) => (
  <motion.h2
    {...anim(subtitleAnim)}
    className={cn(
      'text-center text-xl font-medium max-w-3xl mx-auto text-gray-400',
      className,
    )}
  >
    {children}
  </motion.h2>
)

const Root = ({ children: _children, className }) => {
  const children = Array.isArray(_children) ? _children : [_children]
  const title = children.find((child) => child.type === Title)
  const badge = children.find((child) => child.type === Badge)
  const subtitle = children.find((child) => child.type === Subtitle)

  return (
    <div className={cn('flex flex-col', className)}>
      {badge}
      {title}
      {subtitle}
    </div>
  )
}

const InternalHeader = {
  Root,
  Title,
  Badge,
  Subtitle,
}

export { InternalHeader }
