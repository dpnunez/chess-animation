import { Board, InternalHeader, MarkdownRender } from '@/components'
import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { boardAnim, subtitleAnim } from './anim'
import { CalendarIcon } from '@radix-ui/react-icons'
import { formatDate } from '@/utils/date'

export const AnalysisPost = ({
  pgn,
  title,
  description,
  createdAt,
  content,
  banner,
}) => {
  const date = formatDate(createdAt, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <motion.img
        {...anim(subtitleAnim)}
        src={banner || 'https://source.unsplash.com/random?chess'}
        alt="Análises"
        className="w-screen h-64 mt-header-height object-cover"
      />
      <h1 className="sr-only">{title}</h1>
      <h2 className="sr-only">{description}</h2>
      <h3 className="sr-only">{date}</h3>
      <div className="container mx-auto mt-20 mb-16 py-0">
        <InternalHeader.Root>
          <InternalHeader.Badge>
            <CalendarIcon />
            {date}
          </InternalHeader.Badge>
          <InternalHeader.Title>{title}</InternalHeader.Title>
          <InternalHeader.Subtitle>{description}</InternalHeader.Subtitle>
        </InternalHeader.Root>
        <motion.div
          {...anim(boardAnim)}
          className="max-w-[70dvh] relative mx-auto my-7"
        >
          <Board pgn={pgn} />
        </motion.div>
        <motion.div {...anim(boardAnim)}>
          <MarkdownRender className="max-w-screen-md mx-auto mt-20">
            {content}
          </MarkdownRender>
        </motion.div>
      </div>
    </>
  )
}
