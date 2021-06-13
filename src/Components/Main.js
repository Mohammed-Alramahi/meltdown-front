import React, { Component } from 'react'
import axios from 'axios';
import FavoriteMovie from './FavoriteMovie';
 class Main extends Component {
     constructor(props) {
         super(props);
         this.state = {
             movies: [],
             show: false,
             server: "http://localhost:3300"
         }
     }
     componentDidMount = async() => {
         const movies = await axios.get(`${this.state.server}/getmovies`)
         this.setState({
             movies: movies.data,
             show:true
         })
     }
     addToFav = async(movie) => {
         const add = await axios.post(`${this.state.server}/addtofav`, movie);
         console.log(movie);
     }
     render() {
        return (
            <div>
                { this.state.show&&
                    this.state.movies.map((item, index) => {
                        return <FavoriteMovie key={index} genre={ item.genre} movie={this.state.movies[index]} addToFav={this.addToFav} overview={item.overview} name={item.name} votes={item.votes}/>
                    })
                   
                }
            </div>
        )
    }
}

export default Main
