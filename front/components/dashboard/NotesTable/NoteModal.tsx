import { NoteProps } from '.'
import { GenericToggle } from '@/functions/interfaces'
import moment from 'moment'
import { Wrapper } from '@/components/globals/Wrapper'
import { Edit, Trash2 } from 'lucide-react'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import { NoteCard } from './NoteCard'

export interface NoteModalProps extends GenericToggle {
  noteData: NoteProps
}
export default function NoteModal({ isOn, noteData, setIsOn }: NoteModalProps) {
  return (
    <Wrapper className="grid place-items-center" setIsOn={setIsOn} isOn={isOn}>
      <div
        data-is-open={isOn}
        className="h-60 w-56 overflow-hidden rounded-lg bg-neutral-100 p-2 pb-1 text-xl transition-all data-[is-open=false]:h-0 data-[is-open=true]:delay-100 dark:bg-neutral-600"
      >
        <NoteCard noteData={noteData} />
      </div>
    </Wrapper>
  )
}
