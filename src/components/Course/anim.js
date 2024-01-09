const cardAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

const textAnim = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

export { cardAnimation, textAnim }
