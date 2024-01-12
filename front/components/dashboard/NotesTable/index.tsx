import TableComponent from '@/components/TableComponent'
import NoteRow from './NoteRow'

export interface NoteProps {
  id: number
  name: string
  value: number
  class: string
  inFlow: boolean
  date: Date | string
}

export function NotesTable({ notesList }: { notesList: NoteProps[] }) {
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
        {notesList.map((note) => (
          <NoteRow note={note} key={`note${note.id}`} />
        ))}
      </tbody>
    </TableComponent.Root>
  )
}
