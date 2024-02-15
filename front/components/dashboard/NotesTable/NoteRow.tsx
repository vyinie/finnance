'use client'
import TableComponent from '@/components/TableComponent'
import { NoteProps } from '.'
import moment from 'moment'
import { HTMLAttributes, useState } from 'react'
import NoteModal from './NoteModal'
import { twMerge } from 'tailwind-merge'

interface NoteRowProps extends HTMLAttributes<HTMLTableRowElement> {
  note: NoteProps
}

export default function NoteRow({ note, ...rest }: NoteRowProps) {
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)

  return (
    <>
      <TableComponent.BodyRow
        moreOptClassName="min-[970px]:block"
        onClick={() => setIsNoteModalOpen((old) => !old)}
        className={twMerge('group', rest.className)}
      >
        <td className="overflow-hidden text-ellipsis">{note.name}</td>

        <td
          data-inflow={note.inFlow}
          className="text-positive data-[inflow=false]:text-negative"
        >
          <span className="hidden min-[600px]:inline">R$</span>
          {note.value.toLocaleString()}
        </td>

        <td className="overflow-hidden text-ellipsis px-1">{note.class}</td>

        <td
          data-inflow={note.inFlow}
          className="text-positive data-[inflow=false]:text-negative"
        >
          {note.inFlow ? 'saída' : 'entrada'}
        </td>

        <td className="">{moment(note.date).format('DD/MM/YY')}</td>
      </TableComponent.BodyRow>
      <tr className="min-[970px]:hidden">
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
