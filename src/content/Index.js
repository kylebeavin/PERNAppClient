import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: []
        }
    }

    componentDidMount() {
        this.fetchContent();
    }

    fetchContent = () => {
        fetch("http://localhost:4000/api/user/content", {
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
        return (
            <Container>
                <Row>
                    <Col md="3">
                        {/* the create component will go here*/}
                    </Col>
                    <Col md="9">
                        <h2>This is where we are going to do something eventually</h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Index;