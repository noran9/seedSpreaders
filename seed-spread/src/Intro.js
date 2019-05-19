import React from 'react'
import Logo from './logo.png'

function Intro(){
	return(
		<div className="jumbotron container">
			<br/><br/>
			<h1>Hi, my name is </h1>
			<img src={Logo} />
			<p className='lead'>Donate bellow to save me </p>
			<button className="btn btn-dark">Donate</button>
		</div>
	);
}

export default Intro