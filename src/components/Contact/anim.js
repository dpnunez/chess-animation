const buttonContent = {
  initial: {
    opacity: 0,
    x: -20,
  },
  enter: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 20,
  },
}

const buttonsContainer = {
  initial: {
    opacity: 0,
    scale: 1.25,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
  },
}

const image = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (e) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + e * 0.1,
      duration: 0.5,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
  },
}

export { buttonContent, buttonsContainer, image }
