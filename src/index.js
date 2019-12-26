import React from "react";
import ReactDOM from "react-dom";
import Loader from "./components/Loader/Loader";
import Search from "./components/SearchComponent/search";
import TerminalList from "./components/TerminalList/TerminalList";
import Map from "./components/MapComponent/maps";


import "./index.css";
import { arrayExpression } from "@babel/types";

class App extends React.Component {
  //id = 100;
  state = {
    isLoading:true,
    List: [],
    
    getChoiceCoordinates: { latitude: "", longitude: "" }
  };

  /*
  GoogleReadyHandler0sz8ix51() {
    var infoWindow, map = new google.maps.Map(document.getElementById("map0sz8ix51"), {
        center: {lat: 50.583031301923015, lng: 26.26654821776765},
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeId: "roadmap"
    });
    return map;
  }*/

  /*<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY&callback=GoogleReadyHandler0sz8ix51" async defer></script>
<script>function GoogleReadyHandler0sz8ix51() {
    var infoWindow, map = new google.maps.Map(document.getElementById("map0sz8ix51"), {
        center: {lat: 50.583031301923015, lng: 26.26654821776765},
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeId: "roadmap"
    });
    return map;
}</script>*/

  /*<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFRjbMHTWrgNvBoYhIoWmm6rUNX5jhwJY&callback=initMap"
  type="text/javascript"></script>*/

  componentDidMount() {
    fetch(
      "https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=Rivne"
    )
      .then(response => response.json())
      .then(({ devices }) => {
        this.setState({
          isLoading:false,
          List: devices
        });
      });
  }

  onCity = (city) => {
    //console.log("ssss", city);

    
    let url=`https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${city}`
    fetch(url)
      .then(response => response.json())
      .then(({ devices }) => {
        this.setState({
          isLoading:false,
          List: devices
         
        });
      });
    
  };

  /* render() {
    console.log("currentstate", this.state.character);
    return <div><h1>{this.state.devices}</h1></div>;
  }*/


  getChoiceCoordinates = (latitude, longitude) => {
    console.log(typeof latitude, longitude)
    this.setState({
      getChoiceCoordinates: { latitude, longitude }
    });
  };




  render() {
    // console.log("currentstate", this.state.List);
    return (
      <div className="container bootstrap snippet">
        
        
        {
          this.state.isLoading
        ?<Loader/>
        :<div>
          <h1 className="row d-flex justify-content-center">List</h1>
        </div>
        }
        <Search gCity={this.onCity}></Search>
        <TerminalList
          TerminalList={this.state.List}
          
          getChoiceCoordinates={(latitude, longitude) => this.getChoiceCoordinates(latitude, longitude)}
          
        ></TerminalList>
        <Map
        getChoiceCoordinates={this.state.getChoiceCoordinates}></Map>
        
      </div>
    );
  }
}

/*<ContactList ContactList={this.state.List} onDelete={this.onDelete} addFavorite={this.addFavorite}></ContactList>*/

ReactDOM.render(<App />, document.getElementById("root"));
