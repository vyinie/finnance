import { BudgetChartDataProps } from '.'

const budgetList = (budgetData: BudgetChartDataProps) => {
  const budgetSeries = [
    {
      data: budgetData.classes.map((budget) => ({
        x: budget.name,
        y: budget.data.expense,
        goals: [
          {
            name: 'Limite',
            value: budget.data.spendingCap,
            strokeColor: '#555',
            strokeHeight: 4,
            strokeLineCap: 'round',
          },
        ],
      })),
    },
  ]

  const xaxisCategories = budgetData.classes.map((budget) => budget.name)
  return { budgetSeries, xaxisCategories }
}

export { budgetList }
