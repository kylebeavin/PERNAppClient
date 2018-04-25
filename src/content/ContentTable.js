import React from 'react';
import { Table, Button } from 'reactstrap';

const ContentTable = (props) => {
    return (
        <div>
            <h3>Check out your notes</h3>
            <hr />
            <Table responsive striped >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Notes</th>
                        <th>References</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {
                        props.Contents.map((content, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{content.id}</th>
                                    <td>{content.subject}</td>
                                    <td>{content.notes}</td>
                                    <td>{content.reference}</td>
                                    <td>
                                        <Button id={content.id} onClick={props.delete} outline color="warning" size="lg" style={{fontWeight: "bold"}}>Delete</Button>
                                        <Button id={content.id} onClick={e => props.update(e, content)} outline color="warning" size="lg" style={{fontWeight: "bold"}}>Update</Button>
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