import React from 'react'
import Marigold from './marigold.jpg'
import Daisy from './daisy.jpg'
import Lavender from './lavender.jpg'

function Plants(){
	return(
		<div className="container jumbotron container">
		<h5 >Choose some of the bee-friendly plants to plant</h5><br/>
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={Marigold} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Marigold</h4>
                <p className="card-text">Marigolds are bee attracting plants, best to plant them in summer</p>
             	<button className="btn-dark btn">Plant now</button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Daisy} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Daisy</h4>
                <p className="card-text">Daisies are an amazing option for summer!</p>
              	<button className="btn-dark btn">Plant now</button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Lavender} alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Lavender</h4>
                <p className="card-text">Lavender plants are very rich in nectar for all pollinating insects, and it's a marvelous plant to get in your garden.</p>
              	<button className="btn-dark btn">Plant now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
}

export default Plants