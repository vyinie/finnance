import { IconButton } from '@/components/IconBtnTemplate'
import { MinusCircle } from 'lucide-react'
import moment from 'moment'
import TableComponent from '@/components/TableComponent'
import { DebtProps } from '.'

export default function DebtRow({ debt }: { debt: DebtProps }) {
  const payDayStatus = (payDay: Date) => {
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
    <TableComponent.BodyRow
      data-payday-status={payDayStatus(debt.payDay)}
      className="group data-[payday-status=late]:font-bold data-[payday-status=late]:text-negative data-[payday-status=upcoming]:text-amber-500"
    >
      <td className="min-w-32 max-w-32 overflow-hidden text-ellipsis whitespace-nowrap px-1">
        {debt.name}
      </td>
      <td className="min-w-20 px-1">
        <span className="hidden sm:inline">R$</span>
        {debt.value}
      </td>
      <td className="min-w-24">{moment(debt.payDay).format('DD/MM')}</td>
      <td className="p min-w-24">{debt.remainingInstallments}</td>
      <td className="sticky right-0 bg-neutral-50 transition-colors  group-hover:bg-neutral-200 dark:bg-neutral-700 dark:group-hover:bg-neutral-600">
        <IconButton className="rounded-full p-1">
          <MinusCircle />
        </IconButton>
      </td>
    </TableComponent.BodyRow>
  )
}
