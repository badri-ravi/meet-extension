import React from "react";
import { Row, Alert } from "react-bootstrap";

export const DisplayLink: React.FC<{ meetLink: string }> = ({ meetLink }) => {
  return (
    <Row>
      <Alert variant="light">
        Link copied to clipboard, valid for 24 hours<br/>
        <a href={meetLink}>{meetLink}</a>
      </Alert>
    </Row>
  );
};
