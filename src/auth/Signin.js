import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:4000/api/user/signin", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => { this.props.setToken(data.sessionToken)});

        event.preventDefault();
    }
        
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <h6>Fill in your information.</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input  type="text" name="email" placeholder="Enter your email" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit"> Sign in</Button>
                </Form>
            </div>
        )
    }
}
export default Signin;