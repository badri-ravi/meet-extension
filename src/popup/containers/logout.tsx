import React from "react";
import {Row} from "react-bootstrap";

export const Logout: React.FC<{logOut: () => void}> = ({logOut}) => {

    return (
        <Row>
            <a className="text-center" onClick={logOut}><small>Click here to sign-in from a different account</small></a>
        </Row>
    )
}