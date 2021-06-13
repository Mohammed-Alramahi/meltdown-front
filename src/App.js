import logo from './logo.svg';
import './App.css';
import React from 'react'
import Main from './Components/Main';
import Header from './Components/Header';
import FavoriteMovie from './Components/FavoriteMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyFavorite from './Components/MyFavorite';
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <MyFavorite />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }

}

export default App;
