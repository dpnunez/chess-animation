import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const anim = (variants, custom = null, rest) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    whileHover: 'hover',
    whileInView: 'view',
    viewport: {
      once: true,
    },
    custom,
    variants,
    ...rest,
  }
}

export const cn = (...args) => {
  return twMerge(clsx(args))
}
