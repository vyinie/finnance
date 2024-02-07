import Card from '@/components/InfoCard/Card'
import { AppSideBar } from '@/components/AppSideBar'
import { NotesTable } from '@/components/dashboard/NotesTable'
import { DebtsTable } from '@/components/dashboard/DebtsTable'
import { GainSpend } from '@/components/dashboard/Charts/GainSpend'
import { Budget } from '@/components/dashboard/Charts/Budget'

import debtsBook from '@/db/DebtsPages.json'
import notesBook from '@/db/NotesPages.json'
import budgetData from '@/db/BudgetData.json'
import gainSpendList from '@/db/GainSpendList.json'

// import { gainSpendList } from '@/components/dashboard/Charts/GainSpend/gainSpendList'

export default async function Home({
  searchParams,
}: {
  searchParams: {
    notesPage: string
    debtsPage: string
  }
}) {
  return (
    <main className="h-screen w-full grid-cols-[60px,auto] overflow-y-auto bg-neutral-50 transition-colors dark:bg-neutral-700  max-[457px]:pb-5 min-[457px]:grid">
      {/* =============== app side bar =============== */}
      <AppSideBar />

      {/* =============== main dashboard =============== */}
      <div className="flex flex-col gap-2 p-1 min-[520px]:items-center">
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
          gainRecords={gainSpendList.gains}
          spendRecors={gainSpendList.spends}
        />

        {/* =============== notes table =============== */}
        <NotesTable
          notesBook={notesBook}
          currentPage={Number(searchParams.notesPage)}
        />

        {/* =============== debts table =============== */}
        <DebtsTable
          debtsBook={debtsBook}
          currentPage={Number(searchParams.debtsPage)}
        />
      </div>
      {/* =============== side bar of add note form =============== */}
    </main>
  )
}
