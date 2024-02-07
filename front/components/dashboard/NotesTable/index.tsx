import TableComponent from '@/components/TableComponent'
import NoteRow from './NoteRow'
import { PageProps } from '@/functions/usePagination'
import { PaginationPanel } from '@/components/PaginationPanel'

export interface NoteProps {
  id: number
  name: string
  value: number
  class: string
  inFlow: boolean
  date: Date | string
}

export function NotesTable({
  notesBook,
  currentPage,
}: {
  notesBook: PageProps<NoteProps>[]
  currentPage: number
}) {
  const actualPage = currentPage <= notesBook.length ? currentPage : 1
  return (
    <TableComponent.Root title="notas">
      <TableComponent.HeaderRow>
        <th className="min-w-[116px] px-1">título</th>
        <th className="min-w-20">valor</th>
        <th className="min-w-20 px-1">classe</th>
        <th className="min-w-20">fluxo</th>
        <th className="min-w-20 ">data</th>
      </TableComponent.HeaderRow>

      <tbody className="p-1">
        {notesBook[actualPage - 1].content.map((note) => (
          <NoteRow note={note} key={`note${note.id}`} />
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
