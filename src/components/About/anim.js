const variants = {
  right: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  left: {
    x: '0',
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

const currentImageAnim = {
  initial: {
    x: 0,
  },
  enter: {
    x: 20,
    y: 100,
  },
  exit: (imagePosition) => ({
    x: imagePosition === 'left' ? 1000 : -1000,
    opacity: 0,
  }),
}

const backgroundImage = {
  left: {
    rotate: -3,
    rotateY: 15,
    rotateX: 10,
  },
  right: {
    rotate: 3,
    rotateY: -15,
    rotateX: 10,
  },
}

const textAnim = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
}

export { variants, currentImageAnim, backgroundImage, textAnim }
