const defaultAnimation = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
}

export { defaultAnimation }
