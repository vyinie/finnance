import React from 'react'
import { BudgetChart } from './BudgetChart'
import FullScreenModal from '@/components/FullScreenModal'
import { GenericToggle } from '@/functions/interfaces'
import { BudgetChartDataProps } from '.'

interface FullScreenBudgetChartProps extends GenericToggle {
  budgetData: BudgetChartDataProps
}

export default function FullScreenBudgetChart({
  budgetData,
  isOn,
  setIsOn,
}: FullScreenBudgetChartProps) {
  return (
    <FullScreenModal isOn={isOn} setIsOn={setIsOn}>
      <BudgetChart budgetData={budgetData} />
    </FullScreenModal>
  )
}
