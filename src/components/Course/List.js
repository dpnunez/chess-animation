import { anim, cn } from '@/styles/helpers'
import { Link } from '../Link'
import { motion } from 'framer-motion'
import { cardAnimation, textAnim } from './anim'
import { AnimatedText } from '../AnimatedText'

const CoursesPage = ({ data }) => {
  return (
    <div className="page-wrapper">
      <div className="mb-32 flex flex-col gap-3">
        <AnimatedText className="text-md uppercase font-bold text-primary-500">
          Lorem ipsum dolor sit amet
        </AnimatedText>
        <motion.h1 {...anim(textAnim)} className="page-title ">
          Cursos
        </motion.h1>
        <motion.h2
          {...anim(textAnim)}
          className="text-2xl text-gray-500 leading-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
          semper nisl. Sed euismod.
        </motion.h2>
      </div>

      <div className="w-full flex flex-col">
        {data.map((course, index) => (
          <motion.div {...anim(cardAnimation)} key={course.name}>
            <CourseCard.Root isRight={index % 2}>
              <CourseCard.Image src={course.cover} alt={course.name} />
              <CourseCard.Title>{course.name}</CourseCard.Title>
              <CourseCard.Description>
                {course.shortDescription}
              </CourseCard.Description>
              <CourseCard.Action>
                <Link
                  {...(course.externalUrl && {
                    target: '_blank',
                  })}
                  href={course.externalUrl || `/cursos/${course.slug}`}
                  className="text-2xl text-primary-500"
                >
                  Saiba mais
                </Link>
              </CourseCard.Action>
            </CourseCard.Root>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const CourseCardAction = ({ children }) => {
  return <div className="mt-4 flex">{children}</div>
}

const CourseCardTitle = ({ children }) => {
  return <h2 className="text-3xl font-bold">{children}</h2>
}

const CourseCardDescription = ({ children }) => {
  return <p className="mt-2 text-2xl leading-10 text-gray-500">{children}</p>
}

const CourseCardImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-[60dvh] rounded-3xl object-cover"
    />
  )
}

const CourseCardRoot = ({ children, isRight }) => {
  const title = children.find((child) => child.type === CourseCardTitle)
  const description = children.find(
    (child) => child.type === CourseCardDescription,
  )
  const image = children.find((child) => child.type === CourseCardImage)
  const action = children.find((child) => child.type === CourseCardAction)
  return (
    <div
      className={cn('flex', {
        'flex-row-reverse': isRight,
      })}
    >
      <div className="flex-1">{image}</div>
      <div className={cn('flex-1 flex flex-col justify-center')}>
        <div
          className={cn('flex flex-col gap-4', {
            'mr-10': isRight,
            'ml-10': !isRight,
          })}
        >
          {title}
          {description}
          {action}
        </div>
      </div>
    </div>
  )
}
const CourseCard = {
  Root: CourseCardRoot,
  Title: CourseCardTitle,
  Description: CourseCardDescription,
  Image: CourseCardImage,
  Action: CourseCardAction,
}

export { CoursesPage }
