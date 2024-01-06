import Card from '@/components/InfoCard/Card'
import AppSideBar from '@/components/AppSideBar'
import { NoteProps, NotesTable } from '@/components/dashboard/NotesTable'
import { getCookie, setCookie } from 'cookies-next'
import { DebtProps, DebtsTable } from '@/components/dashboard/DebtsTable'
import notesList from '@/notesList.js'

const notes: NoteProps[] = notesList
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
  function setTheme() {
    const checker = getCookie('theme')
    !checker && setCookie('theme', 'light')
  }
  setTheme()

  return (
    <main className=" w-full grid-cols-[60px,auto] bg-neutral-50 transition-colors dark:bg-neutral-700 min-[457px]:grid">
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

        {/* =============== notes table =============== */}
        <NotesTable notesList={notes} />

        {/* =============== budget =============== */}

        {/* =============== gain-spend ratio =============== */}

        <DebtsTable debtsList={debts} />
      </div>
      {/* =============== side bar of add note form =============== */}
    </main>
  )
}
