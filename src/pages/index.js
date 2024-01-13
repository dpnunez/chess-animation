import {
  CoursePreviewSection,
  Divider,
  Faq,
  Hero,
  Instructors,
  Testimonial,
} from '@/components'

export default function Home() {
  return (
    <>
      <Hero />
      <Instructors />
      <Divider />
      <CoursePreviewSection />
      <Testimonial />
      <Faq />
    </>
  )
}
