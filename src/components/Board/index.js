import {
  ArrowLeftIcon,
  ArrowRightIcon,
  UpdateIcon,
} from '@radix-ui/react-icons'
import { useEffect, useId, useState } from 'react'

export const Board = ({ pgn }) => {
  const [board, setBoard] = useState(null)
  const id = useId()

  useEffect(() => {
    const init = async () => {
      const { default: LichessPgnViewer } = await import('lichess-pgn-viewer')
      const element = document.getElementsByClassName('board')[0]

      const b = LichessPgnViewer(element, {
        pgn: `${pgn}`,
        showMoves: 'auto',
        scrollToMove: false,
        showControls: false,
        chessground: {
          animation: {
            enabled: true,
            duration: 200,
          },
        },
        lichess: false,
        classes: 'board',
      })
      setBoard(b)
    }
    init()
  }, [id, pgn])

  return (
    <div>
      <div className="board" />
      <div className="flex">
        <button
          onClick={handleMove(board, 'prev')}
          className="flex-1 hover:bg-primary-500/30 py-4 rounded-2xl transition-colors"
        >
          <ArrowLeftIcon className="mx-auto" width={40} height={40} />
        </button>
        <button
          onClick={handleMove(board, 'flip')}
          className="hover:bg-primary-500/30 p-4 rounded-2xl transition-colors"
        >
          <UpdateIcon width={40} height={40} />
        </button>
        <button
          onClick={handleMove(board, 'next')}
          className="flex-1 hover:bg-primary-500/30 py-4 rounded-2xl transition-colors"
        >
          <ArrowRightIcon className="mx-auto" width={40} height={40} />
        </button>
      </div>
    </div>
  )
}

const handleMove = (board, move) => {
  switch (move) {
    case 'next':
      return () => board.goTo('next')
    case 'prev':
      return () => board.goTo('prev')
    case 'flip':
      return () => board.flip()
    default:
      return () => console.error('Invalid move')
  }
}
