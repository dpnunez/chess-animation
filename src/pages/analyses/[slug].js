import { strapi } from '@/api'
import { Board, MarkdownRender } from '@/components'
import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { boardAnim, subtitleAnim, titleAnim } from './anim'
import { CalendarIcon } from '@radix-ui/react-icons'
import Showdown from 'showdown'

export default function Analysis({ data }) {
  const { pgn, title, description, createdAt, content } = data
  const date = new Date(createdAt).toLocaleDateString('pt-BR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="page-wrapper my-16">
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
  )
}

export const getServerSideProps = async ({ params }) => {
  const { data } = await strapi.get(`analyses/${params.slug}`).json()
  const { content } = data.attributes
  const converter = new Showdown.Converter()
  const html = converter.makeHtml(content)
  console.log(html)

  return {
    props: {
      data: {
        ...data.attributes,
        content: html,
      },
    },
  }
}
