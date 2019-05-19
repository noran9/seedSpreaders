
import * as React from 'react'
import { render } from 'react-dom'
import GoogleMapComponentWithMarker from './GoogleMapWithMarker'

// Some default styles
const styles = {
  width: '100%',
  height: '536px'
}

// Wrapper with Google Map component
class Main extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      infoboxMessage: '',
      link: '',
      isInfoboxVisible: false,
      markerLang: 0,
      markerLat: 0
    }
  }

  handleMarkerClick = (message, link, lang, lat) => {
    this.setState({
      infoboxMessage: message, // Message shown in info window
      link: link,
      isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
      markerLang: lang + 0.006, // Y coordinate for positioning info window
      markerLat: lat - 0.0004 // X coordinate for positioning info window
    })
  }

  handleInfoboxClick = () => {
    this.setState({
      isInfoboxVisible: false
    })
  }

  render(){
    return (
      <div style={styles}>
        <GoogleMapComponentWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAk9KeRuY3YHF9WZSwLrRcWi9YT_IR5ONY"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          link = {this.state.link}
          isInfoboxVisible={this.state.isInfoboxVisible} // Show/hide info window
          infoboxMessage={this.state.infoboxMessage} // Message shown in info window
          handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
          handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
          infoboxPosY={this.state.markerLang} // Y coordinate for positioning info window
          infoboxPosX={this.state.markerLat} // X coordinate for positioning info window
        />
      </div>
    )
	}
}

export default Main