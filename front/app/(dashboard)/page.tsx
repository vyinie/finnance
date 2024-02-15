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
    <main className="h-screen w-full grid-cols-[60px,calc(100vw-65px)] overflow-y-auto bg-neutral-50 transition-colors dark:bg-neutral-700  max-[457px]:pb-5 min-[457px]:grid">
      {/* =============== app side bar =============== */}
      <AppSideBar />

      {/* =============== main dashboard =============== */}
      <section className="flex w-full grid-cols-2 flex-col gap-2 p-1 max-[520px]:items-center min-[580px]:grid min-[830px]:grid-areas-dashboard ">
        {/* =============== cards =============== */}
        <div className="flex w-full justify-center gap-1 max-[830px]:col-span-2 min-[830px]:grid-in-card">
          <Card
            title="despesas do mês"
            value="1200"
            className="text-negative"
          />
          <Card title="valor líquido" value="500" className="text-positive" />
        </div>

        {/* =============== budget =============== */}
        <Budget
          className="max-[830px]:col-span-2 min-[830px]:h-full min-[830px]:grid-in-budget"
          budgetData={budgetData}
        />

        {/* =============== gain-spend ratio =============== */}
        <GainSpend
          className="max-[830px]:col-span-2 min-[830px]:grid-in-gainSpend"
          gainRecords={gainSpendList.gains}
          spendRecors={gainSpendList.spends}
        />

        {/* =============== notes table =============== */}
        <NotesTable
          className="p-2 min-[830px]:grid-in-notes"
          notesBook={notesBook}
          currentPage={Number(searchParams.notesPage)}
        />

        {/* =============== debts table =============== */}
        <DebtsTable
          className="p-2 min-[830px]:grid-in-debts"
          debtsBook={debtsBook}
          currentPage={Number(searchParams.debtsPage)}
        />
      </section>
      {/* =============== side bar of add note form =============== */}
    </main>
  )
}
