import Card from '@/components/InfoCard/Card'
import { AppSideBar } from '@/components/AppSideBar'
import { NotesTable } from '@/components/dashboard/NotesTable'
import { DebtProps, DebtsTable } from '@/components/dashboard/DebtsTable'
import { GainSpend } from '@/components/dashboard/Charts/GainSpend'
import { Budget } from '@/components/dashboard/Charts/Budget'

import notesList from '@/db/Noteslist.json'
import budgetData from '@/db/BudgetData.json'

import { gainSpendList } from '@/components/dashboard/Charts/GainSpend/gainSpendList'

const gainSpendValues = gainSpendList(notesList)

const debts: DebtProps[] = [
  {
    id: 1,
    name: 'divida divida divida divida',
    payDay: new Date('2024-01-03T12:30:43.244Z'),
    remainingInstallments: 10,
    value: 1200,
  },
  {
    id: 2,
    name: 'divida',
    payDay: new Date('2023-12-26T12:30:43.244Z'),
    remainingInstallments: 10,
    value: 600,
  },
  {
    id: 3,
    name: 'divida',
    payDay: new Date('2024-01-10T12:30:43.244Z'),
    remainingInstallments: 10,
    value: 600,
  },
  {
    id: 4,
    name: 'divida',
    payDay: new Date('2024-01-20T12:30:43.244Z'),
    remainingInstallments: 10,
    value: 600,
  },
  {
    id: 5,
    name: 'divida',
    payDay: new Date(),
    remainingInstallments: 10,
    value: 600,
  },
]

export default function Home() {
  return (
    <main className=" w-full grid-cols-[60px,auto] bg-neutral-50 transition-colors dark:bg-neutral-700  max-[457px]:pb-5 min-[457px]:grid">
      {/* =============== app side bar =============== */}
      <AppSideBar />

      {/* =============== main dashboard =============== */}
      <div className="flex h-screen flex-col gap-2 overflow-y-auto p-1 min-[520px]:items-center">
        {/* =============== cards =============== */}
        <div className="flex justify-center gap-1">
          <Card
            title="despesas do mês"
            value="1200"
            className="text-negative"
          />
          <Card title="valor líquido" value="500" className="text-positive" />
        </div>

        {/* =============== budget =============== */}
        <Budget budgetData={budgetData} />

        {/* =============== gain-spend ratio =============== */}
        <GainSpend
          gainRecords={gainSpendValues.gains}
          spendRecors={gainSpendValues.spends}
        />

        {/* =============== notes table =============== */}
        <NotesTable notesList={notesList} />

        {/* =============== debts table =============== */}
        <DebtsTable debtsList={debts} />
      </div>
      {/* =============== side bar of add note form =============== */}
    </main>
  )
}
