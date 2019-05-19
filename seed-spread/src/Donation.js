import React from 'react';
import Header from './Header.js'


function Donation() {
  return (
    <div className="App">
      <Header />
      <div className="container jumbotron container">
		<br/><h5 >Choose any of our monthly subscription plans: </h5><br/>
        <div className="text-align-center">
          <div className="card-deck row">
            <div className="card col-4">
              <div className="card-block">
                <h4 className="card-title">Seed</h4>
             	<button className="btn-dark btn">4,99 € /month</button>
              </div>
            </div>
            <div className="card col-4">
              <div className="card-block">
                <h4 className="card-title">Sprout</h4>
              	<button className="btn-dark btn">9,99 €/ month</button>
              </div>
            </div>
            <div className="card col-4">
              <div className="card-block">
                <h4 className="card-title">Flower</h4>
              	<button className="btn-dark btn">14,99 €/ month</button>
              </div>
            </div>
          </div>
        </div>
        <br/><p className="lead">Or donate your own amount:</p>
      <button className="btn btn-dark">Donate</button>
      </div>
      <div className='container plantsbg text-align-center'><br/>
      	<h3 className="text-light">Our dear sponsors and top supporters:</h3><br/>
      	<img src="https://www.century.edu/sites/default/files/50th-anniversary-sponsor-list.png"/>
      </div>
    </div>
  );
}

export default Donation;
