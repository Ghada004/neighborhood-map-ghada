import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import * as FourSquareAPI from './FourSquareAPI';
import './App.css';

import MapView from './MapView';
import SearchList from './SearchList';

class App extends Component {
  state = {
    query: '',
    places: [],
    selectedPlace: ''
  }
  // Get places data from foursquare when component initial mounted
  componentDidMount() {
    FourSquareAPI.search('Riyadh', 'Pizza').then(places => {
      this.setState({ places });
    });
  }
  // Update search query
  // comes  SearchList Component
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }
  // Get and update place info from SearchList Component
  updatePlace = (place) => {
    this.setState({selectedPlace: place});
  }

  render() {
    const { query, places, selectedPlace } = this.state;
    let filteredPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filteredPlaces = places
        .filter(place => match.test(place.name));
    } else {
      filteredPlaces = places;
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded pizzaHeader0">
            <a className="navbar-brand" href="/">Pizza Locations</a>
          </nav>
        </header>
        <div className="container-fluid pizzaHeader">
          <div className="row no-gutters">
            <div className="col-md-3">
              <SearchList
                query={this.updateQuery}
                places={filteredPlaces}
                selectPlace={this.updatePlace}/>
            </div>
            <div className="col-md-9" tabIndex="-1">
              <MapView
                places={filteredPlaces}
                selectPlace={selectedPlace}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
