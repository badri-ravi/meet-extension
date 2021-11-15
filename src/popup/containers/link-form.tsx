import React from "react";
import { Row, Form, Button } from "react-bootstrap";

export const LinkForm: React.FC<{createEvent: () => void}> = ({createEvent}) => {
  return (
    <Row>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter title for your link</Form.Label>
          <Form.Control type="text" placeholder="Enter title (optional)" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={createEvent}>
          Submit
        </Button>
      </Form>
    </Row>
  );
};
