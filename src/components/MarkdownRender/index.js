import { cn } from '@/styles/helpers'

export const MarkdownRender = ({ children, className }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: children,
      }}
      className={cn('markdown', className)}
    />
  )
}
