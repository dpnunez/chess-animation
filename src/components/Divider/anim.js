const divider = {
  initial: {
    width: 0,
    opacity: 0,
  },
  view: {
    width: '100%',
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const container = {
  initial: {
    y: 20,
  },
  view: {
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

export { divider, container }
