import { Wrapper } from '@/components/Wrapper'
import { GenericToggle } from '@/functions/interfaces'
import { GainSpendChart } from './GainSpendChart'
import { GainSpendChartProps } from '.'
import { Minimize } from 'lucide-react'
import { IconButton } from '@/components/IconBtnTemplate'

interface GainSpendFullScreenProps extends GenericToggle, GainSpendChartProps {}

export default function GainSpendFullScreen({
  isOn,
  setIsOn,
  gainRecords,
  spendRecors,
}: GainSpendFullScreenProps) {
  return (
    <Wrapper
      isOn={isOn}
      setIsOn={setIsOn}
      className="flex items-center justify-center"
    >
      <div
        data-is-on={isOn}
        className="relative min-h-[90vw] min-w-[90vh] rotate-90 rounded bg-white p-2 dark:bg-neutral-700"
      >
        <GainSpendChart gainRecords={gainRecords} spendRecors={spendRecors} />

        <IconButton
          onClick={() => setIsOn((old) => !old)}
          kaseClassName="handler"
          className="absolute bottom-1 right-1"
        >
          <Minimize />
        </IconButton>
      </div>
    </Wrapper>
  )
}
