import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import "./rpgui.css";

export default function GamifyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div class="demo">
        <div class="logo">
          <p class="hype">
            Hype
          </p>
          <p class="hub">
            HUB
          </p>
        </div>
        <div class="body-text">
          <p class="text">
            Start your mission?
          </p>
          {/* <i class="icon-navi fas fa-angle-double-down"></i> */}
          <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="slide-down-arrow"
          >
          <i class="icon-navi fas fa-angle-double-down"></i>
          </Button>
          <Collapse in={open}>
            <Form onSubmit={handleSubmit}>

              <div className="Login">
                <div className="rpgui-content">
                  <div className="rpgui-container framed">
                    <h1>Log In</h1>
                    <hr />
                    <Form.Group size="lg" controlId="email">
                      <Form.Label>E-mail</Form.Label>
                      <input type="email" name="email" value={email} autocomplete="off" onChange={(e) => setEmail(e.target.value)} />
                      <br/><br/>

                      <Form.Label>Password</Form.Label>
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <br /><br />
                    </Form.Group>

                    <div className="rpgui-center">
                    <button className="rpgui-button" type="submit" disabled={!validateForm()}><p class="lol">Enter</p></button>
                    </div>
                  </div>
                </div>
                
              </div>
            </Form>
          </Collapse>
        </div>
      </div>
    </>
  );
}