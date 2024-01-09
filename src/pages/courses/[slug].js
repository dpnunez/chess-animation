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
        cover:
          process.env.NEXT_PUBLIC_STRAPI_URL +
          res.data.attributes.cover.data.attributes.url,
      },
    },
  }
}
