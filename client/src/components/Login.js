import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [open, setOpen] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className='demo'>
        <div className='logo'>
          <p className='hype'>Hype</p>
          <p className='hub'>HUB</p>
        </div>
        <div className='body-text'>
          <p className='text'>Start your mission?</p>
          {/* <i className="icon-navi fas fa-angle-double-down"></i> */}
          <Button
            onClick={() => setOpen(!open)}
            aria-controls='example-collapse-text'
            aria-expanded={open}
            className='slide-down-arrow'
          >
            <i className='icon-navi fas fa-angle-double-down'></i>
          </Button>
          <div className='Login'>
            <Collapse in={open}>
              <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Form.Group size='lg' controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size='lg' controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  block
                  size='lg'
                  type='submit'
                  disabled={!validateForm()}
                >
                  Login
                </Button>
                <p>New user?</p>
              </Form>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}
