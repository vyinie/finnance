import TableComponent from '@/components/TableComponent'
import NoteRow from './NoteRow'
import { PageProps } from '@/functions/usePagination'
import { PaginationPanel } from '@/components/PaginationPanel'
import { HTMLAttributes } from 'react'

export interface NoteProps {
  id: number
  name: string
  value: number
  class: string
  inFlow: boolean
  date: Date | string
}

interface NotesTableProps extends HTMLAttributes<HTMLDivElement> {
  notesBook: PageProps<NoteProps>[]
  currentPage: number
}

export function NotesTable({
  notesBook,
  currentPage,
  ...rest
}: NotesTableProps) {
  const actualPage = currentPage <= notesBook.length ? currentPage : 1
  return (
    <TableComponent.Root title="notas" className={rest.className}>
      <TableComponent.HeaderRow className="grid place-items-center [grid-template-columns:repeat(3,90px)_70px_80px] min-[520px]:[grid-template-columns:repeat(5,1fr)] min-[580px]:[grid-template-columns:repeat(3,90px)_70px_80px] min-[970px]:[grid-template-columns:repeat(5,1fr)_32px]">
        <th className="">título</th>
        <th className="">valor</th>
        <th className="">classe</th>
        <th className="">fluxo</th>
        <th className="">data</th>
      </TableComponent.HeaderRow>

      <tbody className="">
        {notesBook[actualPage - 1].content.map((note) => (
          <NoteRow
            note={note}
            key={`note${note.id}`}
            className="grid place-items-center [grid-template-columns:repeat(3,90px)_70px_80px] min-[520px]:[grid-template-columns:repeat(5,1fr)] min-[580px]:[grid-template-columns:repeat(3,90px)_70px_80px] min-[970px]:[grid-template-columns:repeat(5,1fr)_32px]"
          />
        ))}
      </tbody>
      <tfoot className="sticky left-0 flex w-full justify-center pb-2 pt-1">
        <tr className="">
          <td>
            <PaginationPanel
              currentPage={actualPage}
              pages={notesBook}
              pageName="notesPage"
            />
          </td>
        </tr>
      </tfoot>
    </TableComponent.Root>
  )
}
