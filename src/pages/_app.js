import '@/styles/globals.css'
import { Header } from '@/components'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={montserrat.variable}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
