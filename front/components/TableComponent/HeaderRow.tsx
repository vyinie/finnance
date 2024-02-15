import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderRowProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}
export default function HeaderRow({ children, ...rest }: HeaderRowProps) {
  return (
    <thead className="">
      <tr
        className={twMerge('flex w-full items-center text-lg', rest.className)}
      >
        {children}
      </tr>
    </thead>
  )
}
