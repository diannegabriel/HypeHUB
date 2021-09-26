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
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 5;
  }

  return (
    <>
      <div className="demo">
        <div className="logo">
          <p className="hype">
            Hype
          </p>
          <p className="hub">
            HUB
          </p>
        </div>
        <div className="body-text">
          <p className="text">
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
                      <input type="email" name="email" value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                      <br/><br/>

                      <Form.Label>Password</Form.Label>
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 6-20 characters long, contain letters and numbers, and
                        must not contain spaces, special characters, or emoji.
                      </Form.Text>
                      <br /><br />
                    </Form.Group>

                    <div className="rpgui-center">
                    <button className="rpgui-button" type="submit" disabled={!validateForm()}><p className="button-text">Enter</p></button>
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