'use client'
import { HTMLAttributes, useState } from 'react'

import { twMerge } from 'tailwind-merge'
import { Maximize } from 'lucide-react'

import { IconButton } from '@/components/IconBtnTemplate'
import GainSpendFullScreen from './GainSpendFullScreen'
import { GSChart } from './GSChart'

export interface GainSpendChartProps extends HTMLAttributes<HTMLDivElement> {
  gainRecords: number[]
  spendRecors: number[]
}

export function GainSpendChart({
  gainRecords,
  spendRecors,
  ...rest
}: GainSpendChartProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  return (
    <div
      className={twMerge(
        'relative min-h-56 w-full rounded-md border-2 border-neutral-400 dark:border-neutral-500',
        rest.className,
      )}
    >
      <GSChart gainRecords={gainRecords} spendRecors={spendRecors} />
      <IconButton
        onClick={() => setIsFullScreen((old) => !old)}
        className="absolute bottom-1 right-1"
      >
        <Maximize />
      </IconButton>

      <GainSpendFullScreen
        gainRecords={gainRecords}
        spendRecors={spendRecors}
        isOn={isFullScreen}
        setIsOn={setIsFullScreen}
      />
    </div>
  )
}
