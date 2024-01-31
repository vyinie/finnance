'use client'
import { IconButton } from '@/components/IconBtnTemplate'
import { Maximize, SlidersHorizontal } from 'lucide-react'
import React, { HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { BudgetChart } from './BudgetChart'
import FullScreenBudgetChart from './FullScreenBudgetChart'

export interface BudgetChartDataProps {
  classes: {
    name: string
    data: { spendingCap: number; expense: number }
    color: string
  }[]
  total: number
}

interface BudgetChartProps extends HTMLAttributes<HTMLDivElement> {
  budgetData: BudgetChartDataProps
}

export function Budget({ budgetData, ...rest }: BudgetChartProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  return (
    <div
      className={twMerge(
        'relative flex min-h-fit w-full flex-col rounded-lg border-2 border-neutral-400 pb-5 capitalize dark:border-neutral-500',
        rest.className,
      )}
    >
      <header className="flex w-full justify-between p-1">
        <h1 className="text-lg font-bold">orçamento</h1>
        <IconButton>
          <SlidersHorizontal />
        </IconButton>
      </header>

      <BudgetChart budgetData={budgetData} />

      {/* full screen button */}
      <IconButton
        onClick={() => setIsFullScreen((old) => !old)}
        className="absolute bottom-0.5 right-1"
      >
        <Maximize />
      </IconButton>

      <FullScreenBudgetChart
        budgetData={budgetData}
        isOn={isFullScreen}
        setIsOn={setIsFullScreen}
      />
    </div>
  )
}
