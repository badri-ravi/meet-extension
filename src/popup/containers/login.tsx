import React, { useState, useEffect } from "react";
import { Row, Button} from "react-bootstrap";

export const Login: React.FC<{}> = ()  => {
    return (
        <Row>
            <Button type='button' className="primary">Log-in</Button>
        </Row>
    )
}