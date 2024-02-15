import { SlidersHorizontal } from 'lucide-react'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableRootProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: ReactNode
}

export default function Root({ title, children, ...rest }: TableRootProps) {
  return (
    <table
      className={twMerge(
        'grid max-h-[50vh] w-full cursor-default overflow-auto rounded-lg border-2 border-neutral-400 capitalize dark:border-neutral-500 max-[829px]:min-h-64 min-[830px]:min-h-full',
        rest.className,
      )}
    >
      <caption className="sticky -top-2 left-0 z-[3] flex w-full items-center justify-between bg-neutral-50 dark:bg-neutral-700">
        <h1 className="text-lg font-bold">{title}</h1>
        <IconButton className="rounded-full p-1">
          <SlidersHorizontal className="" />
        </IconButton>
      </caption>
      {children}
    </table>
  )
}
