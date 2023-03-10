import { useRef } from "react"
import { Form, Modal, Button } from "react-bootstrap"

import { useBudgets } from "../contexts/BudgetsContext"

export default function AddExpenseModal({
  show,
  handleClose
}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const dateRef = useRef()
  const { addExpense } = useBudgets()
  function handleSubmit(e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      expenseDate: dateRef.current.value
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="incomeDate">
            <Form.Label>Date of expense</Form.Label>
            <Form.Control
              ref={dateRef}
              type="date"
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
