import { useState } from "react"
import { Button, Col, Row, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"

import AddBudgetModal from "./components/AddBudgetModal"
import AddExpenseModal from "./components/AddExpenseModal"
import AddSavingModal from "./components/AddSavingModal"
import BudgetCard from "./components/BudgetCard"
import SavingsCard from "./components/SavingsCard"
import EditModal from "./components/EditModal"
import TotalBudgetCard from "./components/TotalBudgetCard"
import {  useBudgets } from "./contexts/BudgetsContext"

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [showAddSavingModal, setShowAddSavingModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const { budgets, expenses } = useBudgets()

  function openEditModal() {
    setShowAddSavingModal(true)
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Income
          </Button>
          <Button variant="outline-primary" onClick={() => setShowAddExpenseModal(true)}>
            Add Expense
          </Button>
          <Button variant="outline-primary" onClick={() => setShowEditModal(true)}>
            Set saving target
          </Button>
        </Stack>
        <Row>
          <Col> 
            {budgets.map(budget => {
              return (
                <BudgetCard
                  key={budget.id}
                  type={budget.type}
                  name={budget.name}
                  income={budget.income}
                  incomeDate={budget.incomeDate}
                />
              )
            })}
          </Col>
          <Col>
            {expenses.map(expense => {
              return (
                <BudgetCard
                  key={expense.id}
                  type={expense.type}
                  name={expense.description}
                  income={expense.amount}
                  incomeDate={expense.expenseDate}
                />
              )
            })}
          </Col>
          <Col><SavingsCard onEditClick={() => openEditModal()}/></Col>
        </Row>
        <hr />
        <Row>
          <Col></Col>
          <Col><TotalBudgetCard /></Col>
          <Col></Col>
        </Row>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <AddSavingModal
        show={showAddSavingModal}
        handleClose={() => setShowAddSavingModal(false)}
      />
      <EditModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
      />
    </>
  )
}

export default App
