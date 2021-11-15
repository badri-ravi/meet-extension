import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import { LinkForm } from "./containers/link-form";
import { createEventInCalendar } from "./helpers";
import {Login} from "./containers/login";
import "./popup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC<{}> = () => {
  const [userAccessToken, setUserAccessToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [meetLink, setMeetLink] = useState<string>("");
  useEffect(() => {
    chrome.storage.local.get(['isLoggedIn'], function(result) {
      if(result.key === true) {
        setIsLoggedIn(true);
      }
    });
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      setUserAccessToken(token);
    });
  }, []);

  const logIn = () => {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      setIsLoggedIn(true);
      chrome.storage.local.set({isLoggedIn: true}, function() {
        console.log('user logged-in');
      });    
    });
  }

  const createEvent = () => {
    createEventInCalendar("", userAccessToken)
      .then((res) => res.json())
      .then((response) => {
        setMeetLink(response.conferenceData.entryPoints[0].uri);
      });
  };
  return (
    <Container>
      {!isLoggedIn && (
        <Login/>
      )}
      {isLoggedIn  && (
        <Container className="pt-2 flex" fluid>
            <LinkForm createEvent={createEvent}/>
            {meetLink !== "" && (
              <Row>
                <Alert variant="light">
                  Here is your link, it is valid for 24 hours{" "}
                  <a href={meetLink}>{meetLink}</a>
                </Alert>
              </Row>
            )}
          <Row>
            <a href="" className="text-center"><small>Click here to sign-in from a different account</small></a>
          </Row>
        </Container>
      )}
    </Container>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
