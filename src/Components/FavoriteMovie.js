import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
class FavoriteMovie extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            overview: {this.props.overview}<br />
                            votes: {this.props.votes}<br/>
                            genres: <ul>
                                {
                                    this.props.genre.map((item, index) => {
                                        return (<li key={index}>{item}</li>)
                                     })
                                }
                            </ul>
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.props.addToFav(this.props.movie)}>add to fav</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default FavoriteMovie
