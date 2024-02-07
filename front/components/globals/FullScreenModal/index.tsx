import React, { ReactNode } from 'react'
import { Wrapper } from '../Wrapper'
import { GenericToggle } from '@/functions/interfaces'
import { Minimize } from 'lucide-react'

interface FullScreenModalProps extends GenericToggle {
  children: ReactNode
}

export default function FullScreenModal({
  children,
  isOn,
  setIsOn,
}: FullScreenModalProps) {
  return (
    <Wrapper
      isOn={isOn}
      setIsOn={setIsOn}
      className="flex items-center justify-center"
    >
      <div
        data-is-on={isOn}
        className="relative h-[92vw] w-0 rotate-90 overflow-hidden rounded bg-white transition-all data-[is-on=true]:min-w-[92vh] data-[is-on=true]:delay-100 dark:bg-neutral-700"
      >
        <div className="h-full w-full p-2">{children}</div>

        <Minimize
          onClick={() => setIsOn((old) => !old)}
          className="absolute bottom-1 right-1"
        />
      </div>
    </Wrapper>
  )
}
