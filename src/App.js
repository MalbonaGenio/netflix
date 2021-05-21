import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import * as ROUTES from "./constants/routes"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <p>signin</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>sign up</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>browse</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
