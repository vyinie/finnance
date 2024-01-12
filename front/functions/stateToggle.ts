import { MouseEvent } from 'react'
import { SetToggleStateProp } from './interfaces'
export type toggleOptions = { whiteListKey?: string }

/** function to toggle a boolean state */
export function stateToggle(
  e: MouseEvent<HTMLDivElement | HTMLButtonElement>,
  setState: SetToggleStateProp,
  options?: toggleOptions,
) {
  const target = e.target as HTMLDivElement | HTMLButtonElement // eventTerget has just 3 methods, so it masks this param from typescript
  if (!target.className.includes(options?.whiteListKey || 'not_handle')) {
    setState((old) => !old)
  }
}
