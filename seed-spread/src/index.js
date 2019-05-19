import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Location from './Single'
import Location2 from './Second'
import Main from "./Main"
import Header from './Header'
import Garden from './Gardens'
import Community from "./Community"
import Donation from "./Donation"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class RouterNavigationSample extends React.Component {
  render() {
    return (
      <Router>
      	<>
          <Route exact path="/" component={App} />
          <Route path="/single" component={Location} />
          <Route path="/second" component={Location2} />
          <Route path="/main" component={Garden} />
          <Route path="/community" component={Community} />
          <Route path="/donation" component={Donation} />
        </>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
