import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContentCreate from './ContentCreate';
import ContentTable from './ContentTable';
import ContentEdit from './ContentEdit';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: [],
            updatedPressed: false,
            contentToUpdate: {}
        }
    }

    contentUpdate = (event, content) => {
        fetch(`http://localhost:4000/api/content/${event.target.id}`, {
            method: 'PUT',
            body: JSON.stringify({ content: content }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(res => {
            this.setState({ updatedPressed: false })
            this.fetchContent();
        })
    }

    setUpdatedContent = (event, content) => {
        this.setState({
            contentToUpdate: content,
            updatedPressed: true
            
        })
    }
    contentDelete = (event) => {
        fetch(`http://localhost:4000/api/content/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ content: { id: event.target.id }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(res => this.fetchContent())
    }
  
    componentDidMount() {
        this.fetchContent();
    }

    fetchContent = () => {
        fetch("http://localhost:4000/api/content", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then(res => res.json())
            .then(contentData => {
                return this.setState({ content: contentData })
            });
    }

    render() {
        const Contents = this.state.content.length >= 1 ? <ContentTable Contents={this.state.content}
            delete={this.contentDelete} update={this.setUpdatedContent} /> : <h2>Create some Notes</h2>
        return (
            <Container>
                <Row>
                    <Col xs="3">
                        <ContentCreate token={this.props.token} updateContentArray={this.fetchContent} />
                    </Col>
                    <Col xs="9">
                        {Contents}
                    </Col>
                </Row>

                <Col xs="12">
                    {
                        this.state.updatedPressed ? <ContentEdit t={this.state.updatedPressed} update={this.contentUpdate} content={this.state.contentToUpdate} />
                            : <div></div>
                    }
                </Col>
            </Container>
        );
    }
}

export default Index;