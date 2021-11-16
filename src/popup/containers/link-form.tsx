import React from "react";
import { Row, Form, Button } from "react-bootstrap";

export const LinkForm: React.FC<{ createEvent: () => void }> = ({
  createEvent,
}) => {
  return (
    <Row>
      <Button variant="primary" type="button" onClick={createEvent} onKeyPress={event => { if(event.key === "Enter"){ console.log("keypress") }}}>
          Click to create your link
      </Button>
    </Row>
  );
};
