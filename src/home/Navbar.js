import React, { Component } from 'react'; 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button} from 'reactstrap';

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
                <NavbarBrand href="/">My Notes App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={() => this.props.clickDepot()}>Depot</Button>{' '}
                            <Button onClick={() => this.props.clickSignout()}>Sign out</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default SiteBar;