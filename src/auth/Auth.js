import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Create from './Create';
import Signin from './Signin';

const Auth = (props) => {
    return (
        <Container>
            <Row>
                <Col md='6'>
                    <Create setToken={props.setToken}/>   
                </Col>
                <Col md='6'>
                    <Signin setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;