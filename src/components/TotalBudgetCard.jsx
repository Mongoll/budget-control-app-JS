import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard() {
  const { expenses, budgets, savings } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0) 
  const income = budgets.reduce((total, budget) => total + budget.income, 0)
  const saving = savings.reduce((total, saving2) => total + saving2.saving, 0)
  if (income === 0) return null

  return <BudgetCard  name="Current balance:" gray income={income-(amount+saving)} />
}
