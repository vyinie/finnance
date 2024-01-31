import { BudgetChartDataProps } from '.'

const budgetList = (budgetData: BudgetChartDataProps) => {
  const collunSeries: ApexAxisChartSeries = [
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

  const stackedSeries: ApexAxisChartSeries = budgetData.classes.map(
    (budget) => {
      const percetual = (
        (budget.data.expense * 100) /
        budgetData.total
      ).toFixed(2)
      const serie = { data: [Number(percetual)], name: budget.name }
      return serie
    },
  )

  const xaxisCategories = budgetData.classes.map((budget) => budget.name)
  return { collunSeries, xaxisCategories, stackedSeries }
}

export { budgetList }
