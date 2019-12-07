import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Trace from "./Trace"
import Health from "./health"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"

class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/" component={Default} />
        <Route exact path="/health" component={Health} />
     <Route exact path="/Trace/:encoded" component={Trace} />
      </Router>
    )
  }
  
}

class Default extends Component{
  render(){
    return(
      "Default page"
    )
  }
}

export default App;
