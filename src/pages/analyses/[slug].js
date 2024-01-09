import { strapi } from '@/api'
import { AnalysisPost } from '@/components'

import Showdown from 'showdown'

export default function Analysis({ data }) {
  return <AnalysisPost {...data} />
}

export const getServerSideProps = async ({ params }) => {
  const { data } = await strapi.get(`analyses/${params.slug}`).json()
  const { content } = data.attributes

  return {
    props: {
      data: {
        ...data.attributes,
        content,
      },
    },
  }
}
