import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import { LinkForm } from "./containers/link-form";
import { createEventInCalendar } from "./helpers";
import {Login} from "./containers/login";
import "./popup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Logout } from "./containers/logout";
import { DisplayLink } from "./containers/display-link";

const App: React.FC<{}> = () => {
  const [userAccessToken, setUserAccessToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [meetLink, setMeetLink] = useState<string>("");
  useEffect(() => {
     chrome.storage.local.get(['isLoggedIn'], function(result) {
      if(result.isLoggedIn === true) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  const logIn = () => {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      setIsLoggedIn(true);
      setUserAccessToken(token);
      chrome.storage.local.set({isLoggedIn: true}, function() {
        console.log('user logged-in');
      });    
    });
  }

  const logOut = () => {
    userAccessToken !== "" && window.fetch("https://accounts.google.com/o/oauth2/revoke?token=" + userAccessToken);
    chrome.identity.removeCachedAuthToken({'token' : userAccessToken}, function(){
      setIsLoggedIn(false);
      setUserAccessToken("");
      chrome.storage.local.set({isLoggedIn: false}, function() {
        console.log('user logged out');
      }); 
    })
  
  }

  const createEvent = () => {
    createEventInCalendar("", userAccessToken)
      .then((res) => res.json())
      .then((response) => {
        setMeetLink(response.conferenceData.entryPoints[0].uri);
        navigator.clipboard.writeText(response.conferenceData.entryPoints[0].uri).then(() => {
          console.log("copied to clipboard");
      }, () => {
         console.log("copy to clipboard failed");
      });
      });
  };
  return (
    <Container>
      {!isLoggedIn && (
        <Login logIn={logIn}/>
      )}
      {isLoggedIn  && (
        <Container className="pt-2 flex" fluid>
            <LinkForm createEvent={createEvent}/>
            {meetLink !== "" && (
              <DisplayLink meetLink={meetLink}/>
            )}
         <Logout logOut={logOut}/>
        </Container>
      )}
    </Container>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
