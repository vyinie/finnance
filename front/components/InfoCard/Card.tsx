import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  value: string
}
export default function Card({ title, value, ...rest }: CardProps) {
  return (
    <div className="h-20 w-48 capitalize ">
      <div className="grid h-1/3 w-full place-items-center rounded-t-lg border-2 border-b-0 border-neutral-300 bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-500">
        {title}
      </div>
      <div
        className={twMerge(
          'grid h-2/3 w-full place-items-center rounded-b-lg border-2 border-t-0 border-neutral-300 bg-white text-2xl dark:border-neutral-500 dark:bg-neutral-450',
          rest.className,
        )}
      >
        {value}
      </div>
    </div>
  )
}
