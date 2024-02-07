'use client'
import TableComponent from '@/components/TableComponent'
import { NoteProps } from '.'
import moment from 'moment'
import { useState } from 'react'
import { stateToggle } from '@/functions/stateToggle'
import NoteModal from './NoteModal'

export default function NoteRow({ note }: { note: NoteProps }) {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)

  return (
    <>
      <TableComponent.BodyRow
        onClick={(e) => stateToggle(e, setIsNoteModalOpen)}
        className="handler group"
      >
        <td className="handler min-w-28 max-w-28 overflow-hidden text-ellipsis whitespace-nowrap px-1">
          {note.name}
        </td>

        <td
          data-inflow={note.inFlow}
          className="handler min-w-20 max-w-20 overflow-hidden text-ellipsis whitespace-nowrap text-positive data-[inflow=false]:text-negative"
        >
          <span className="handler hidden min-[600px]:inline">R$</span>
          {note.value.toLocaleString()}
        </td>

        <td className="handler min-w-20 max-w-20 overflow-hidden text-ellipsis whitespace-nowrap px-1">
          {note.class}
        </td>

        <td
          data-inflow={note.inFlow}
          className="handler min-w-20 text-positive data-[inflow=false]:text-negative"
        >
          {note.inFlow ? 'saída' : 'entrada'}
        </td>

        <td className="handler min-w-20">
          {moment(note.date).format('DD/MM/YY')}
        </td>
      </TableComponent.BodyRow>
      <tr className="min-[550px]:hidden">
        <td>
          <NoteModal
            isOn={isNoteModalOpen}
            noteData={note}
            setIsOn={setIsNoteModalOpen}
          />
        </td>
      </tr>
    </>
  )
}
