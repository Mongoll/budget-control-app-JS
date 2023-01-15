import { Card, ProgressBar, Button, Stack } from "react-bootstrap"

import { currencyFormatter } from "../utils"

export default function BudgetCard({
  name,
  income,
  target,
  type,
  incomeDate,
  hideButtons,
  onEditClick
}) {

  return (
    <Card className="bg-light m-2">
      <Card.Body>
      <div className="me-2">{type}</div>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
        <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            <span className="text-muted fs-6 ms-1">
              {currencyFormatter.format(income)}
            </span>
          </div>
        </Card.Title>
        <div className="me-2">{incomeDate}</div>
        {target && <div className="me-2"><span>Target:</span>{currencyFormatter.format(target)}</div>}
        {target && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(income, target)}
            min={0}
            max={target}
            now={income}
            label={`${Math.round(income/target*100)}%`}
          />
        )}
        {hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onEditClick}
            >
              Transfer to saving account
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  )
}
function getProgressBarVariant(income, target) {
  const ratio = income / target
  if (ratio < 0.5) return "primary"
  if (ratio < 0.75) return "warning"
  return "danger"
}
