import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { BudgetChartDataProps } from '.'

const ChartTemplate = dynamic(() => import('react-apexcharts'), { ssr: false })

export function BudgetChart({
  budgetData,
}: {
  budgetData: BudgetChartDataProps
}) {
  const options: ApexOptions = {
    chart: {},
    xaxis: {},
  }
  const series: ApexAxisChartSeries = budgetData.classes.map((budget) => ({
    data: [
      {
        x: budget.name,
        y: budget.data.expense,
        goals: budget.data.spendingCap,
      },
    ],
  }))
  return (
    <div className="h-full w-full">
      <ChartTemplate
        type="bar"
        height={'100%'}
        width={'100%'}
        options={options}
        series={series}
      />
    </div>
  )
}
