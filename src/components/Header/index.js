import { motion } from 'framer-motion'
import { line } from './anim'
import { Link } from '@/components'

const anim = (variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  }
}

export const Header = () => {
  return (
    <div className="fixed w-screen top-0">
      <motion.div className="bg-primary-500 h-[6px]" {...anim(line)} />
      <div className="container mx-auto h-[100px] flex items-center justify-between">
        <div className="flex gap-24">
          <h1>logo</h1>
          <nav>
            <Link href="#">teste</Link>
          </nav>
        </div>

        <div>actions</div>
      </div>
      <div className="h-[1px] bg-gray-300 w-full" />
    </div>
  )
}
