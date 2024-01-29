import { Wrapper } from '@/components/Wrapper'
import { GenericToggle } from '@/functions/interfaces'
import { GSChart } from './GSChart'
import { GainSpendChartProps } from '.'
import { memo } from 'react'

interface GainSpendFullScreen extends GenericToggle, GainSpendChartProps {}

function GainSpendFullScreen({
  isOn,
  setIsOn,
  gainRecords,
  spendRecors,
}: GainSpendFullScreen) {
  return (
    <Wrapper
      isOn={isOn}
      setIsOn={setIsOn}
      className="flex items-center justify-center"
    >
      <div
        data-is-on={isOn}
        className="h-[90vw] w-[100vh] rotate-90 rounded bg-white dark:bg-neutral-700"
      >
        <GSChart gainRecords={gainRecords} spendRecors={spendRecors} />
      </div>
    </Wrapper>
  )
}

export default memo(GSChart)