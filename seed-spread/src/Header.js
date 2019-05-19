import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(){
	return(
		<div>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
			<link rel="stylesheet" href="https://bootswatch.com/_assets/css/custom.min.css"/>
			<link rel="stylesheet" href="./App.css"/>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

			 <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <Link to='/' className="navbar-brand">Bee More</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/' className="nav-link" >Home</Link><span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <Link to='/main' className="nav-link">Gardens</Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link">Community</Link>
            </li>
            <li className="nav-item">
              <Link to="/donation" className="nav-link">Donate</Link>
            </li>
          </ul>
        </div>
      </nav>
		</div>
	);
}

export default Header