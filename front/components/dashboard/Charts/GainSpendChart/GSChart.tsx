import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { GainSpendChartProps } from '.'
const ChartTemplate = dynamic(() => import('react-apexcharts'), { ssr: false })

export function GSChart({ gainRecords, spendRecors }: GainSpendChartProps) {
  const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

  const series: ApexAxisChartSeries = [
    {
      color: '#00E5BC',
      name: 'Ganhos',
      data: gainRecords,
    },
    {
      color: '#FA3232',
      name: 'Gastos',
      data: spendRecors,
    },
  ]

  const options: ApexOptions = {
    theme: { mode: theme },
    chart: {
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
      },
    },
    fill: { opacity: 1 },
    yaxis: { labels: { align: 'left', style: { fontSize: '16px' } } },
    xaxis: {
      labels: { style: { fontSize: '14px' } },
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nev',
        'Dez',
      ],
    },
    dataLabels: { enabled: false },
    tooltip: {
      style: {
        fontSize: '16px',
      },
      y: {
        formatter: (val) => `R$ ${val.toLocaleString()} `,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          yaxis: { labels: { style: { fontSize: '12px' } } },
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
