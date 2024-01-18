import LinkNext from 'next/link'
import { AnimatedLogo } from '@/components'
import { motion } from 'framer-motion'
import { anim } from '@/styles/helpers'
import { logo } from './anim'

export const Logo = () => (
  <motion.div {...anim(logo)}>
    <LinkNext className="flex gap-2" href="/">
      <AnimatedLogo className="w-12 h-12" />
      <div className="text-black text-2xl font-bold leading-6">
        Chess
        <br />
        Master
      </div>
    </LinkNext>
  </motion.div>
)
