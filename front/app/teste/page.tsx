import { NoteProps, NotesTable } from '@/components/dashboard/NotesTable'

export default function TestsArea() {
  const Notes: NoteProps[] = [
    {
      id: 0,
      name: 'coisa',
      value: 843,
      class: 'essencial',
      inFlow: true,
      date: new Date(),
    },
  ]
  return (
    <main className="h-full w-full">
      <NotesTable notesList={Notes} />
    </main>
  )
}
