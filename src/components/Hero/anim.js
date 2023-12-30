const card = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  enter: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export { card, container, item }
