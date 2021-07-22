import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Home, Signin, Signup} from "./pages"
import * as ROUTES from "./constants/routes"

export function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>browse</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;