import { Dispatch, SetStateAction } from 'react'

export type SetToggleStateProp = Dispatch<SetStateAction<boolean>>

export interface GenericToggle {
  isOn: boolean
  setIsOn: SetToggleStateProp
}