const card = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  view: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1 + 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const title = {
  initial: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export { card, title }
