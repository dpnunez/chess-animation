const usePagination = ({ page, pageCount }) => {
  const isMiddle = page > 1 && page < pageCount
  const offset = isMiddle ? 1 : 2
  const initial = Math.max(page - offset, 1)
  const final = Math.min(pageCount, page + offset)

  return {
    show: Array.from({ length: final - initial + 1 }, (_, i) => initial + i),
    rightDots: final < pageCount,
    leftDots: initial > 1,
    currentPage: Number(page),
  }
}

export { usePagination }
