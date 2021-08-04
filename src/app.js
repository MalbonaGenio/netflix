import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Home, Signin, Signup, Browse} from "./pages"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import { useAuthListener } from "./hooks" 
import * as ROUTES from "./constants/routes"

export function App() {
  const { user } = useAuthListener()

  return (
    <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          
        >
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}
        >
          <Browse/>
        </ProtectedRoute>
    </Router>
  );
}

export default App;
