import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
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
        fetch("http://localhost:4000/api/user", {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => {this.props.setToken(data.sessionToken)});
        
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Create Account</h1>
                <h6>Fill in your information.</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup >
                        <Label for="firstname">First name</Label>
                        <Input type="text" name="firstname" placeholder="Enter first name" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last name</Label>
                        <Input type="text" name="lastname" placeholder="Enter last name" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" placeholder="Enter your email" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="enter password" onChange={this.handleChange} required/>
                    </FormGroup>
                    <Button type="submit"> Create </Button>
                </Form>
            </div>
        )
    }
}
export default Create;