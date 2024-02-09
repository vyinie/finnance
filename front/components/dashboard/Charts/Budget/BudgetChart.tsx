'use client'
import { BudgetChartDataProps } from '.'
import BudgetCollunChart from './BudgetCollunChart'
import BudgetStakedChart from './BudgetStaketChart'
import { budgetList } from './budgetList'
export function BudgetChart({
  budgetData,
}: {
  budgetData: BudgetChartDataProps
}) {
  const { collunSeries, stackedSeries } = budgetList(budgetData)
  const theme = () => {
    if (typeof window !== 'undefined') {
      return localStorage?.getItem('theme') === 'dark' ? 'dark' : 'light'
    }
  }
  const textColor = theme() === 'dark' ? '#d4d4d4' : '#4b5563'
  return (
    <div className="flex h-fit w-full flex-col min-[830px]:h-full ">
      <div className="h-32 w-full">
        <BudgetStakedChart series={stackedSeries} textColor={textColor} />
      </div>
      <div className="min-[830px]:h-full">
        <BudgetCollunChart series={collunSeries} textColor={textColor} />
      </div>
    </div>
  )
}
