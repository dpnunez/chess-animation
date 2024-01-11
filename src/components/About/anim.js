const variants = {
  right: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  left: {
    x: '0',
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
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
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: (imagePosition) => ({
    x: imagePosition === 'left' ? 1000 : -1000,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
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

const itemText = {
  initial: {
    opacity: 0,
    scale: 0.85,
  },
  enter: (flag) => ({
    opacity: flag ? 1 : 0,
    scale: flag ? 1 : 0.85,
  }),
}

export { variants, currentImageAnim, backgroundImage, textAnim, itemText }
