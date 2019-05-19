import * as React from 'react'
import LocationIcon from './loc.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import necessary components for React Google Maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json')

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: 46.052093, // latitude for the center of the map
        lng: 14.467158 // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles: styles // change default map styles
      }}
    >
      <Marker
        icon={LocationIcon}
        position={{
          lat: 46.052093, // latitude for the center of the map
          lng: 14.467158 // longitude to position the marker
        }}
        onClick={(message, link, lang, lat) =>
          props.handleMarkerClick(
            'Read more for this location:',
            '/single',
            46.052093,
            14.467158
          )
        }
      />
      <Marker
        icon={LocationIcon}
        position={{
          lat: 46.052093, // latitude for the center of the map
          lng: 14.514411 // longitude to position the marker
        }}
        onClick={(message, link, lang, lat) =>
          props.handleMarkerClick(
            'Read more for this location:',
            '/second',
            46.052093,
            14.514411
          )
        }
      />

      {props.isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: props.infoboxPosY,
            lng: props.infoboxPosX
          }}
          onCloseClick={() => props.handleInfoboxClick()}
        >
          <div>
            <p className="Lead">{props.infoboxMessage}</p>
            <div className="btn btn-dark" >
            <Link to={props.link}>
            Check location
            </Link>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ))
)

// Export Google Map component
export default GoogleMapComponentWithMarker