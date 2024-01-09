import Image from 'next/image'
import { InternalHeader } from '../InternalHeader'
import { MarkdownRender } from '../MarkdownRender'
import { motion } from 'framer-motion'
import { anim } from '@/styles/helpers'
import { textAnim } from './anim'

const CourseInternalPage = ({ data }) => {
  const { name, shortDescription, cover, description } = data
  return (
    <div className="page-wrapper">
      <div className="max-w-screen-lg mx-auto">
        <InternalHeader.Root>
          {/* <InternalHeader.Badge>{date}</InternalHeader.Badge> */}
          <InternalHeader.Title>{name}</InternalHeader.Title>
          <InternalHeader.Subtitle>{shortDescription}</InternalHeader.Subtitle>
        </InternalHeader.Root>

        <motion.div className="md:-mx-10" {...anim(textAnim)}>
          <Image
            src={cover}
            alt={name}
            width={1000}
            height={1000}
            className="w-full rounded-3xl my-24 hover:scale-105 transition-all"
          />
        </motion.div>
        <MarkdownRender className="max-w-screen-md mx-auto">
          {description}
        </MarkdownRender>
      </div>
    </div>
  )
}

export { CourseInternalPage }
