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
      <TableComponent.HeaderRow>
        <th className="min-w-32">título</th>
        <th className="min-w-20 px-1">parcela</th>
        <th className="min-w-20 max-w-24">data de pagame.</th>
        <th className="max-w-24">parcelas restantes</th>
      </TableComponent.HeaderRow>

      <tbody className="">
        {debtsBook[actualPage - 1].content.map((debt) => (
          <DebtRow debt={debt} key={`debt${debt.id}`} />
        ))}
      </tbody>
      <tfoot className="sticky left-0 flex w-full justify-center pb-2 pt-1">
        <tr>
          <td>
            <PaginationPanel
              currentPage={actualPage}
              pages={debtsBook}
              pageName="debtsPage"
            />
          </td>
        </tr>
      </tfoot>
    </TableComponent.Root>
  )
}
