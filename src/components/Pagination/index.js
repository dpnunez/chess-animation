import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'

import { cn } from '@/styles/helpers'
import Link from 'next/link'

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
    className={cn('flex items-center py-1', className)}
    {...props}
  />
))
PaginationItem.displayName = 'PaginationItem'

const PaginationLink = ({ className, isActive, ...props }) => (
  <PaginationItem className="rounded-md hover:bg-primary-500/5 transition-colors">
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex items-center px-4 py-1.5 rounded-lg transition-all',
        className,
        {
          'bg-primary-500 text-white': isActive,
        },
      )}
      {...props}
    />
  </PaginationItem>
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 transition-all', className, {
      'opacity-50': props.disabled,
      'pointer-events-none': props.disabled,
    })}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
    <span>Anterior</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({ className, ...props }) => (
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
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
)

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