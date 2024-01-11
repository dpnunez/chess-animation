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
              src={instructor.image}
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
    image:
      'https://chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com/medium_Daniil_Dubov19a_332ed3ecad.jpg',
    name: 'Felipe Silva',
    title: 'GM',
    description:
      'Com um rating FIDE de 2564, o Mestre Felipe Silva é conhecido por suas táticas inovadoras e experiência em competições nacionais. Sua paixão pelo ensino garante aos alunos uma compreensão aprofundada do jogo em níveis avançados.',
  },
  {
    image:
      'https://chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com/medium_chess_womens_chess_queens_gambit_fec233cdd8.png',
    name: 'Ana Oliveira',
    title: 'IM',
    description:
      'Com um rating FIDE de 2300, é renomada por suas habilidades nas aberturas. Sua carreira competitiva e paixão pelo ensino garantem aos alunos uma compreensão aprofundada das estratégias iniciais',
  },
  {
    image:
      'https://chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com/php_Ym_Kvjl_44f1b1c42f.jpeg',
    name: 'Ricardo Santos',
    title: 'GM',
    description:
      'Com um rating FIDE de 2500, o Grande Mestre Ricardo Santos é uma lenda do xadrez brasileiro. Seu vasto conhecimento teórico e experiência internacional oferecem aos alunos uma visão única do jogo em níveis avançados.',
  },
  {
    image:
      'https://chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com/Untitled_design_89_e1652477710628_23695514af.webp',
    name: 'Clara Rocha',
    title: 'GM',
    description:
      'Mestra Clara Rocha, com um rating FIDE de 2250, é conhecida por suas habilidades táticas agressivas. Sua experiência em competições nacionais e internacionais oferece aos alunos uma visão única do jogo em níveis avançados.',
  },
]
