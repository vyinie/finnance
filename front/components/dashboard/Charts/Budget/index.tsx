'use client'
import { IconButton } from '@/components/IconBtnTemplate'
import { Maximize, Settings, SlidersHorizontal } from 'lucide-react'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { BudgetChart } from './BudgetChart'

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
  return (
    <div
      className={twMerge(
        'relative flex min-h-72 w-full flex-col rounded-lg border-2 border-neutral-400 capitalize dark:border-neutral-500',
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

      <IconButton className="absolute bottom-1 right-1">
        <Maximize />
      </IconButton>
    </div>
  )
}
