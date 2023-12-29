import LinkNext from 'next/link'
import { AnimatedLogo } from '@/components'

export const Logo = () => (
  <LinkNext className="flex gap-2" href="/">
    <AnimatedLogo className="w-12 h-12" />
    <div className="text-black text-2xl font-bold leading-6">
      Chess
      <br />
      Name
    </div>
  </LinkNext>
)
