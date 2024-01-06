import TableComponent from '@/components/TableComponent'
import DebtRow from './DebtRow'

export interface DebtProps {
  id: number
  name: string
  value: number
  remainingInstallments: number
  payDay: Date
}

export function DebtsTable({ debtsList }: { debtsList: DebtProps[] }) {
  return (
    <TableComponent.Root title="dívidas">
      <TableComponent.HeaderRow>
        <th className="min-w-32">título</th>
        <th className="min-w-20 px-1">parcela</th>
        <th className="min-w-20 max-w-24">data de pagame.</th>
        <th className="max-w-24">parcelas restantes</th>
      </TableComponent.HeaderRow>

      <tbody className="">
        {debtsList.map((debt) => (
          <DebtRow debt={debt} key={`debt${debt.id}`} />
        ))}
      </tbody>
    </TableComponent.Root>
  )
}
