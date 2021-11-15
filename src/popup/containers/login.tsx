import React from "react";
import { Row, Button} from "react-bootstrap";

export const Login: React.FC<{logIn: () => void}> = ({logIn})  => {
    return (
        <div className="login-container"> 
             <h4 className="text-center"> Create Instant Google Meet Links </h4>
            <Button type='button' className="primary wd-50" onClick={logIn} size="sm">Log-in</Button>
        </div>
    )
} 