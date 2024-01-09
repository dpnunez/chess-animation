import { cn } from '@/styles/helpers'
import Showdown from 'showdown'

export const MarkdownRender = ({ children, className }) => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
  })
  const html = converter.makeHtml(children)
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      className={cn('markdown', className)}
    />
  )
}
