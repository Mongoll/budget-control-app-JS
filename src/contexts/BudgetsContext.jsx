import React, { useContext } from "react"
import { v4 as uuidV4 } from "uuid"

import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()

export function useBudgets() {
  return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", [])
  const [expenses, setExpenses] = useLocalStorage("expenses", [])
  const [savings, setSavings] = useLocalStorage("savings", [{saving: 0, target: 0}])
  
  function addExpense({ description, amount, expenseDate}) {
    setExpenses(prevExpenses => {
      return [...prevExpenses, { id: uuidV4(), description, amount, expenseDate, type: "Expense" }]
    })
  }
  
  function addBudget({ name, income, incomeDate }) {
    setBudgets(prevBudgets => {
      return [...prevBudgets, { id: uuidV4(), name, income, incomeDate, type: "Income" }]
    })
  }

  function addSaving({ tempSaving }) {
    let tempTarget = savings[0].target
    let oldSaving = savings[0].saving
    setSavings(prevSavings => {
      return [{saving: oldSaving+tempSaving, target: tempTarget  }]
    })
  }

  function addTarget({ tempTarget }) {
    let tempSave = savings[0].saving
    setSavings(prevSavings => {
      return [{target: tempTarget, saving:tempSave }]
    })
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        savings,
        addExpense,
        addBudget,
        addSaving,
        addTarget
      }}
    >
      {children}
    </BudgetsContext.Provider>
  )
}
