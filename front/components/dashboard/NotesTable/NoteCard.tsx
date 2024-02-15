import { Edit, Trash2 } from 'lucide-react'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import moment from 'moment'
import { NoteProps } from '.'

export function NoteCard({ noteData }: { noteData: NoteProps }) {
  return (
    <>
      <h1 className="overflow-hidden text-ellipsis font-bold ">
        {noteData.name}
      </h1>

      <div className=" grid h-10 w-full grid-cols-3 place-items-center border-b-2 border-neutral-450 dark:border-neutral-500">
        <h1 className=" ">valor</h1>
        <p
          data-inflow={noteData.inFlow}
          className=" col-span-2 text-positive data-[inflow=false]:text-negative"
        >
          R${noteData.value}
        </p>
      </div>

      <div className=" grid h-10 w-full grid-cols-3 place-items-center border-b-2 border-neutral-450 dark:border-neutral-500">
        <h1 className=" ">classe</h1>
        <p className=" col-span-2"> {noteData.class}</p>
      </div>

      <div className=" grid h-10 w-full grid-cols-3 place-items-center border-b-2 border-neutral-450 dark:border-neutral-500">
        <h1 className=" ">fluxo</h1>
        <p
          data-inflow={noteData.inFlow}
          className=" col-span-2 text-positive data-[inflow=false]:text-negative"
        >
          {noteData.inFlow ? 'entrada' : 'saída'}
        </p>
      </div>

      <div className=" grid h-10 w-full grid-cols-3 place-items-center ">
        <h1 className="">data</h1>
        <p className=" col-span-2">
          {moment(noteData.date).format('DD/MM/YY')}
        </p>
      </div>

      <div className=" flex w-full justify-center gap-2">
        <IconButton className="rounded-full p-1">
          <Edit className="h-8 w-8" />
        </IconButton>

        <IconButton className="rounded-full p-1">
          <Trash2 className="h-8 w-8" />
        </IconButton>
      </div>
    </>
  )
}
