import { SetToggleStateProp } from '@/functions/interfaces'
import ThemeHandler from './ThemeHandler'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { DesktopSideBarToggle } from './SideBarToggle'

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  setIsOpen: SetToggleStateProp
}

export function Bar({ isOpen, setIsOpen, ...rest }: SideBarProps) {
  return (
    <div
      {...rest}
      data-is-open={isOpen}
      className={twMerge(
        'not_handle z-[5] flex h-full w-56 flex-col items-center justify-between overflow-hidden border-r-2 border-neutral-400 bg-neutral-100 transition-all data-[is-open=false]:w-0 data-[is-open=true]:delay-100 dark:border-neutral-500 dark:bg-neutral-700',
        rest.className,
      )}
    >
      <div className="flex w-full flex-col">
        <DesktopSideBarToggle isOn={isOpen} setIsOn={setIsOpen} />
      </div>

      <span className="">
        <ThemeHandler isBarOpen={isOpen} />
      </span>
    </div>
  )
}
