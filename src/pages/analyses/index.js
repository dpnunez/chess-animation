import { strapi } from '@/api'
import { AnalysisList } from '@/components'

export default function Analysis({ data }) {
  return <AnalysisList {...data} />
}

export const getServerSideProps = async (props) => {
  const data = await strapi
    .get('analyses', {
      searchParams: {
        populate: '*',
        'pagination[pageSize]': 12,
        'pagination[page]': props.query.page || 1,
        ...(props.query.search && {
          'filters[title][$containsi]': props.query.search,
        }),
      },
    })
    .json()

  return {
    props: {
      data: {
        data: data.data.map((e) => ({
          ...e.attributes,
          thumb: e.attributes.thumb.data.attributes.formats.medium.url,
        })),
        meta: data.meta,
      },
    },
  }
}
