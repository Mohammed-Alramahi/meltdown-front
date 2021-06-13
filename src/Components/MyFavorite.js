import React, { Component } from 'react'
import axios from 'axios';
import FavoriteCard from './FavoriteCard';
import FavouriteForm from './FavoriteForm';   
class MyFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            show: false,
            showForm: false,
            newName: "",
            newOverview: "",
            newVotes: 0,
            index: 0,
            genre:'',
            server: "http://localhost:3300"
        }
    }
        componentDidMount = async () => {
        const movies = await axios.get(`${this.state.server}/getfav`)
        this.setState({
            movies: movies.data,
            show: true
        })
    }
    update =  (index) => {
        const chosen = this.state.movies[index];
        this.setState({
            showForm: true,
            newName: chosen.name,
            newOverview: chosen.overview,
            newVotes: chosen.votes,
            index: index,
        })
    }
    submit = async (e) => {
        e.preventDefault();
        const id = this.state.movies[this.state.index]._id;
        const body = {
            name: this.state.newName,
            overview: this.state.newOverview,
            votes: this.state.newVotes,
        }
        const updateMovie = await axios.put(`${this.state.server}/updatefav/${id}`, body);
        this.setState({
            movies:updateMovie.data
        })
        console.log(this.state.movies);
    }
    updateName = (e) => {
        this.setState({
            newName:e.target.value
        })
    }
    updateOverview = (e) => {
        this.setState({
            newOverview:e.target.value
        })
    }
    updateVotes = (e) => {
        this.setState({
            newVotes:e.target.value
        })
    }
    delete = async (id) => {
        const deleteMovie = await axios.delete(`${this.state.server}/deletefav/${id}`);
        this.setState({
            movies: deleteMovie.data
        })
    }
    render() {
        return (
            <>
                {
                    this.state.show && this.state.movies.map((item, index) => {
                        return <FavoriteCard update={this.update} delete={this.delete} movie={item} key={index} index={index} />
                    })
                }
                {
                    this.state.showForm && <FavouriteForm name={this.state.newName} overview={this.state.newOverview} votes={this.state.newVotes} updateName={this.updateName} updateOverview={this.updateOverview} updateVotes={this.updateVotes} update={this.submit}/>
                }
            </>
        )

    }
}

export default MyFavorite
