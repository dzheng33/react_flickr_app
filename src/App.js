import React, {Component} from 'react';
import apiKey from './config';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// importing components
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';


class App extends Component {

  state = {
    photos: [],
    loading: true,
    tag: ''
  };

  handleSearch = (tag) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false,
        tag: tag
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){

    return (
      <BrowserRouter>
        <div className="container">

        <Switch>
          <Route exact path="/" render={ ()=>  <SearchForm onSearch={this.handleSearch} /> } />
          <Route path="/:topic" render={ ()=>  <SearchForm onSearch={this.handleSearch} /> } />
        </Switch>
        

        <Nav onSearch={this.handleSearch}/>
   
        {(this.state.loading) 
            ? <p>Loading...</p>
            : 
              <Switch>
                  <Route exact path="/" render={ ()=> <PhotoList data={this.state} /> } />
                  <Route path="/:topic" render={ ()=> <PhotoList data={this.state} /> } />
                  <Route component={NotFound} />
              </Switch>
        }

            
      
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

