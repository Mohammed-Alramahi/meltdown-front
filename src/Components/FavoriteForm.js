import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class FavoriteForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={e=>this.props.update(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.props.name} onChange={this.props.updateName} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Overview</Form.Label>
                        <Form.Control type="text" value={this.props.overview} onChange={this.props.updateOverview} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Votes</Form.Label>
                        <Form.Control type="text" value={this.props.votes} onChange={this.props.updateVotes} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default FavoriteForm
