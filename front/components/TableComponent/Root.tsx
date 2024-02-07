import { SlidersHorizontal } from 'lucide-react'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import { ReactNode } from 'react'

export default function Root({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <table className="flex max-h-[50vh] min-h-64 cursor-default flex-col overflow-auto rounded-lg border-2 border-neutral-400 capitalize dark:border-neutral-500 min-[517px]:w-fit">
      <caption className="sticky -top-1 left-0 z-[3] flex w-full items-center justify-between bg-neutral-50 p-1 dark:bg-neutral-700">
        <h1 className="text-lg font-bold">{title}</h1>
        <IconButton className="rounded-full p-1">
          <SlidersHorizontal className="" />
        </IconButton>
      </caption>
      {children}
    </table>
  )
}
