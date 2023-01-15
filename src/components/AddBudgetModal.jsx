import { useRef } from "react"
import { Form, Modal, Button } from "react-bootstrap"

import { useBudgets } from "../contexts/BudgetsContext"

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef()
  const incomeRef = useRef()
  const dateRef = useRef()
  const { addBudget } = useBudgets()
  function handleSubmit(e) {
    e.preventDefault()
    addBudget({
      name: nameRef.current.value,
      income: parseFloat(incomeRef.current.value),
      incomeDate: dateRef.current.value
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Income source</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Amount of income</Form.Label>
            <Form.Control
              ref={incomeRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="incomeDate">
            <Form.Label>Date of income</Form.Label>
            <Form.Control
              ref={dateRef}
              type="date"
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add income
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
