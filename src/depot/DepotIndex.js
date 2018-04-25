import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import DepotTable from './DepotTable';

class Depot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: []
        }
    }

    componentDidMount() {
        this.fetchDisplay();
    }

    fetchDisplay = () => {
        fetch("http://localhost:4000/api/user", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(res => res.json())
        .then(display => {
            console.log(display)
            return this.setState({ display: display})
        });
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col xs="4"><DepotTable display={this.state.display}/></Col>
                    <Col xs="4"></Col>
                    <Col xs="4"></Col>
                </Row>
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4"></Col>
                    <Col xs="4"></Col>
                </Row>
                <Row>
                    <Col xs="4"></Col>
                    <Col xs="4"></Col>
                    <Col xs="4"></Col>
                </Row>                
            </Container>
        )
    }
}

export default Depot;