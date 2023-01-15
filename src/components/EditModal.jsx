import { useRef } from "react"
import { Form, Modal, Button } from "react-bootstrap"

import { useBudgets } from "../contexts/BudgetsContext"

export default function AddSavingModal({ show, handleClose }) {
  const targetRef = useRef()
  const { addTarget } = useBudgets()
  function handleSubmit(e) {
    e.preventDefault()
    addTarget({
      tempTarget: parseFloat(targetRef.current.value),
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit target</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="tempTarget">
            <Form.Label>Set target</Form.Label>
            <Form.Control
              ref={targetRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Set target
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}