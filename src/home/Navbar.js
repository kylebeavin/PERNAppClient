import React, { Component } from 'react'; 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class SiteBar extends Component {
    constructor(props) {  
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="faded"  light expand="md">
                <NavbarBrand href="/" style={{color:"white",fontWeight:"bold"}}>THE DEPOT</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <Link to='/'><Button outline color="warning" size="lg" style={{fontWeight: "bold", color: "white"}}>Content</Button>{' '}</Link>
                            <Link to='/depot'><Button outline color="warning" size="lg" style={{fontWeight: "bold", color: "white"}}>Depot</Button>{' '}</Link>
                            <Button outline color="warning" size="lg" style={{fontWeight: "bold", color: "white"}} onClick={() => this.props.clickSignout()}>Sign out</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default SiteBar;