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
    opacity: 1,
  },
}
