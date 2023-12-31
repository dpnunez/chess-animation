import { anim } from '@/styles/helpers'
import { motion } from 'framer-motion'
import { card, title } from './anim'

export const Instructors = () => {
  return (
    <div className="container mx-auto my-section-spacing">
      <motion.h2 {...anim(title)} className="section-title">
        Instrutores
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mx-auto">
        {instructors.map((instructor, index) => (
          <motion.div
            {...anim(card, index)}
            key={index}
            className="flex flex-col relative gap-3"
          >
            <img
              src="https://source.unsplash.com/random"
              className="w-full h-64 rounded-3xl object-cover"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{instructor.name}</h3>
                <span className="text-white bg-red-800 rounded-md px-2 font-bold">
                  {instructor.title}
                </span>
              </div>
              <p className="mt-4">{instructor.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const instructors = [
  {
    name: 'Nome do Instrutor',
    title: 'GM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
  {
    name: 'Nome do Instrutor',
    title: 'GM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
  {
    name: 'Nome do Instrutor',
    title: 'GM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
  {
    name: 'Nome do Instrutor',
    title: 'GM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
]
