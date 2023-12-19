import LinkNext from 'next/link'
import { useState } from 'react'
import { line } from './anim'
import { motion } from 'framer-motion'

export const Link = ({ children, ...rest }) => {
  const [hover, setHover] = useState('hidden')

  console.log('hover', hover)

  const anim = (variants) => {
    return {
      initial: 'hidden',
      variants,
    }
  }

  return (
    <LinkNext {...rest}>
      <div
        className="relative overflow-hidden pb-[2px] mt-[2px] "
        onMouseEnter={() => setHover('show')}
        onMouseLeave={() => setHover('hidden')}
      >
        {children}
        <motion.div
          className="h-[2px] bg-primary-500 absolute w-full bottom-0 overflow-hidden"
          animate={hover}
          initial="hidden"
          {...anim(line)}
        />
      </div>
    </LinkNext>
  )
}
