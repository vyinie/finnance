import { GenericToggle } from '@/functions/interfaces'
import { Wrapper } from '@/components/globals/Wrapper'
import { DebtProps } from '.'
import { DebtCard } from './DebtCard'

export interface DebtModalProps extends GenericToggle {
  debtData: DebtProps
}
export default function DebtModal({ isOn, debtData, setIsOn }: DebtModalProps) {
  return (
    <Wrapper className="grid place-items-center" setIsOn={setIsOn} isOn={isOn}>
      <div
        data-is-open={isOn}
        className="h-72 w-60 overflow-hidden rounded-lg bg-neutral-100 p-2 text-xl transition-all data-[is-open=false]:h-0 data-[is-open=true]:delay-100 dark:bg-neutral-600"
      >
        <DebtCard debtData={debtData} />
      </div>
    </Wrapper>
  )
}
