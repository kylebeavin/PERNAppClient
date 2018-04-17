import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <h6>Fill in your information.</h6>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input  type="text" name="email" placeholder="Enter your email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="enter password" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
export default Signin;