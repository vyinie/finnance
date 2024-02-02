'use client'
import { useState } from 'react'
import { Bar } from './Bar'
import { MobileSideBarToggle } from './SideBarToggle'
import { Wrapper } from '@/components/globals/Wrapper'

export function AppSideBar() {
  const [sideBarToggle, setSideBarToggle] = useState(false)

  return (
    <>
      {/* mobile smathphone */}
      <header className="flex h-[42px] w-full items-center justify-center bg-neutral-200 capitalize dark:bg-neutral-500 min-[457px]:hidden">
        <MobileSideBarToggle isOn={sideBarToggle} setIsOn={setSideBarToggle} />

        <h1 className="text-xl font-bold">dashboard</h1>

        {/* sidebar wrapper */}
        <Wrapper
          isOn={sideBarToggle}
          setIsOn={setSideBarToggle}
          className="z-[9] "
        >
          {/* sidebar */}
          <Bar setIsOpen={setSideBarToggle} isOpen={sideBarToggle} />
        </Wrapper>
      </header>

      {/* mobile tablet-desktop */}
      <Bar
        className="sticky top-0 hidden h-screen py-2 data-[is-open=false]:w-[60px] min-[457px]:flex"
        setIsOpen={setSideBarToggle}
        isOpen={sideBarToggle}
      />
    </>
  )
}
