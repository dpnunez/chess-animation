import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  AnimatedText,
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
import { cardListAnim, filterTag, found } from './anim'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { formatDate } from '@/utils/date'

const PageHeader = ({ counter }) => {
  const [filter, setFilter] = useState(null)
  const router = useRouter()
  const searchRef = useRef(null)

  const handleSearch = () => {
    const url = new URL(window.location.href)
    const searchQuery = searchRef.current.value
    url.searchParams.set('search', searchQuery)
    url.searchParams.set('page', 1)
    const path = url.pathname + url.search
    router.push(path)
    setFilter(searchQuery)
  }

  const handleClearSearch = () => {
    const url = new URL(window.location.href)

    url.searchParams.delete('search')
    url.searchParams.set('page', 1)
    const path = url.pathname + url.search
    router.push(path)
    setFilter('')
    searchRef.current.value = ''
    searchRef.current.focus()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="flex w-full justify-between items-center mb-12 flex-col md:flex-row gap-12">
      <div className="flex flex-col md:flex-row items-center">
        <motion.h2 className="page-title">Analises de Partidas</motion.h2>
        <AnimatePresence>
          {filter && (
            <motion.span
              {...anim(found)}
              className="text-gray-400 ml-8 text-sm"
            >
              Foram encontrados {counter} resultados
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <AnimatePresence>
          {filter && (
            <motion.button
              {...anim(filterTag)}
              className=" bg-primary-500/70 text-white rounded-full group overflow-hidden"
              type="button"
              onClick={handleClearSearch}
            >
              <div className="px-4 py-2 flex gap-2 items-center">
                <span className="text-sm">{filter}</span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
        <form
          className="flex max-md:flex-col gap-4 items-center justify-end ml-6"
          onSubmit={onSubmit}
        >
          <input
            placeholder="Pesquisar Analise"
            ref={searchRef}
            className="border-b-2 p-1 border-b-primary-500 w-80 text-lg py-2"
            type="text"
          />
          <button
            className="flex gap-2 items-center bg-black text-white px-4 py-4 rounded-lg group text-2xl"
            type="submit"
          >
            <MagnifyingGlassIcon
              height={20}
              width={20}
              className="group-hover:scale-125 transition-all"
            />
          </button>
          <button
            type="button"
            onClick={handleClearSearch}
            disabled={!filter}
            className=" hover:bg-black/15 p-4 rounded-lg transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Limpar
          </button>
        </form>
      </div>
    </div>
  )
}

const PostCard = ({ attributes, animOrder }) => {
  return (
    <motion.div
      key={attributes.slug}
      {...anim(cardListAnim, animOrder)}
      className="flex flex-col gap-4 group"
    >
      <Link
        href={`/analyses/${attributes.slug}`}
        className="flex flex-col gap-4"
      >
        <Image
          priority
          alt=""
          src={attributes.thumb}
          width={500}
          height={500}
          style={{
            objectFit: 'cover',
          }}
          className="rounded-lg group-hover:brightness-75 transition-all duration-500 w-full"
        />
        <div className="flex flex-col gap-2 items-start">
          <time
            dateTime={attributes.createdAt}
            className="rounded-lg bg-primary-500 text-white px-2 py-1 font-bold text-sm"
          >
            {formatDate(attributes.createdAt)}
          </time>
          <h3 className="text-xl line-clamp-2 overflow-hidden w-full">
            {attributes.title}
          </h3>
          <p className="text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis w-full">
            {attributes.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

const PaginationWrapper = ({ meta }) => {
  const paginationData = usePagination(meta.pagination)
  const { query } = useRouter()

  const baseUrl = useMemo(() => {
    const _query = { ...query }
    delete _query.page
    return `?${new URLSearchParams(_query).toString()}`
  }, [query])

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationPrevious
          disabled={paginationData.currentPage === 1}
          href={baseUrl + `&page=${paginationData.currentPage - 1}`}
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
              href={`${baseUrl}&page=${page}`}
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
          disabled={paginationData.currentPage >= meta.pagination.pageCount}
          href={baseUrl + `&page=${paginationData.currentPage + 1}`}
        />
      </PaginationContent>
    </Pagination>
  )
}

export const AnalysisList = ({ data, meta }) => {
  return (
    <motion.div className="page-wrapper">
      <PageHeader counter={meta.pagination.total} />

      {meta.pagination.total ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20">
            {data.map((attributes, index) => (
              <PostCard
                key={attributes.slug}
                attributes={attributes}
                animOrder={index}
              />
            ))}
          </div>
          <PaginationWrapper meta={meta} />
        </>
      ) : (
        <NotFound />
      )}
    </motion.div>
  )
}

const NotFound = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <AnimatedText>Nenhum Resultado Econtrado</AnimatedText>
    </div>
  )
}
