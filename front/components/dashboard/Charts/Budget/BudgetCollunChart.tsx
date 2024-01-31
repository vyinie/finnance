import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const ChartTemplate = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function BudgetCollunChart({
  series,
}: {
  series: ApexAxisChartSeries
}) {
  const options: ApexOptions = {
    chart: { toolbar: { show: false } },
    dataLabels: { enabled: false },
    fill: { opacity: 1 },
    plotOptions: { bar: { distributed: true } },
    yaxis: {
      labels: {
        style: { fontSize: '14px', fontWeight: 600 },
        formatter: (val) => val.toLocaleString('pt-BR'),
      },
    },
    xaxis: {
      labels: { style: { fontSize: '0px' } },
    },
    legend: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          yaxis: {
            labels: {
              style: { fontSize: '12px', fontWeight: 700 },
              formatter: (val: number) => val.toLocaleString('pt-BR'),
            },
          },
          legend: { position: 'top', fontSize: '12px', fontWeight: 600 },
        },
      },
    ],
  }

  return (
    <ChartTemplate
      type="bar"
      height={'100%'}
      width={'100%'}
      options={options}
      series={series}
    />
  )
}
