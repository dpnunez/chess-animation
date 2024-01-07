import { defaultAnimation } from './anim'
import { motion } from 'framer-motion'

const AnimatedText = ({
  className,
  children,
  animation = defaultAnimation,
  stagging = 0.02,
}) => {
  return (
    <div className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        initial="initial"
        animate="enter"
        variants={{
          initial: {},
          enter: {
            transition: {
              staggerChildren: stagging,
            },
          },
        }}
        className="text-gray-400 text-bold text-4xl"
      >
        {children.split('').map((char, index) => (
          <motion.span
            className="inline-block"
            variants={animation}
            key={char + index}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  )
}

export { AnimatedText }
