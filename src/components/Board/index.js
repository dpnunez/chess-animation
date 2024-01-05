import { useEffect, useId } from 'react'
export const Board = ({ pgn }) => {
  const id = useId()

  useEffect(() => {
    const init = async () => {
      const { default: LichessPgnViewer } = await import('lichess-pgn-viewer')
      const element = document.getElementsByClassName('board')[0]

      LichessPgnViewer(element, {
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
    }
    init()
  }, [id, pgn])

  return <div className="board" />
}
