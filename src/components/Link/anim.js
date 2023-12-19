export const line = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
  hidden: {
    x: '100%',
    transition: {
      duration: 0.25,
    },
    transitionEnd: {
      x: '-100%',
    },
  },
}
