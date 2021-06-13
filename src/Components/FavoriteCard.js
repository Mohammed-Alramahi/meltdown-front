import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
class FavoriteMovie extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.movie.name}</Card.Title>
                        <Card.Text>
                            overview: {this.props.movie.overview}<br />
                            votes: {this.props.movie.votes}<br/>
                            genres: <ul>
                                {
                                    this.props.movie.genre.map((item, index) => {
                                        return (<li key={index}>{item}</li>)
                                     })
                                }
                            </ul>
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.props.update(this.props.index)}>Edit</Button>
                        <Button variant="primary" onClick={() => this.props.delete(this.props.movie._id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default FavoriteMovie
