import {
  CoursePreviewSection,
  Divider,
  Faq,
  Hero,
  Instructors,
  Testimonial,
} from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChessMaster</title>
      </Head>
      <Hero />
      <Instructors />
      <Divider />
      <CoursePreviewSection />
      <Testimonial />
      <Faq />
    </>
  )
}
