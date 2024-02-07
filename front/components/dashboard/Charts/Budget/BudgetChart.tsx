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

  return (
    <div className="flex h-fit w-full flex-col ">
      <div className="h-32 w-full">
        <BudgetStakedChart series={stackedSeries} />
      </div>
      <div className="">
        <BudgetCollunChart series={collunSeries} />
      </div>
    </div>
  )
}
