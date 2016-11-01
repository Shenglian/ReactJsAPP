/*jshint esversion: 6 */

import React from 'react';

export default class Geolocation extends React.Component {

  constructor(props) {
    super(props);

    this.geoFindMe = this.geoFindMe.bind(this)

    this.state = {};
  }

  geoFindMe(){
    var output = document.getElementById("out");

    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    function success(position) {

      let {
        latitude,
        longitude
      } = position.coords

      output.innerHTML = `<p>Latitude is ${latitude}° <br>Longitude is ${longitude}°</p>`

      var img = new Image();
      img.src = `http://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=16&size=400x400&markers=color:blue%7Clabel:S%7C${latitude},${longitude}`;

      output.appendChild(img);
    };

    function error() {
      output.innerHTML = "Unable to retrieve your location";
    };

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div id="wrapper">
        <div className="btn-mix-start" onClick={ this.geoFindMe } data-text="Show my location">Show my location</div>
        <div id="out"></div>
        
      </div>
    );
  }
}


