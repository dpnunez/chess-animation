import '@/styles/globals.css'
import { Header } from '@/components'
import { Montserrat } from 'next/font/google'
import ReactLenis from '@studio-freight/react-lenis'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }) {
  return (
    <ReactLenis root>
      <main className={montserrat.variable} data-scroll-container>
        <Header />
        <Component {...pageProps} />
      </main>
    </ReactLenis>
  )
}
