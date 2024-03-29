import { pages, socials } from '@/constants'
import { Divider } from '../Divider'
import { Logo } from '../Header/Logo'
import { Link } from '../Link'
import { motion } from 'framer-motion'
import { anim } from '@/styles/helpers'
import { container } from './anim'

export const Footer = () => {
  return (
    <div className="overflow-hidden">
      <Divider />
      <motion.footer {...anim(container)} className="py-9 text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row md:gap-11 gap-5">
          <div className="flex flex-col flex-1 gap-20 pr-20">
            <h3 className=" text-2xl">
              Atinja o próximo nível no <br />
              xadrez trainando com os melhores!
            </h3>
            <Logo />
            <p className=" font-medium text-xl">Copyright © dpnunez 2024</p>
          </div>
          <div className="flex-1 flex md:flex-row flex-col">
            <div className="flex-1">
              <h3 className="text-xl mb-4 text-black">Navegação</h3>
              <ul className="flex flex-col items-start">
                {pages.map((item) => (
                  <Link key={item.label} href={item.href} className=" text-xl">
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-4 text-black">Redes Sociais</h3>
              <ul className="flex flex-col items-start">
                {socials.map((item) => (
                  <Link
                    target="_blank"
                    key={item.label}
                    href={item.href}
                    className=" text-xl"
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-4 text-black">Contato</h3>
              <ul className="flex flex-col items-start">
                <Link href="mailto:" className="text-xl">
                  lorem@ipsum.com
                </Link>
                <Link href="tel:" className="text-xl">
                  {process.env.NEXT_PUBLIC_PHONE}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
