import React from 'react';
import { Table, Button } from 'reactstrap';

const ContentTable = (props) => {
    return (
        <div>
            <h3>Check out your notes</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Notes</th>
                        <th>References</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.workouts.map((content, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{content.id}</th>
                                    <td>{content.subject}</td>
                                    <td>{content.notes}</td>
                                    <td>{content.references}</td>
                                    <td>
                                        <Button id={content.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={content.id} onClick={e => props.update(e, content)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ContentTable;