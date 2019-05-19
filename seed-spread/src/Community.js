import React from 'react';
import './App.css';
import Header from './Header.js'
import Plants from './Plants.js'
import LocationIcon from './loc.png'
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

var pos;

const Map = compose(
    withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        })
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{
        	lat: 46.052093, // latitude for the center of the map
        	lng: 14.467158 // longitude for the center of the map
      		}}
      		defaultOptions={{ // disable default map UI
        	draggable: true, // make map draggable
        	keyboardShortcuts: false, // disable keyboard shortcuts
        	scaleControl: true, // allow scale controle
        	scrollwheel: true,
        	mapTypeId: 'satellite'// change default map styles
      		}}
            onClick={props.onMapClick}
        >
            {props.isMarkerShown && <Marker icon={LocationIcon} 
            position={props.markerPosition} title={props.markerPosition} onClick={() =>
         document.getElementById('coor').placeholder=props.markerPosition
        }/>}

        </GoogleMap>
    )

function Community() {
  return (
    <div className="App">
      <Header />
      <div className="container jumbotron"><br/>
      <h1>Join our group of volunteers!</h1>
      <form className="form-group">
      	<label>E-mail</label>
      	<input className='form-control' type='text'/><br/>
      	<input className='btn btn-dark form-control' type='submit' value='Apply'/>
      </form>
      </div><hr/>
      <Plants />
      <div className="jumbotron container">
      <br/><h3>Help us by targeting new locations!</h3><br/>
      <div style={{ height: '100%' }}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAk9KeRuY3YHF9WZSwLrRcWi9YT_IR5ONY"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
      </div>
      <form><br/>
      <input className="form-control" id="coor"/><br/>
      <input className='btn btn-dark' type='submit' value='Send coordinates'/>
      </form>
      </div>
    </div>
  );
}

export default Community;
