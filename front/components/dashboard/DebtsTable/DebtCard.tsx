import { Edit, Trash2 } from 'lucide-react'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import { DebtProps } from '.'
import moment from 'moment'

export function DebtCard({ debtData }: { debtData: DebtProps }) {
  return (
    <>
      <h1 className="w-fit px-2 pb-1">{debtData.name}</h1>

      <div className="grid w-full grid-cols-2 place-items-center border-b-2 border-neutral-300 py-2">
        <h1 className="px-2 text-center leading-5">parcela</h1>
        <p className="">R${debtData.installmentValue.toLocaleString()}</p>
      </div>

      <div className="grid w-full grid-cols-2 place-items-center border-b-2 border-neutral-300 py-1">
        <h1 className="px-2 text-center leading-5">parcelas restantes</h1>
        <p className=" "> {debtData.remainingInstallments}</p>
      </div>

      <div className="grid w-full grid-cols-2 place-items-center border-b-2 border-neutral-300 py-1">
        <h1 className="px-2 text-center leading-5">dia do pagamento</h1>
        <p className="">{moment(debtData.payDay).format('DD/MM')}</p>
      </div>

      <div className="grid w-full grid-cols-2 place-items-center border-b-2 border-neutral-300 py-1">
        <h1 className="px-2 text-center leading-5">previsão de fim</h1>
        <p className="">
          {moment(debtData.payDay)
            .month(
              moment(debtData.payDay).month() +
                debtData.remainingInstallments -
                1,
            )
            .format('DD/MM/YY')}
        </p>
      </div>

      <div className="flex w-full justify-center gap-2 pt-2">
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
