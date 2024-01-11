import { colors } from '@/theme'
import { transform } from 'framer-motion'

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

export { contentAnim, contentText, container, arrow }
