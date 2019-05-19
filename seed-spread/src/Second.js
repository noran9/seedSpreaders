import React from 'react';
import Header from './Header';


class Location2 extends React.Component {
	constructor(){
		super()
		this.state = {data: null,};
	}

  	render(){
	  	return (
	    <div className="App">
	      <Header />
	      <div className="jumbotron container">
	       <br/><br/>
				<p className="lead">Check out all information for location: </p>
				<h2>Bee Hive University of Ljubljana</h2><br/>
	      	<div className="row container">
				<div className="col-6">
					<p className="lead">Historical satellite view (2016-05-18): </p>
					<img src="http://services.sentinel-hub.com/ogc/wms/5ba3f65c-2d71-45fd-9dcb-2f3a27d1b4b3?REQUEST=GetMap&BBOX=4605365,1449415,4610365,1455415&LAYERS=TRUE_COLOR&MAXCC=20&WIDTH=320&HEIGHT=320&FORMAT=image/jpeg&TIME=2016-05-18"/>
		  		</div>
		  		<div className="col-4">
		  			<p className="lead">Current satellite view: </p>
		  			<img src="http://services.sentinel-hub.com/ogc/wms/5ba3f65c-2d71-45fd-9dcb-2f3a27d1b4b3?REQUEST=GetMap&BBOX=4605365,1449415,4610365,1455415&LAYERS=AGRICULTURE&MAXCC=20&WIDTH=320&HEIGHT=320&FORMAT=image/jpeg&TIME=2019-05-18"/>
		  		</div>
		  		<div className="col-2">
		  			<p className="lead">List of planted flowers: </p>
		  			<ul className="list-group bg-dark">
		  				<li className="list-group-item bg-dark text-light">Marigolds</li>
		  				<li className="list-group-item bg-dark text-light">Dasies</li>
		  			</ul>
		  		</div>
		  	</div>
		  </div>
		  <div className="container jumbotron">
	      			<h2>Timelapse over Ljubljana</h2>
					<video width="960" height="540" autoplay="true" loop="true">
					<source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://storage.googleapis.com/planet-t2/46-05deg-n-14-49deg-e-01sm0vWZR/movie.mp4"/>
					</video>
				</div>
	    </div>
	  )
  }
}

export default Location2;