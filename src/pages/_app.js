import '@/styles/globals.css'
import { Header } from '@/components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="mt-header-height ">
        <Component {...pageProps} />
      </main>
    </>
  )
}
