'use client'
import { IconButton } from '@/components/IconBtnTemplate'
import { Settings } from 'lucide-react'
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
        'h-72 w-full rounded-lg border-2 border-neutral-400 capitalize dark:border-neutral-500',
        rest.className,
      )}
    >
      <header className="flex w-full justify-between p-1">
        <h1 className="text-xl font-bold">orçamento</h1>
        <IconButton>
          <Settings />
        </IconButton>
      </header>

      <BudgetChart budgetData={budgetData} />
    </div>
  )
}
