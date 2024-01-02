import { anim } from '@/styles/helpers'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { arrow, container, contentAnim, contentText, list } from './anim'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export const Faq = () => {
  const [openAccortion, setOpenAccortion] = useState(null)

  return (
    <div className="my-section-spacing container mx-auto ">
      <h2 className="section-title text-center">Perguntas frequentes</h2>
      <div className="flex flex-col gap-4 md:max-w-[50%] mx-auto">
        {accordions.map((accordion, i) => (
          <motion.div key={accordion.id} {...anim(list, i)}>
            <Accortion.root
              open={openAccortion === accordion.id}
              handleOpen={() => setOpenAccortion(accordion.id)}
              handleClose={() => setOpenAccortion(null)}
            >
              <Accortion.title>{accordion.title}</Accortion.title>
              <Accortion.content>{accordion.content}</Accortion.content>
            </Accortion.root>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const AccortionTitle = ({ children }) => {
  return <motion.h2 className="text-xl font-medium">{children}</motion.h2>
}

const AccortionRoot = ({ open, children, handleOpen, handleClose }) => {
  const title = children.find((child) => child.type === AccortionTitle)
  const content = children.find((child) => child.type === AccortionContent)

  const handleClick = () => (open ? handleClose() : handleOpen())

  return (
    <motion.div
      {...anim(container, null, {
        opened: 'opened',
        closed: 'closed',
        animate: open ? 'opened' : 'closed',
      })}
      className="rounded-3xl cursor-pointer overflow-hidden bg-primary-500/10 hover:bg-primary-500/15 transition-colors"
    >
      <button
        className="p-11 flex w-full justify-between"
        onClick={handleClick}
      >
        {title}
        <motion.div
          {...anim(arrow, null, {
            opened: 'opened',
            closed: 'closed',
            animate: open ? 'opened' : 'closed',
          })}
        >
          <ChevronDownIcon width={24} height={24} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div {...anim(contentAnim)}>
            <div className="px-11 pb-11">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const AccortionContent = ({ children }) => {
  return <motion.div {...anim(contentText)}>{children}</motion.div>
}

const Accortion = {
  root: AccortionRoot,
  title: AccortionTitle,
  content: AccortionContent,
}

const accordions = [
  {
    id: '1',
    title: 'Como funciona?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
  {
    id: '2',
    title: 'Como funciona?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
  {
    id: '3',
    title: 'Como funciona?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
  {
    id: '4',
    title: 'Como funciona?',
    content:
      ' id auctor justo cursus vitae. Vestibulum id auctor justo cursus vitae. Vestibulum id auctor justo cursus vitae. Vestibulum id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tempor eros, id auctor justo cursus vitae. Vestibulum a arcu convallis, facilisis enim eu, blandit nunc.',
  },
]
