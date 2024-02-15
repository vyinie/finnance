'use client'
import { HTMLAttributes, useState } from 'react'

import { twMerge } from 'tailwind-merge'
import { Maximize, SlidersHorizontal } from 'lucide-react'

import { IconButton } from '@/components/globals/IconBtnTemplate'
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
        'relative flex min-h-fit w-full flex-col rounded-lg border-2 border-neutral-400 dark:border-neutral-500',
        rest.className,
      )}
    >
      <header className="flex w-full justify-between p-1">
        <h1 className="text-lg font-bold capitalize">
          ganhos/gastos deste ano
        </h1>

        <IconButton>
          <SlidersHorizontal />
        </IconButton>
      </header>

      <div className="min-h-56 w-full">
        <GainSpendChart gainRecords={gainRecords} spendRecors={spendRecors} />
      </div>

      {/* full screen button */}
      <Maximize
        onClick={() => setIsFullScreen((old) => !old)}
        className="absolute bottom-1 right-1 min-[830px]:hidden"
      />

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
