import { MouseEvent } from 'react'
import { SetToggleStateProp } from './interfaces'
export type toggleOptions = { whiteListKey?: string }

/** function to toggle a boolean state clicking on an html element which has "handler" in className */
export function stateToggle(
  e: MouseEvent<HTMLDivElement | HTMLButtonElement>,
  setState: SetToggleStateProp,
  options?: toggleOptions,
) {
  const target = e.target as HTMLDivElement | HTMLButtonElement // eventTerget has just 3 methods, so it masks this param from typescript
  if (
    typeof target.className === 'string' &&
    target.className.includes(options?.whiteListKey || 'handler')
  ) {
    setState((old) => !old)
  }
}
