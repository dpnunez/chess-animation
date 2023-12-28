import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const anim = (variants, custom = null) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    custom,
    variants,
  }
}

export const cn = (...args) => {
  return twMerge(clsx(args))
}
