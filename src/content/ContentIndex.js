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
        fetch("http:localhost:4000/api/content", {
            method: 'PUT',
            body: JSON.stringify({ content: content }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then(res => {
                this.setState({ updatePressed: false })
                this.fetchContent();
            })
    }

    setUpdatedContent = (event, content) => {
        this.setState({
            contentToUpdate: content,
            updatePressed: true
        })
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
                    <Col md="3">
                        <ContentCreate token={this.props.token} updateContentArray={this.fetchContent} />
                    </Col>
                    <Col md="9">
                        {Contents}
                    </Col>
                </Row>
                <Col md="12">
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