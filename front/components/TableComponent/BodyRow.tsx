import { MoreVertical } from 'lucide-react'
import { HTMLAttributes, ReactNode } from 'react'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import { twMerge } from 'tailwind-merge'

interface BodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode
  moreOptClassName: string
}

export default function BodyRow({
  children,
  moreOptClassName,
  ...rest
}: BodyRowProps) {
  return (
    <tr
      {...rest}
      className={twMerge(
        'h-9 border-b-2 border-neutral-400 text-center transition-colors hover:bg-gray-200 dark:border-neutral-500 dark:hover:bg-neutral-600',
        rest.className,
      )}
    >
      {children}
      <td className={`hidden ${moreOptClassName}`}>
        <IconButton className="rounded-full p-1">
          <MoreVertical />
        </IconButton>
      </td>
    </tr>
  )
}
