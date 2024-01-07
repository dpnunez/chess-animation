import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'

import { motion } from 'framer-motion'
import { anim, cn } from '@/styles/helpers'
import Link from 'next/link'
import { indicator } from './anim'

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center py-1 aspect-square min-w-1', className)}
    {...props}
  />
))
PaginationItem.displayName = 'PaginationItem'

const PaginationLink = ({ className, isActive, ...props }) => (
  <PaginationItem className="relative">
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex items-center px-4 py-1.5 rounded-lg transition-colors',
        className,
      )}
      {...props}
    />
    <motion.div
      {...anim(indicator)}
      {...props}
      animate={isActive ? 'enter' : 'initial'}
      className="absolute flex items-center justify-center text-white top-0 w-full bottom-0 bg-primary-500 rounded-lg"
    ></motion.div>
  </PaginationItem>
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, ...props }) => {
  const [hover, setHover] = React.useState(false)
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn('gap-1 transition-all', className, {
          'opacity-50': props.disabled,
          'pointer-events-none': props.disabled,
        })}
        {...props}
      >
        <motion.div
          animate={{
            x: hover ? -5 : 0,
          }}
          className="relative"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </motion.div>
        <span>Anterior</span>
      </PaginationLink>
    </motion.div>
  )
}
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }) => {
  const [hover, setHover] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn('gap-1 transition-all', className, {
          'opacity-50': props.disabled,
          'pointer-events-none': props.disabled,
        })}
        {...props}
      >
        <span>Próximo</span>
        <motion.div animate={hover ? { x: 5 } : { x: 0 }} className="relative">
          <ChevronRightIcon className="h-4 w-4" />
        </motion.div>
      </PaginationLink>
    </motion.div>
  )
}

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
