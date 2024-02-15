'use client'
import { IconButton } from '@/components/globals/IconBtnTemplate'
import { MinusCircle } from 'lucide-react'
import moment from 'moment'
import TableComponent from '@/components/TableComponent'
import { DebtProps } from '.'
import DebtModal from './DebtModal'
import { useState } from 'react'

export default function DebtRow({ debt }: { debt: DebtProps }) {
  const [modalOn, setModalOn] = useState(false)
  const paymentStatus = (payDay: Date | string) => {
    const today = moment()
    const payDayDate = moment(payDay)

    /** prazo de alerta */
    const daysUntilPayday = payDayDate.diff(today, 'days')

    // hoje é depois do inicio do alerta e antes do dia do pagamento
    if (daysUntilPayday <= 5 && daysUntilPayday >= 0) {
      return 'upcoming'
    }

    if (daysUntilPayday < 0) {
      return 'late'
    }
    return ''
  }
  return (
    <>
      <TableComponent.BodyRow
        onClick={() => setModalOn((old) => !old)}
        data-payday-status={paymentStatus(debt.payDay)}
        moreOptClassName="min-[930px]:inline"
        className="group grid items-center [grid-template-columns:90px_80px_90px_90px_32px] data-[payday-status=late]:font-bold data-[payday-status=late]:text-negative data-[payday-status=upcoming]:text-amber-500 min-[480px]:[grid-template-columns:repeat(4,1fr)_32px] min-[580px]:[grid-template-columns:90px_80px_90px_90px_32px] min-[930px]:[grid-template-columns:repeat(4,1fr)_repeat(2,32px)]"
      >
        <td className="w-full overflow-hidden text-ellipsis">{debt.name}</td>
        <td className="px-1">
          <span className="hidden min-[580px]:inline">R$</span>
          {debt.installmentValue.toLocaleString()}
        </td>
        <td className="">{moment(debt.payDay).format('DD/MM/YY')}</td>
        <td className="">{debt.remainingInstallments}</td>
        <td className="sticky -right-1 bg-neutral-50 transition-colors  group-hover:bg-neutral-200 dark:bg-neutral-700 dark:group-hover:bg-neutral-600">
          <IconButton className="rounded-full p-1">
            <MinusCircle />
          </IconButton>
        </td>
      </TableComponent.BodyRow>
      <tr className="min-[930px]:hidden">
        <>
          <DebtModal debtData={debt} isOn={modalOn} setIsOn={setModalOn} />
        </>
      </tr>
    </>
  )
}
