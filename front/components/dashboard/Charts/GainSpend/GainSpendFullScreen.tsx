import { Wrapper } from '@/components/Wrapper'
import { GenericToggle } from '@/functions/interfaces'
import { GainSpendChart } from './GainSpendChart'
import { GainSpendChartProps } from '.'
import { Minimize } from 'lucide-react'

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
        className="relative w-0 min-w-0 rotate-90 overflow-hidden rounded bg-white transition-all data-[is-on=true]:min-w-[calc(90vh)] data-[is-on=true]:delay-100 dark:bg-neutral-700"
      >
        <div className="min-h-[90vw] min-w-[90vh] p-2">
          <GainSpendChart gainRecords={gainRecords} spendRecors={spendRecors} />
        </div>

        <Minimize
          onClick={() => setIsOn((old) => !old)}
          className="absolute bottom-1 right-1"
        ></Minimize>
      </div>
    </Wrapper>
  )
}
