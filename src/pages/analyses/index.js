import { strapi } from '@/api'
import Link from 'next/link'

export default function Analysis({ content }) {
  const data = content.data

  return (
    <div className="container mx-auto page-wrapper">
      <h1>Analises</h1>
      {data.map(({ id, attributes }) => (
        <Link href={`analyses/${attributes.slug}`} key={id}>
          <h2>{attributes.title}</h2>
          <p>{attributes.description}</p>
        </Link>
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await strapi.get('analyses?').json()

  return {
    props: {
      content: data,
    },
  }
}
