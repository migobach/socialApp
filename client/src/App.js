import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import FetchPosts from './components/FetchPosts'


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/posts" component={FetchPosts} />

    <Route component={NoMatch} />
  </Switch>
)

export default App