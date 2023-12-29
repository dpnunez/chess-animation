import { stagger } from 'framer-motion'

export const line = {
  initial: {
    opacity: 0,
    width: 0,
  },
  enter: {
    width: '100vw',
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
  },
}

export const background = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.45,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

export const menu = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

export const menuItem = {
  initial: {
    y: 200,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + i * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}
