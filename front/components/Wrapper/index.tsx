import { GenericToggle } from '@/functions/interfaces'
import { stateToggle, toggleOptions } from '@/functions/stateToggle'
import { HTMLAttributes, MouseEvent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface WrapperProps extends HTMLAttributes<HTMLDivElement>, GenericToggle {
  children: ReactNode
  toggleOptions?: toggleOptions
}

export function Wrapper({
  children,
  toggleOptions,
  isOn,
  setIsOn,
  ...rest
}: WrapperProps) {
  return (
    <div
      data-is-open={isOn}
      className={twMerge(
        'fixed left-0 top-0 z-10 h-screen w-screen bg-black/50 transition-all data-[is-open=false]:-z-10 data-[is-open=false]:opacity-0 data-[is-open=false]:delay-100',
        rest.className,
      )}
      onClick={(e) => stateToggle(e, setIsOn, toggleOptions)}
    >
      {children}
    </div>
  )
}
