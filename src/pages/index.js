import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'], weights: [400, 500, 600, 700] })

export default function Home() {
  return <div className={mont.className}>lorem ipsum</div>
}
