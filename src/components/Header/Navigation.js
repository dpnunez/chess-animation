import { AnimatePresence, motion } from 'framer-motion'
import { Link } from '@/components'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { anim } from '@/styles/helpers'
import { mobileNavigation, navigationDesktop } from './anim'
import { pages } from '@/constants'

export const Navigation = ({ handleMenu }) => {
  return (
    <>
      <DesktopNavigation handleMenu={handleMenu} />
      <MobileNavigation />
    </>
  )
}

const DesktopNavigation = ({ handleMenu }) => {
  return (
    <nav className="gap-20 max-sm:hidden flex">
      {pages.map((item, i) => (
        <motion.div
          {...anim(navigationDesktop, i)}
          key={item.label}
          onHoverStart={() => handleMenu(item.showMenu || null)}
        >
          <Link href={item.href} className="text-black font-semibold text-lg">
            {item.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  )
}

const MobileNavigation = () => {
  const [navigation, setNavigation] = useState(false)

  const Icon = navigation ? Cross1Icon : HamburgerMenuIcon

  return (
    <div className="md:hidden">
      <button
        className="bg-black rounded-full p-3 z-30 text-white relative"
        onClick={() => setNavigation(!navigation)}
      >
        <Icon width={32} height={32} />
      </button>
      <AnimatePresence>
        {navigation && (
          <motion.div
            className="fixed top-0 left-0 bottom-0 right-0 bg-black z-20 p-5"
            {...anim(mobileNavigation)}
          >
            <div className="flex flex-col items-start gap-5">
              {pages.map((item) => (
                <Link
                  onClick={() => setNavigation(false)}
                  key={item.label}
                  href={item.href}
                  className="text-white font-normal text-5xl"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
