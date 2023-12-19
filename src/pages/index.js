import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return <div className={mont.className}>lorem ipsum</div>
}
