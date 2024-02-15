import TableComponent from '@/components/TableComponent'
import DebtRow from './DebtRow'
import { PaginationPanel } from '@/components/PaginationPanel'
import { PageProps } from '@/functions/usePagination'
import { HTMLAttributes } from 'react'

export interface DebtProps {
  id: number
  name: string
  installmentValue: number
  remainingInstallments: number
  payDay: Date | string
}

interface DebtsTableProps extends HTMLAttributes<HTMLDivElement> {
  debtsBook: PageProps<DebtProps>[]
  currentPage: number
}

export function DebtsTable({
  debtsBook,
  currentPage,
  ...rest
}: DebtsTableProps) {
  const actualPage = currentPage <= debtsBook.length ? currentPage : 1

  return (
    <TableComponent.Root title="dívidas" className={rest.className}>
      <TableComponent.HeaderRow className="grid place-items-center [grid-template-columns:90px_80px_90px_90px_32px] min-[480px]:[grid-template-columns:repeat(4,1fr)_32px] min-[580px]:[grid-template-columns:90px_80px_90px_90px_32px] min-[930px]:[grid-template-columns:repeat(4,1fr)_repeat(2,32px)]">
        <th className="">título</th>
        <th className="">parcela</th>
        <th className="w-full overflow-hidden text-ellipsis px-1">
          data de pagamento
        </th>
        <th className="">parcelas restantes</th>
      </TableComponent.HeaderRow>

      <tbody className="">
        {debtsBook[actualPage - 1].content.map((debt) => (
          <DebtRow debt={debt} key={`debt${debt.id}`} />
        ))}
      </tbody>
      <tfoot className="sticky left-0 flex w-full justify-center pb-2 pt-1">
        <tr>
          <PaginationPanel
            currentPage={actualPage}
            pages={debtsBook}
            pageName="debtsPage"
          />
        </tr>
      </tfoot>
    </TableComponent.Root>
  )
}
