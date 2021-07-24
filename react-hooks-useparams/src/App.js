import React from "react"
import { Route, Switch } from "react-router"
import Home from "./Screens/Home"
import User from "./Screens/User"

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user/:username/:details" component={User} />
    </Switch>
  )
}

export default App
