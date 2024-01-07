const EDGE_OFSSET = 3

const usePagination = ({ page, pageCount }) => {
  const isLeft = page < EDGE_OFSSET
  const isRight = page > pageCount - EDGE_OFSSET
  const isMiddle = !isLeft && !isRight && pageCount > EDGE_OFSSET
  const canShowDots = pageCount > EDGE_OFSSET + 1

  const _show = () => {
    if (isLeft) {
      return Array.from(
        { length: Math.min(EDGE_OFSSET + 1, pageCount) },
        (_, i) => i + 1,
      )
    }

    if (isRight) {
      return Array.from(
        { length: Math.min(EDGE_OFSSET + 1, pageCount) },
        (_, i) => pageCount - i,
      ).reverse()
    }

    return Array.from({ length: 3 }, (_, i) => page - 1 + i)
  }

  const value = {
    show: _show(),
    rightDots: (isLeft || isMiddle) && canShowDots,
    leftDots: (isRight || isMiddle) && canShowDots,
    currentPage: Number(page),
  }

  return value
}

export { usePagination }
