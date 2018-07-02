import React from "react";
import { Col, Row, Form, FormGroup, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";

import "../css/login.css";
import lambdaLogo from "../img/Lambda_Logo_Full.png";

/*
TODO
add link to 'Not a member' a href
*/

class Login extends React.Component {
    state = {
        Fields: {
            username: "",
            password: "",
        },
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({
            Fields: fields,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.Fields.username && this.state.Fields.password) {
            // this.props.login(this.state.Fields);
        }
    };

    render() {
        return (
            <div className="Login-Container">
                <img className="Login-Logo" src={lambdaLogo} />
                <Col xs="3">
                    <Row>
                        <Col>
                            <Form className="mr-4 ml-3">
                                <FormGroup>
                                    <Row className="Login-input">
                                        <Col xs="1">
                                            <i class="fas fa-user-alt" />
                                        </Col>
                                        <Col>
                                            <Input
                                                onChange={this.handleInputChange}
                                                value={this.state.Fields.username}
                                                name="username"
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row className="Login-input">
                                        <Col xs="1">
                                            <i class="fas fa-lock" />
                                        </Col>
                                        <Col>
                                            <Input
                                                onChange={this.handleInputChange}
                                                value={this.state.Fields.password}
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Button type="submit">Login</Button>
                                <p>
                                    Not a member? <a href="#">Sign up now</a>
                                    <i class="fas fa-long-arrow-alt-right" />
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Login;
