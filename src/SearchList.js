import React, { Component } from 'react';



// This component is for search list view, it render the props places data,
// handle cilck for place item
class SearchList extends Component {
  render() {
    const { places, query, selectPlace } = this.props;

    return (
      <div className="container">
        <hr/>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter"
            aria-label="Filter Input"
            onChange={(event) => {
              query(event.target.value);
            }}
            />
            <span className="input-group-addon">
              <i className="fas fa-filter"></i>
            </span>
        </div>
        <hr/>
        <div style={{maxHeight: '82vh',overflow: 'scroll'}}>
          <ul className="list-group">
            {places.map(place => (
              <li
                tabIndex="0"
                key={place.id}
                className="list-group-item list-group-item-action"
                onClick={() => selectPlace(place)}>
                <span>{place.name}</span>
              </li>
            ))}</ul>
        </div>
      </div>
    );
  }
}

export default SearchList;
