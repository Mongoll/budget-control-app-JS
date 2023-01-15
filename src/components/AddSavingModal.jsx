import { useRef } from "react"
import { Form, Modal, Button } from "react-bootstrap"

import { useBudgets } from "../contexts/BudgetsContext"

export default function AddSavingModal({ show, handleClose }) {
  const savingRef = useRef()
  const { addSaving } = useBudgets()
  function handleSubmit(e) {
    e.preventDefault()
    addSaving({
      tempSaving: parseFloat(savingRef.current.value),
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New saving</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="tempSeving">
            <Form.Label>Amount of savings</Form.Label>
            <Form.Control
              ref={savingRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Transfer to saving account
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}