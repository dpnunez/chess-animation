import { colors } from '@/theme'

const contentAnim = {
  initial: { opacity: 0, height: 0 },
  enter: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
    },
  },
  exit: { opacity: 0, height: 0 },
}

const contentText = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: 20 },
}

const container = {
  opened: {
    backgroundColor: colors.primary[500],
    marginLeft: -20,
    marginRight: -20,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
  },
  closed: {
    opacity: 1,
  },
}

const arrow = {
  opened: {
    rotate: 180,
  },
  closed: {
    rotate: 0,
  },
}

const list = {
  initial: {
    opacity: 0,
    x: -100,
  },
  view: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.1,
    },
  }),
}

export { contentAnim, contentText, container, arrow, list }
