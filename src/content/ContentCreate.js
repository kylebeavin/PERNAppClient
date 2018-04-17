import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContentCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject:'',
            notes: '',
            reference: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/api/content", {
            method: 'POST',
            body: JSON.stringify({content: this.state}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(res => res.json())
        .then(data => {
            this.props.updateContentArray();
            this.setState({
                subject: '',
                notes: '',
                reference: '',
            })
        })
    } 

    render() {
        return (
            <div>
                <h3>Post your notes</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="subject">Subject</Label>
                        <Input type="select" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Type">
                            <option value="English">English</option>
                            <option value="History">History</option>
                            <option value="Math">Math</option>
                            <option value="Science">Science</option>
                            <option value="Coding">Coding</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Notes</Label>
                        <Input type="text" name="notes" value={this.state.notes} placeholder="enter some notes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="references">References</Label>
                        <Input type="text" name="references" value={this.state.references} placeholder="add your links" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Create </Button>
                </Form>
            </div>
        )
    }
}

export default ContentCreate;