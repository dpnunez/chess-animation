import { cn } from '@/styles/helpers'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { cloneElement } from 'react'

const root = ({ children, rightIcon = false, ...props }) => {
  const icon = cloneElement(
    (Array.isArray(children) &&
      children.find((child) => child.type === CTAButtonIcon)) || (
      <ArrowRightIcon />
    ),
    {
      className: 'text-black',
      width: 24,
      height: 24,
    },
  )

  const text =
    (Array.isArray(children) &&
      children.filter((child) => child.type !== CTAButtonIcon)) ||
    children

  return (
    <button
      type="button"
      className={cn('relative flex items-center group', {
        'flex-row-reverse': rightIcon,
      })}
      {...props}
    >
      <div className="w-16 aspect-square flex items-center justify-center">
        <div
          className={cn(
            'transition-all ease-in-out duration-500 absolute w-16 group-hover:w-full h-full bg-primary-reverse z-10 rounded-md top-0',
            {
              'right-0': rightIcon,
              'left-0': !rightIcon,
            },
          )}
        />
        <div
          className={cn(
            'transition-all ease-in-out duration-500 absolute w-16 h-full group-hover:w-full saturate-150 backdrop-invert z-20 rounded-md top-0',
            {
              'left-0': !rightIcon,
              'right-0': rightIcon,
            },
          )}
        />
        <div className="relative z-10">{icon}</div>
      </div>
      <span
        className={cn('z-10 px-6 text-xl font-bold', {
          'pr-10': !rightIcon,
          'pl-10': rightIcon,
        })}
      >
        {text}
      </span>
    </button>
  )
}

const CTAButtonIcon = ({ children }) => {
  return children
}

export const CTAButton = {
  root,
  icon: CTAButtonIcon,
}
