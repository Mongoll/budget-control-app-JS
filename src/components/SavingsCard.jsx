import BudgetCard from "./BudgetCard"
import { useBudgets } from "../contexts/BudgetsContext"


export default function SavingsCard({onEditClick}) {

  const { savings } = useBudgets()
   const saving = savings.reduce((total, saving) => total + saving.saving, 0)
   const target = savings.reduce((total, target) => total + target.target, 0)
  if (target === 0) return null

  return <BudgetCard  name="Current saving:" gray income={saving} target={target} hideButtons onEditClick={onEditClick} />
}