'use client'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { twMerge } from 'tailwind-merge'
import { HTMLAttributes } from 'react'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface GainSpendChartProps extends HTMLAttributes<HTMLDivElement> {
  gainRecords: number[]
  spendRecors: number[]
  classname?: string
}

export function GainSpendChart({
  gainRecords,
  spendRecors,
  ...rest
}: GainSpendChartProps) {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
    <div
      className={twMerge(
        'min-h-56 w-full rounded-md border-2 border-neutral-400 dark:border-neutral-500',
        rest.classname,
      )}
    >
      <Chart
        type="bar"
        height={'100%'}
        width={'100%'}
        options={options}
        series={series}
      />
    </div>
  )
}
