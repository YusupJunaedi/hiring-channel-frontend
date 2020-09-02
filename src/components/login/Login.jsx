import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

// import component
import LeftAuth from "../leftAuth/LeftAuth";

// import css
import "./login.css";

const initialState = {
  email: "",
  password: "",
  emailError: false,
  passwordError: false,
};

class Login extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="container-auth">
        <LeftAuth />
        <div className="component-form">
          <Container>
            <Row className="no-gutters">
              <Col md={12} className="title-login">
                <p>Login</p>
              </Col>
              <Col md={12} className="form-login">
                <Form onClick={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label className="font-weight-bold">Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="input email..."
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="input password..."
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <p className="text-right font-weight-bold btn-forgot">
                      Forgot Password ?
                    </p>
                  </Form.Group>
                  <Button
                    variant="login"
                    size="lg"
                    block
                    className="button-login"
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button
                    variant="register"
                    size="lg"
                    block
                    className="register"
                  >
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Login;
