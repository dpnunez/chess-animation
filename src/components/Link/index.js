import LinkNext from 'next/link'
import { useState } from 'react'
import { line } from './anim'
import { motion } from 'framer-motion'
import { cn } from '@/styles/helpers'

export const Link = ({ children, className, ...rest }) => {
  const [hover, setHover] = useState('hidden')

  const anim = (variants) => {
    return {
      initial: 'hidden',
      variants,
    }
  }

  return (
    <LinkNext {...rest}>
      <div
        className={cn('relative overflow-hidden pb-[2px] mt-[2px]', className)}
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
