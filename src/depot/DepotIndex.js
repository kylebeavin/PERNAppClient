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
        fetch("https://kb-notesapp.herokuapp.com/api/user", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(res => res.json())
        .then(display => {
            return this.setState({ display: display})
        });
    }

    render() {
        return(
            <Container className="userContainer">
                    <DepotTable display={this.state.display}/>
            </Container>
        )
    }
}

export default Depot;