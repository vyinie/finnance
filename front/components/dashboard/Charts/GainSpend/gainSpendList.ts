import { NoteProps } from '@/components/dashboard/NotesTable'
import { writeFileSync } from 'fs'
import notesList from '@/db/Noteslist.json'

const gainSpendList = (notesList: NoteProps[]) => {
  const list: { gains: number[]; spends: number[] } = {
    gains: [],
    spends: [],
  }

  notesList.map((note) => {
    const valueIndex = new Date(note.date).getMonth()

    if (note.inFlow) {
      list.gains[valueIndex]
        ? (list.gains[valueIndex] += note.value)
        : (list.gains[valueIndex] = note.value)
    } else {
      list.spends[valueIndex]
        ? (list.spends[valueIndex] += note.value)
        : (list.spends[valueIndex] = note.value)
    }
    return null
  })

  return list
}

writeFileSync('gainSpendList.json', JSON.stringify(gainSpendList(notesList)))
export { gainSpendList }
