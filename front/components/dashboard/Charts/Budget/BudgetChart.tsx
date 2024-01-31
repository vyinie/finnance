import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { BudgetChartDataProps } from '.'
import { budgetList } from './budgetList'

const ChartTemplate = dynamic(() => import('react-apexcharts'), { ssr: false })

export function BudgetChart({
  budgetData,
}: {
  budgetData: BudgetChartDataProps
}) {
  const { budgetSeries, xaxisCategories } = budgetList(budgetData)

  const options: ApexOptions = {
    chart: { toolbar: { show: false } },
    dataLabels: { enabled: false },
    fill: { opacity: 1 },
    plotOptions: { bar: { distributed: true } },
    yaxis: {
      labels: {
        padding: 5,
        style: { fontSize: '14px', fontWeight: 600 },
        formatter: (val) => val.toLocaleString('pt-BR'),
      },
    },
    xaxis: {
      labels: { style: { fontSize: '14px', fontWeight: 600 } },
      categories: xaxisCategories,
    },
    legend: { position: 'top', fontSize: '14px', fontWeight: 600 },
    responsive: [
      {
        breakpoint: 480,
        options: {
          yaxis: {
            labels: {
              padding: 10,
              style: { fontSize: '12px', fontWeight: 700 },
              formatter: (val: number) => val.toLocaleString('pt-BR'),
            },
          },
          xaxis: {
            labels: { style: { fontSize: '12px', fontWeight: 600 } },
          },
          legend: { position: 'top', fontSize: '12px', fontWeight: 600 },
        },
      },
    ],
  }
  const series: ApexAxisChartSeries = budgetSeries
  return (
    <div className=" h-full w-full">
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
