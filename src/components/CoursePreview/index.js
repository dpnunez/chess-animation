import { strapi } from '@/api'
import useSWR from 'swr'
import { Accortion, CTAButton } from '@/components'
import { useEffect, useState } from 'react'
import { Lesson } from './Lesson'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '@/styles/helpers'
import { chapter, item } from './anim'
import { InfoCircledIcon } from '@radix-ui/react-icons'

const getCourses = async () => {
  const response = await strapi.get('courses', {
    searchParams: {
      populate: '*',
      'filters[preview][$notNull]': true,
      'pagination[pageSize]': 1,
    },
  })
  const _res = await response.json()

  return _res.data.map((e) => ({
    ...e.attributes,
    cover: e.attributes.cover.data.attributes.formats.large.url,
  }))[0]
}

export const CoursePreviewSection = () => {
  const [openedChapter, setOpenedChapter] = useState(null)
  const [openedLesson, setOpenedLesson] = useState(null)
  const { data: course, isLoading } = useSWR(
    'coursePreviewWithPreview',
    getCourses,
  )

  useEffect(() => {
    if (!openedChapter) setOpenedLesson(null)
  }, [openedChapter])

  if (isLoading) return <div>Carregando...</div>

  if (!course) return null

  return (
    <section className="container mx-auto">
      <div className="flex w-full justify-between items-center">
        <h2 className="section-title mt-10">
          Confira um pouco do curso {course.name}
        </h2>
        <CTAButton.root rightIcon>
          <CTAButton.icon>
            <InfoCircledIcon width={24} height={24} />
          </CTAButton.icon>
          Acessar o curso completo
        </CTAButton.root>
      </div>
      <div className="flex w-full gap-32 min-h-[60vh] mt-12">
        <div className="flex-1">
          {course.preview.map((chapter) => {
            return (
              <Chapter
                key={chapter.name}
                data={chapter}
                open={openedChapter === chapter.name}
                openedLesson={openedLesson}
                setOpenedLesson={setOpenedLesson}
                setOpenedChapter={setOpenedChapter}
              />
            )
          })}
        </div>
        <div className="flex-1 flex items-start relative">
          <div className="w-full ring-black ring-1 p-2 rounded-md">
            <AnimatePresence mode="wait">
              {openedLesson ? (
                <motion.div
                  {...anim(item)}
                  key={openedLesson.link}
                  className="w-full h-full relative"
                >
                  <iframe
                    src={openedLesson.link}
                    className="w-full aspect-video rounded-sm"
                  />
                </motion.div>
              ) : (
                <motion.div
                  {...anim(item)}
                  whileHover={{ scale: 1.05 }}
                  key="cover"
                  className="w-full aspect-video relative"
                >
                  <Image
                    className="w-full h-full rounded-md"
                    src={course.cover}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

const Chapter = ({
  open,
  data,
  openedLesson,
  setOpenedLesson,
  setOpenedChapter,
}) => {
  return (
    <motion.div {...anim(chapter)}>
      <Accortion.root
        hasBgAnimation={false}
        open={open}
        key={data.name}
        handleClose={() => setOpenedChapter(null)}
        handleOpen={() => setOpenedChapter(data.name)}
      >
        <Accortion.title className="px-0">{data.name}</Accortion.title>
        <Accortion.content>
          {data.lessons.map((e) => (
            <Lesson
              key={e.name}
              {...e}
              open={openedLesson && openedLesson?.link === e.link}
              onClick={() => setOpenedLesson(e)}
            />
          ))}
        </Accortion.content>
      </Accortion.root>
    </motion.div>
  )
}
