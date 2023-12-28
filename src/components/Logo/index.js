import { motion } from 'framer-motion'

export const AnimatedLogo = (props) => {
  return (
    <motion.svg
      {...props}
      width="498"
      height="498"
      viewBox="0 0 498 498"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect width="237.419" height="237.419" rx="32" fill="#1E1E1E" />
      <motion.rect
        x="260.581"
        y="260.581"
        width="237.419"
        height="237.419"
        rx="32"
        fill="#1E1E1E"
      />
      <motion.path
        d="M0 459.308V299.549C0 272.589 23.7143 260.857 35.5714 260.857H191.586C227.782 260.857 260.857 227.158 260.857 208.436V36.1955C260.857 9.73534 285.195 0 297.677 0H456.188C481.15 0 498 18.0977 498 39.9398V197.203C498 228.656 473.038 236.935 460.556 237.143H315.15C267.098 237.143 237.143 272.714 237.143 297.053V460.556C237.143 486.018 212.18 498 199.699 498H38.6917C12.2316 498 0 473.038 0 459.308Z"
        fill="#E9ECEF"
      />
    </motion.svg>
  )
}
