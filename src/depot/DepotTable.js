import React from 'react';
import { Col, Card, Button, CardTitle, CardText, Row } from 'reactstrap';

const DepotTable = (props) => {
    return (
        <div>
            {
                props.display.map((user, id) => {
                    return (
                            <Card className="personCard" key={id} body inverse color="primary">
                                <CardTitle>{user.firstname}{" "}{user.lastname}</CardTitle>
                                <CardText>sdffsdafadf</CardText>
                                <Button color="secondary" outline color="warning" size="lg" style={{ fontWeight: "bold", color: "white" }}>Button</Button>
                            </Card>
                    )
                })
            }
        </div>
    )
}

export default DepotTable;