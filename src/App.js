import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Home from './Home'
import Up from './movies_navs/Up'
import Lase from './movies_navs/Lase'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upcoming" component={Up} />
          <Route exact path="/latest" component={Lase} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
