import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components'
import { usePagination } from '@/hooks'
import { anim } from '@/styles/helpers'
import { cardListAnim } from './anim'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const PageHeader = () => {
  const router = useRouter()
  const searchRef = useRef(null)

  const handleSearchURL = () => {
    const url = new URL(window.location.href)
    const searchQuery = searchRef.current.value
    searchRef.current.value = ''
    url.searchParams.set('search', searchQuery)
    url.searchParams.set('page', 1)
    const path = url.pathname + url.search
    router.push(path)
  }

  const handleClearSearch = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('search')
    url.searchParams.set('page', 1)
    const path = url.pathname + url.search
    router.push(path)
  }

  return (
    <div>
      <motion.h2 className="text-3xl mb-12">Analises de Partidas</motion.h2>
      <input ref={searchRef} className="bg-red-200" type="text" />
      <button type="button" onClick={handleSearchURL}>
        {' '}
        Pesquisar{' '}
      </button>

      <button type="button" onClick={handleClearSearch}>
        Limpar filtro
      </button>
    </div>
  )
}

const PaginationWrapper = ({ meta }) => {
  const paginationData = usePagination(meta.pagination)

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationPrevious
          disabled={paginationData.currentPage === 1}
          href={`?page=${paginationData.currentPage - 1}`}
        />
        {paginationData.leftDots && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {paginationData.show.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === paginationData.currentPage}
              href={`/analyses?page=${page}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {paginationData.rightDots && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationNext
          disabled={paginationData.currentPage === meta.pagination.pageCount}
          href={`?page=${paginationData.currentPage + 1}`}
        />
      </PaginationContent>
    </Pagination>
  )
}

export const AnalysisList = ({ data, meta }) => {
  return (
    <motion.div className="page-wrapper">
      <PageHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map(({ attributes, id }) => (
          <motion.div
            key={id}
            {...anim(cardListAnim)}
            className="flex flex-col gap-4"
          >
            <Link href={`/analyses/${attributes.slug}`}>
              <Image
                alt=""
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.thumb.data.attributes.url}`}
                width={500}
                height={300}
                style={{
                  objectFit: 'cover',
                }}
                objectFit="contain"
                className="rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{attributes.title}</h3>
                <p className="text-gray-400">{attributes.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <PaginationWrapper meta={meta} />
    </motion.div>
  )
}
