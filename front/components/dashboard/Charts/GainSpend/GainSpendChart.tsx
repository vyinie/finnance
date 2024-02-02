import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { GainSpendChartProps } from '.'
const ChartTemplate = dynamic(() => import('react-apexcharts'), { ssr: false })

export function GainSpendChart({
  gainRecords,
  spendRecors,
}: GainSpendChartProps) {
  // const theme = localStorage?.getItem('theme') === 'dark' ? 'dark' : 'light'
  // const textColor = theme === 'dark' ? '#d4d4d4' : '#4b5563'

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
    legend: { fontSize: '14px' },
    chart: {
      toolbar: { show: false },
      background: 'transparent',
      //   foreColor: textColor,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        barHeight: '100%',
      },
    },
    fill: { opacity: 1 },
    yaxis: {
      labels: {
        style: { fontSize: '14px', fontWeight: 600 },
        formatter(val) {
          return val.toLocaleString('pt-BR')
        },
      },
    },
    xaxis: {
      labels: { style: { fontSize: '14px', fontWeight: 600 } },
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
        formatter: (val) => `R$ ${val.toLocaleString()}`,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          yaxis: {
            labels: {
              style: { fontSize: '12px', fontWeight: 600 },
              formatter: (val: number) => val.toLocaleString('pt-BR'),
            },
          },
          xaxis: {
            labels: { style: { fontSize: '12px', fontWeight: 600 } },
          },
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
