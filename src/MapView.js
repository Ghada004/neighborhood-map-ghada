import React, { Component }from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyBfQHohK2BwUeCd3HEGCnm1r5DtBh1kEY8&v=3",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 54px)` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 24.7135517, lng: 46.6752957 }}
    >
    {props.placeDetail? props.placeDetail.map(place => (
      <Marker
        key={place.id}
        position={{ lat: place.location.lat, lng: place.location.lng }}
        animation={window.google.maps.Animation.BOUNCE}
        >
        <InfoBox>
          <div className="card">
            <div className="card-header" style={{ fontSize: `1rem`, fontColor: `#08233B` }}>
              {place.name}
            </div>
            <div className="card-block">
              <h6>Address</h6>
              <p>{place.location.formattedAddress}</p>
            </div>
          </div>
        </InfoBox>
      </Marker>
    )):(null)}
    {props.places.map(place => (
        <Marker
          key={place.id}
          position={{ lat: place.location.lat, lng: place.location.lng }}
          onClick={() => props.onMarkerClick(place.id)}
          >
        </Marker>
      ))}
  </GoogleMap>

));

class MapView extends Component {
  state = {
    selectId: ''
  }
  // This is for tracing  SearchList state, when item clicked
  // selectId changed
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectId: nextProps.selectPlace.id
    });
  }

  handleMarkerClick = (selectId) => {
    this.setState({ selectId });
  }

  handleMapLoad = (map) => {
    if(!map){
      window.alert("GooleMap seems doesn't load corretly, please refresh page!");
    }
    console.log(map);
  }

  render() {
    const { places } = this.props;
    const { selectId } = this.state;

    let renderPlaces;
    let clickPlace;

    // If markers click, render markers
    if(selectId){
      renderPlaces = places.filter(place => place.id !== selectId);
      clickPlace = places.filter(place=>place.id === selectId);
    } else {
      renderPlaces = places;
    }

    return (
      <Map
        onMarkerClick={this.handleMarkerClick}
        places={renderPlaces}
        placeDetail={clickPlace}
        onMapLoad={this.handleMapLoad}
      />
    );
  }
}

export default MapView;
