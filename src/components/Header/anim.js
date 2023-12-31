const line = {
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
    opacity: 0,
  },
}

const background = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.45,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

const menu = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const menuItem = {
  initial: {
    y: 200,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + i * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const mobileNavigation = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const MENU_BASE_DURATION = 0.75

const logo = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: MENU_BASE_DURATION,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const navigationDesktop = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0.9,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: MENU_BASE_DURATION,
      ease: [0.83, 0, 0.17, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const action = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: MENU_BASE_DURATION,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const menuDirection = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  hide: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

export {
  line,
  background,
  menu,
  menuItem,
  mobileNavigation,
  logo,
  navigationDesktop,
  action,
  menuDirection,
}
