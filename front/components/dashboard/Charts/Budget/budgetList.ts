import { BudgetChartDataProps } from '.'

const budgetList = (budgetData: BudgetChartDataProps) => {
  const collunSeries: ApexAxisChartSeries = [
    {
      data: budgetData.classes.map(({ color, data, name }) => ({
        x: name,
        y: data.expense,
        goals: [
          {
            name: 'Limite',
            value: data.spendingCap,
            strokeColor: '#777',
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
