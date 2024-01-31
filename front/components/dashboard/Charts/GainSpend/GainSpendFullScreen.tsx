import { GenericToggle } from '@/functions/interfaces'
import { GainSpendChart } from './GainSpendChart'
import { GainSpendChartProps } from '.'
import FullScreenModal from '@/components/FullScreenModal'

interface GainSpendFullScreenProps extends GenericToggle, GainSpendChartProps {}

export default function GainSpendFullScreen({
  isOn,
  setIsOn,
  gainRecords,
  spendRecors,
}: GainSpendFullScreenProps) {
  return (
    <FullScreenModal isOn={isOn} setIsOn={setIsOn}>
      <GainSpendChart gainRecords={gainRecords} spendRecors={spendRecors} />
    </FullScreenModal>
  )
}
