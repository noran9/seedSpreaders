import React from 'react'

function Header(){
	return(
		<div>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
			<link rel="stylesheet" href="https://bootswatch.com/_assets/css/custom.min.css"/>
			<link rel="stylesheet" href="./App.css"/>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

			 <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Bee More</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gardens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Information</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donate</a>
            </li>
          </ul>
        </div>
      </nav>
		</div>
	);
}

export default Header