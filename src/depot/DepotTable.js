import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const DepotTable = (props) => {
    return (
        <div className="DepotTable">
            {
                props.display.map((user, id) => {
                    return (
                            <Card className="personCard" key={id} body inverse color="primary">
                                <CardTitle>{user.firstname}{" "}{user.lastname}</CardTitle>
                                <CardText>{user.email}</CardText>
                                <Button color="secondary" outline color="warning" size="lg" style={{ fontWeight: "bold", color: "white" }}>Button</Button>
                            </Card>
                    )
                })
            }
        </div>
    )
}

export default DepotTable;