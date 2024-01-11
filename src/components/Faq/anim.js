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
    // color: 'white',
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  closed: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
}

const cardBg = {
  opened: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  closed: {
    y: '100%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
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

export { contentAnim, contentText, container, arrow, cardBg }
