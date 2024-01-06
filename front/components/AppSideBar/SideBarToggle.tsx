import { IconButton } from '@/components/IconBtnTemplate'
import { GenericToggle } from '@/functions/interfaces'
import { stateToggle } from '@/functions/stateToggle'
import { Menu, X, SidebarClose, SidebarOpen } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SideBarToggleProps
  extends GenericToggle,
    HTMLAttributes<HTMLDivElement> {}

export function MobileSideBarToggle({
  isOn,
  setIsOn,
  ...rest
}: SideBarToggleProps) {
  return (
    <div
      data-is-open={isOn}
      className={twMerge(
        'fixed left-1 top-[3px] z-10 transition-all data-[is-open=true]:left-56 data-[is-open=true]:delay-100',
        rest.className,
      )}
    >
      <IconButton
        data-is-open={isOn}
        onClick={(e) => stateToggle(e, setIsOn)}
        className="relative z-10 flex justify-end rounded-r-lg bg-neutral-50 p-0.5 transition data-[is-open=false]:rounded-lg data-[is-open=true]:delay-100 dark:bg-neutral-500"
      >
        {isOn ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </IconButton>
    </div>
  )
}

export function DesktopSideBarToggle({ isOn, setIsOn }: SideBarToggleProps) {
  const expandBar = () => setIsOn((old) => !old)

  return (
    <IconButton
      onClick={expandBar}
      data-is-bar-open={isOn}
      className="hidden rounded-full p-1 transition-all data-[is-bar-open=true]:self-end min-[457px]:grid"
    >
      {isOn ? (
        <SidebarClose className="h-8 w-8" />
      ) : (
        <SidebarOpen className="h-8 w-8" />
      )}
    </IconButton>
  )
}
