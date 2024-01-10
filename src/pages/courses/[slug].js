import { strapi } from '@/api'
import { CourseInternalPage } from '@/components'

export default function CourseInternal({ data }) {
  return <CourseInternalPage data={data} />
}

export async function getServerSideProps({ params }) {
  const res = await strapi
    .get(`courses/${params.slug}`, {
      searchParams: {
        populate: '*',
      },
    })
    .json()

  return {
    props: {
      data: {
        ...res.data.attributes,
        cover: res.data.attributes.cover.data.attributes.formats.large.url,
      },
    },
  }
}
