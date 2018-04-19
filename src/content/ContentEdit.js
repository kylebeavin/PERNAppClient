import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ContentEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            subject: '',
            notes: '',
            reference: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.content.id,
            subject: this.props.content.subject,
            notes: this.props.content.notes,
            reference: this.props.content.reference
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Update your notes</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} id={this.state.id}>
                            <FormGroup>
                                <Label for="subject">Subject</Label>
                                <Input type="select" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Type" required>
                                    <option value="">Pick one</option>
                                    <option value="English">English</option>
                                    <option value="History">History</option>
                                    <option value="Math">Math</option>
                                    <option value="Science">Science</option>
                                    <option value="Coding">Coding</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="notes">Notes</Label>
                                <Input type="text" name="notes" value={this.state.notes} placeholder="enter some notes" onChange={this.handleChange} required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="reference">Reference</Label>
                                <Input type="text" name="reference" value={this.state.reference} placeholder="add your links" onChange={this.handleChange} required/>
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

export default ContentEdit;