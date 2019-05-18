import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Intro from './Intro.js'
import Main from './Main.js'
import Plants from './Plants.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Main />
      <Plants />
    </div>
  );
}

export default App;
