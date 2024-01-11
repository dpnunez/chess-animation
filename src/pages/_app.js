import '@/styles/globals.css'
import '@/styles/board.css'
import '@/styles/markdown.css'
import { Footer, Header } from '@/components'
import { Montserrat } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import ReactLenis from '@studio-freight/react-lenis'
import { transition } from '@/styles/framer.config'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }) {
  return (
    // <ReactLenis root>
    <MotionConfig transition={transition}>
      <main className={montserrat.variable} data-scroll-container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </MotionConfig>
    // </ReactLenis>
  )
}
