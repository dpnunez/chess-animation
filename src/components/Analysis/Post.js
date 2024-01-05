import { Board, MarkdownRender } from '@/components'
import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { boardAnim, subtitleAnim, titleAnim } from './anim'
import { CalendarIcon } from '@radix-ui/react-icons'

export const AnalysisPost = ({
  pgn,
  title,
  description,
  createdAt,
  content,
  banner,
}) => {
  const date = new Date(createdAt).toLocaleDateString('pt-BR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <motion.img
        {...anim(subtitleAnim)}
        src="https://source.unsplash.com/random?chess"
        alt="Análises"
        className="w-screen h-64 mt-header-height object-cover"
      />
      <div className="container mx-auto mt-20 mb-16 py-0">
        <motion.h2
          {...anim(subtitleAnim)}
          className="text-center font-medium text-xl max-w-3xl mx-auto text-gray-400"
        >
          <div className="flex gap-4 items-center justify-center">
            <CalendarIcon />
            {date}
          </div>
        </motion.h2>
        <motion.h1
          {...anim(titleAnim)}
          className="text-3xl font-medium text-center my-5"
        >
          {title}
        </motion.h1>
        <motion.h2
          {...anim(subtitleAnim)}
          className="text-center text-xl font-medium max-w-3xl mx-auto text-gray-400"
        >
          {description}
        </motion.h2>

        <motion.div
          {...anim(boardAnim)}
          className="max-w-3xl relative mx-auto my-7"
        >
          <Board pgn={pgn} />
        </motion.div>
        <motion.div {...anim(boardAnim)}>
          <MarkdownRender className="max-w-3xl mx-auto mt-20">
            {content}
          </MarkdownRender>
        </motion.div>
      </div>
    </>
  )
}
