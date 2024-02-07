import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const ChartTemplate = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function BudgetStakedChart({
  series,
}: {
  series: ApexAxisChartSeries
}) {
  const theme = localStorage?.getItem('theme') === 'dark' ? 'dark' : 'light'
  const textColor = theme === 'dark' ? '#d4d4d4' : '#4b5563'

  const options: ApexOptions = {
    chart: {
      toolbar: { show: false },
      stacked: true,
      stackType: '100%',
      type: 'bar',
      foreColor: textColor,
    },
    grid: { yaxis: { lines: { show: false } } },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => Math.round(val) + '%',
      style: { fontSize: '16px', fontWeight: 600 },
    },
    fill: { opacity: 1 },
    plotOptions: { bar: { horizontal: true } },
    yaxis: {
      show: false,
      floating: true,
      axisBorder: { show: false },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: '0px' } },
      floating: true,
    },
    legend: {
      position: 'top',
      fontSize: '16px',
      fontWeight: 600,
      itemMargin: { horizontal: 5, vertical: 3 },
      onItemClick: { toggleDataSeries: false },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          dataLabels: {
            enabled: true,
            formatter: (val: number) => Math.round(val) + '%',
            style: { fontSize: '12px', fontWeight: 600 },
          },
          legend: { position: 'top', fontSize: '12px', fontWeight: 600 },
        },
      },
    ],
  }

  return (
    <ChartTemplate
      options={options}
      series={series}
      height="100%"
      width="100%"
      type="bar"
    />
  )
}
