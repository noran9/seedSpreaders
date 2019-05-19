import React from 'react';
import Header from './Header.js'
import Main from './Main.js'

function Garden() {
  return (
    <div>
      <Header />
      <div className="container jumbotron">
      <br/><h3>Check out our map of bee deficient locations</h3><br/>
	      <Main />
      </div>
    </div>
  );
}

export default Garden;
