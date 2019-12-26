
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../Marker/marker";
import "./maps.css";
 
const AnyReactComponent = ({ text }) => <div className="mark">{text} </div>;
 
class Map extends Component {
  state = {
    latitude: 50.619154,
    longitude: 26.252096,
    center: {
      lat: 50.61,
      lng: 26.25
    },
    zoom: 13
  };
 
  render() {
    const {getChoiceCoordinates} = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.latitude}
            lng={this.state.longitude}
            
            //text="Marker"
          />
          <div className="markTerm"
lat={Number(getChoiceCoordinates.latitude)}
lng={Number(getChoiceCoordinates.longitude)}

          />
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
