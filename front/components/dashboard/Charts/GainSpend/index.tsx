'use client'
import { HTMLAttributes, useState } from 'react'

import { twMerge } from 'tailwind-merge'
import { Maximize, Settings } from 'lucide-react'

import { IconButton } from '@/components/IconBtnTemplate'
import GainSpendFullScreen from './GainSpendFullScreen'
import { GainSpendChart } from './GainSpendChart'

export interface GainSpendChartProps extends HTMLAttributes<HTMLDivElement> {
  gainRecords: number[]
  spendRecors: number[]
}

export function GainSpend({
  gainRecords,
  spendRecors,
  ...rest
}: GainSpendChartProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  return (
    <div
      className={twMerge(
        'relative flex min-h-72 w-full flex-col rounded-lg border-2 border-neutral-400 dark:border-neutral-500',
        rest.className,
      )}
    >
      <header className="flex w-full justify-between p-1">
        <h1 className="text-xl font-bold capitalize">
          ganhos/gastos deste ano
        </h1>

        <IconButton>
          <Settings />
        </IconButton>
      </header>

      <div className="h-full w-full">
        <GainSpendChart gainRecords={gainRecords} spendRecors={spendRecors} />
      </div>

      {/* full screen button */}
      <IconButton
        onClick={() => setIsFullScreen((old) => !old)}
        className="absolute bottom-1 right-1"
      >
        <Maximize />
      </IconButton>

      {/* full screen chart */}
      <GainSpendFullScreen
        gainRecords={gainRecords}
        spendRecors={spendRecors}
        isOn={isFullScreen}
        setIsOn={setIsFullScreen}
      />
    </div>
  )
}
