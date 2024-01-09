import { strapi } from '@/api'
import { CoursesPage } from '@/components'

export default function Courses({ data }) {
  return <CoursesPage data={data} />
}

export const getServerSideProps = async () => {
  const response = await strapi
    .get('courses', {
      searchParams: {
        populate: '*',
        'pagination[pageSize]': 999,
      },
    })
    .json()

  return {
    props: {
      data: response.data.map((e) => ({
        ...e.attributes,
        cover:
          process.env.NEXT_PUBLIC_STRAPI_URL +
          e.attributes.cover.data.attributes.url,
      })),
    },
  }
}
