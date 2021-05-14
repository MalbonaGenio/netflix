import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Jumbotron from  "./components/jumbotron"
import Home from "./pages/Home"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <p>page</p>
        </Route>
        <Route path="/signup">
          <p>page</p>
        </Route>
        <Route path="/borwse">
          <p>page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
