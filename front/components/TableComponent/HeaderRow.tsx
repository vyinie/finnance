import { ReactNode } from 'react'

export default function HeaderRow({ children }: { children: ReactNode }) {
  return (
    <thead className="w-full">
      <tr className="flex items-center text-lg">{children}</tr>
    </thead>
  )
}
