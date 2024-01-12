import { NoteProps } from '.'
import { GenericToggle } from '@/functions/interfaces'
import moment from 'moment'
import { Wrapper } from '@/components/Wrapper'
import { Edit, Trash2 } from 'lucide-react'
import { IconButton } from '@/components/IconBtnTemplate'

export interface NoteModalProps extends GenericToggle {
  noteData: NoteProps
}
export default function NoteModal({ isOn, noteData, setIsOn }: NoteModalProps) {
  return (
    <Wrapper className="grid place-items-center" setIsOn={setIsOn} isOn={isOn}>
      <div
        data-is-open={isOn}
        className="not_handle h-60 w-56 overflow-hidden rounded-lg bg-neutral-100 p-2 pb-1 text-xl transition-all data-[is-open=false]:h-0 data-[is-open=true]:delay-100 dark:bg-neutral-600"
      >
        <h1 className="not_handle font-bold ">{noteData.name}</h1>

        <div className="not_handle grid h-10 w-full grid-cols-3 place-items-center border-b-2 border-neutral-450 dark:border-neutral-500">
          <h1 className="not_handle ">valor</h1>
          <p
            data-inflow={noteData.inFlow}
            className="not_handle col-span-2 text-positive data-[inflow=false]:text-negative"
          >
            R${noteData.value}
          </p>
        </div>

        <div className="not_handle grid h-10 w-full grid-cols-3 place-items-center border-b-2 border-neutral-450 dark:border-neutral-500">
          <h1 className="not_handle ">classe</h1>
          <p className="not_handle col-span-2"> {noteData.class}</p>
        </div>

        <div className="not_handle grid h-10 w-full grid-cols-3 place-items-center border-b-2 border-neutral-450 dark:border-neutral-500">
          <h1 className="not_handle ">fluxo</h1>
          <p
            data-inflow={noteData.inFlow}
            className="not_handle col-span-2 text-positive data-[inflow=false]:text-negative"
          >
            {noteData.inFlow ? 'entrada' : 'saída'}
          </p>
        </div>

        <div className="not_handle grid h-10 w-full grid-cols-3 place-items-center ">
          <h1 className="not_handle">data</h1>
          <p className="not_handle col-span-2">
            {moment(noteData.date).format('DD/MM/YY')}
          </p>
        </div>

        <div className="not_handle flex w-full justify-center gap-2">
          <IconButton kaseClassName="not_handle" className="rounded-full p-1">
            <Edit className="h-8 w-8" />
          </IconButton>

          <IconButton className="rounded-full p-1">
            <Trash2 className="h-8 w-8" />
          </IconButton>
        </div>
      </div>
    </Wrapper>
  )
}
