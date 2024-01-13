const openIndicator = {
  initial: {
    y: '100%',
  },
  enter: {
    y: '0%',
  },
  exit: {
    y: '100%',
  },
}

const item = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
}

const chapter = {
  initial: {
    opacity: 0,
  },
  view: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export { openIndicator, item, chapter }
